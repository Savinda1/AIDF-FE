import React from "react";
import { useGetHotelsQuery } from "@/lib/api/api";
import DeletHotelCard from '@/components/DeleteHotelCard';
import { Skeleton } from "@/components/ui/skeleton";
import UpdateHotelForm from '@/components/UpdateHotelForm';

export default function AllHotels() {
  const { data: hotels, isLoading, isError, error } = useGetHotelsQuery();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-2">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="space-y-2">
            <Skeleton className="h-[200px] w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center py-8">
        <p className="text-red-500">Error loading hotels: {error?.message}</p>
      </div>
    );
  }

  return (
    <section className="px-8 py-8 lg:py-25">
      <div className="mb-5">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 mt-20">
          All Available Hotels
        </h2>
        <p className="text-lg text-muted-foreground">
          Browse through our complete collection of hotels.
        </p>
      </div>

     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-2">
        {hotels?.map((hotel) => (
          <DeletHotelCard key={hotel._id} hotel={hotel} />
        ))}
      </div>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-2">
      {hotels?.map((hotel) => (
  < UpdateHotelForm key={hotel._id} hotel={hotel} />
))}
 </div>
    </section>
  );
}

