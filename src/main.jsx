import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css';
import MainLayout from "./layouts/main.layout";
import RootLayout from "./layouts/root-layout-layout";
import HomePage from './pages/home.page';
import HotelPage from './pages/hotel.page';
import HotelsPage from './pages/hotels.page';
import SignInpage from './pages/sign-in.page';
import SignUpPage from './pages/sign-up.page';
import AccountPage from  './pages/account.page';
import CreateHotels from './pages/create-hotel.page';
import PaymentPage from './pages/payment.page';
import CompletePage from './pages/complete.page';

import { store } from "./lib/api/store";
import { Provider } from "react-redux";
import { ClerkProvider } from "@clerk/clerk-react";
import ProtectedLayout from "./layouts/protected.layout";
import AdminProtectedLayout from "./layouts/admin-protected-layout";


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Add your Clerk Publishable Key to the .env.local file");
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <Provider store={store}>
     <BrowserRouter>
        <Routes>
           <Route element={<RootLayout />}>
           <Route element={<MainLayout />}>
             <Route path="/" element={<HomePage />} />
             <Route path="/booking/payment" element={<PaymentPage />} />
            <Route path="/booking/complete" element={<CompletePage />} />
      <Route element={<ProtectedLayout />}>
           <Route path="/hotel/:id" element={<HotelPage />} />
           <Route path="/account" element={<AccountPage />} />
          <Route element={<AdminProtectedLayout />}>
           <Route path="/hotels" element={<HotelsPage />} />
           <Route path="/hotels/create" element={<CreateHotels />} />
          </Route>
          </Route>
          </Route>
       <Route path="/sign-in" element={< SignInpage/>} />
      <Route path="/sign-up" element={< SignUpPage />} />
       </Route>
      </Routes>
</BrowserRouter>
      </Provider>
    </ClerkProvider>
    </StrictMode>
);
