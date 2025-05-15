import React from "react";
import HotelCard from "./HotelCard";
import DeleteHotelCard from "./DeleteHotelCard";
import LocationTab from "./LocationTab";
import { useState, useEffect } from "react";
import { useGetHotelsQuery } from "@/lib/api/api";
//import  {getHotels}  from '@/lib/api/hotels';
//import { useSelector,useDispatch } from "react-redux";
import { useGetHotelsForSearchQueryQuery } from "@/lib/api/api";

import { useSelector } from "react-redux";

export default  function HotelListings() {

  const searchValue = useSelector((state) => state.search.value);

  const { data,isLoading, isError, error } = useGetHotelsForSearchQueryQuery({
    query: searchValue,
  });

  const hotels =data? data.map((hotel) =>hotel.hotel) :[];

const locations = ["ALL", "France", "Italy", "Australia", "Japan"]

  const [selectedLocation, setSelectedLocation] = useState("ALL");

  const handleSelectedLocation = (locations) => {
    setSelectedLocation(locations);
  }
 
  
const filteredHotels = 
  selectedLocation === "ALL" 
  ? hotels
   : hotels.filter((hotel) => {
    return hotel.location
    .toLowerCase()
    .includes(selectedLocation.toLowerCase());
  });

   return (
    <section className="px-8 py-8 lg:py-25">

      <div className="mb-5">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
           Top trending hotels worldwide
        </h2>

       
        <p className="text-lg text-muted-foreground">
          Discover the most trending hotels worldwide for an unforgettable
          experience.
        </p>
      </div>

      <div className="flex items-center gap-x-4">
        {
          locations.map((location,i) => {
            return (<LocationTab 
              key={i}
              selectedLocation={selectedLocation} 
              name={location}
               onClick={handleSelectedLocation} />)
          })
        }
      </div>

{isLoading ? (<div>Loding....</div>)
:(<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-2">

        {filteredHotels .filter((hotel) => hotel && hotel._id)
        .map((hotel,confidence) =>{
            return (<HotelCard key={hotel._id} hotel={hotel}  confidence={confidence}/>
             
            )
          })}
      </div>  )}

     

    </section>
  );
}
