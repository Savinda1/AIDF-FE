import React from "react";
import HotelCard from "./HotelCard";
//import DeleteHotelCard from "./DeleteHotelCard";
import LocationTab from "./LocationTab";
import { useState, useEffect } from "react";
//import { useGetHotelsQuery } from "@/lib/api/api";
//import  {getHotels}  from '@/lib/api/hotels';
//import { useSelector,useDispatch } from "react-redux";
import { useGetHotelsForSearchQueryQuery } from "@/lib/api/api";
import { Input } from "@/components/ui/input";
import { Button } from '@/components/ui/button';
import { Sparkles } from "lucide-react";
import { useDispatch} from "react-redux";
import { submit } from "@/lib/features/searchSlice";

import { useSelector } from "react-redux";

export default  function HotelListings() {

const dispatch = useDispatch();

  const searchValue = useSelector((state) => state.search.value);

  const { data,isLoading, isError, error } = useGetHotelsForSearchQueryQuery({
    query: searchValue,
  });
console.log("Hotels",searchValue);

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


  const handleSearch = (e) => {
    e.preventDefault();
    const searchQuery = e.target.search.value;//in put box eken dea ekagannawa methanata
    console.log(searchQuery);

      dispatch(submit(searchQuery));//submit button eka yanawa slice ekata
  };
   return (
    <section className="px-8 py-8 lg:py-25">







      <div className="mb-5">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
           Top trending hotels worldwide
        </h2>
<form
onSubmit={handleSearch}
className='w-full flex  space-x-2 '>

<Input
type="text"
name="search"
placeholder='Describe your destination, experience, or hotel...'
className= 'flex-grow bg-transparent bg-green-100 lg:text-lg  text-orange-300 placeholder:text-zinc-900 border-none outline-none focus:border-none focus:outline-none focus-visible:ring-0'/>

<Button type="submit"
className='rounded-full w-48 flex items-center gap-x-2 lg:h-10'
>
<Sparkles
style={{ width: "20px", height: "20px" }}
className=" mr-2 animate-pulse text-sky-400"
   />

<span className='lg:text-lg'>AI Search</span>

</Button>
</form>
       
        <p className="text-lg text-muted-foreground mb-2">
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
