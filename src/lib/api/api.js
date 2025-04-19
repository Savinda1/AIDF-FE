import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//const BACKEND_URL = "http://localhost:8000";

//const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


export const api = createApi({
  reducerPath: "api",
 // baseQuery: fetchBaseQuery({ baseUrl: `${BACKEND_URL}/api/`,
 baseQuery: fetchBaseQuery({ baseUrl: "https://aidf-horizone-backend-amila.vercel.app/api/",

    prepareHeaders: async (headers, { getState }) => {
    const token = await window?.Clerk?.session?.getToken();
    console.log(token);
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
  } }),
  endpoints: (builder) => ({

    getHotels: builder.query({
      query: () => "hotels", 
    }),
    getHotelsForSearchQuery: builder.query({
      query: ({query}) => `hotels/search/retrieve?query=${query}`,
    }),

    getHotelById: builder.query({
      query: (id) => `hotels/${id}`,
    }),
    createHotel: builder.mutation({
      query: (hotel) => ({
        url: "hotels",
        method: "POST",
        body: hotel,
      }),
    }),
    deleteHotel: builder.mutation({
      query: (id) => ({
        url:`hotels/${id}`,
        method: "DELETE",
      }),
    }),
    updateHotel: builder.mutation({
      query: ({id,...body}) => ({
        url:`hotels/${id}`,
        method: "PUT",
        body,
      }),
    }),
   createBooking: builder.mutation({
      query: (booking) => ({
        url: "bookings",
        method: "POST",
        body: booking,//bpdy eka danne form wage body ekak thiyenawanm vithary
      }),
    }),getBookings: builder.query({
      query: () => "bookings", 
    }),

    deleteBooking: builder.mutation({
      query: (id) => ({
        url: `bookings/${id}`,
        method: "DELETE",
      }),
    }),
      }),
      
    })
  

export const {
   useGetHotelsQuery,
   useGetHotelByIdQuery,
   useDeleteHotelMutation,
    useCreateHotelMutation,
     useCreateBookingMutation,
    useUpdateHotelMutation,
    useGetBookingsQuery,
     useGetHotelsForSearchQueryQuery,
     useDeleteBookingMutation
     } =api;