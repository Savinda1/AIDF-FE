import { useEffect, useState } from "react";
//import { useCreateCheckoutSessionMutation } from "@/lib/api/api";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js";
import { useCallback } from "react";
import { useAuth } from "@clerk/clerk-react";

const STRIPE_PUBLISHABLE_KEY = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;
const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const CheckoutForm = ({ bookingId }) => {
  const [error, setError] = useState(null);
  const { getToken } = useAuth();

  const fetchClientSecret = useCallback(async () => {
    try {
      const token = await getToken();
      if (!token) {
        throw new Error("Authentication token not available");
      }

      const res = await fetch(
        `${BACKEND_URL}/api/payments/create-checkout-session`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ bookingId }),
        }
      );

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to create checkout session");
      }

      const data = await res.json();

      
      return data.clientSecret;
    } catch (err) {
      setError(err.message);
      console.error("Error creating checkout session:", err);
      throw err;
    }
  }, [bookingId, getToken]);

  const options = { fetchClientSecret };

  if (error) {
    return (
      <div className="error-message">
        <p>Error: {error}</p>
        <button onClick={() => setError(null)}>Try Again</button>
      </div>
    );
  }

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
};

export default CheckoutForm;