import React from 'react'
import { Input } from "@/components/ui/input";
import { Button } from '@/components/ui/button';
import { Sparkles } from "lucide-react";
import { useDispatch} from "react-redux";
import { submit } from "@/lib/features/searchSlice";

function Hero() {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    const searchQuery = e.target.search.value;//in put box eken dea ekagannawa methanata
    console.log(searchQuery);

      dispatch(submit(searchQuery));//submit button eka yanawa slice ekata
  };
return (
    <div className=''>
        {/* Hero Content  */}
      <div className='z-10 relative flex flex-col items-center text-white justify-center px-8 pt-32 pb-32'>
<h1 className="text-4xl md:text-6xl font-bold mb-8 text-center text-white">
    Find your Best Staycatio
    </h1>
    <p className="text-xl mb-12 text-center max-w-2xl  text-white"> Describe your dream destination and experience, and we'll find the
    perfect place for you.
    </p>

{/* Search form*/}
<form
onSubmit={handleSearch}
className='w-full max-w-3xl bg-black/10 flex  space-x-2'>

<Input
type="text"
name="search"
placeholder='Describe your destination, experience, or hotel...'
className= 'flex-grow bg-transparent lg:text-lg  text-white placeholder:text-white/55 border-none outline-none focus:border-none focus:outline-none focus-visible:ring-0'/>

<Button type="submit"
className='rounded-full w-48 flex items-center gap-x-2 lg:h-12'
>
<Sparkles
style={{ width: "20px", height: "20px" }}
className=" mr-2 animate-pulse text-sky-400"
   />

<span className='lg:text-lg'>AI Search</span>

</Button>
</form>
      </div>
    </div>
  )
}

export default Hero;



