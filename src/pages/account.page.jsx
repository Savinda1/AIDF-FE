import { SignedIn, useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router";
import { useGetBookingsQuery } from "@/lib/api/api";
import MyBooking from "@/components/MyBooking";

const AccountPage = () => {
  const { data: bookings, isLoading, isError, error } = useGetBookingsQuery();

  const { isLoaded, isSignedIn, user } = useUser();

  if (!isSignedIn) {
    return <Navigate to="/sign-in" />;
  }

  return (
    <main className="container mx-auto px-4 py-8 min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold">My Account</h1>
      <div className="mt-8">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Personal Information
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-muted-foreground">Name: {user?.fullName}</p>
          </div>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Email: {user?.emailAddresses[0].emailAddress}
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-2">
      {bookings?.map((booking) => (
  <MyBooking  key={booking._id} booking={booking} />
))}
 </div>
    </main>
  );
};

export default AccountPage;