import CreateHotelForm from "@/components/CreateHotelForm";

export default function CreateHotelPage() {
  return (
    <main className="container mx-auto px-4 py-8 min-h-screen">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Create a Hotel</h2>
      <CreateHotelForm />
    </main>
  );
}






































/*import {React,useState} from 'react';
import { Button } from '@/components/ui/button';
//import { useCreateHotelMutation } from "../lib/api/api";
//import { toast } from "sonner";
import { Input } from "@/components/ui/input";

function createHotel() {
 // const [createHotel, { isLoading }] = useCreateHotelMutation();

  const [name, setName] = useState('');

const[errors,seterror]=useState({name:"",});

  const handleSubmit = async (e) => {
try {
  e.preventDefault();

if(name.length==0) {
  seterror({name:"Name is required"});
  return;
}

  console.log(name);*/
  
  /*
      toast.loading("Creating hotel...");
      await createHotel({
        name: "Opulent River Face Hotel",
        location: "Kotte, Sri Lanka",
        reviews: 100,
        rating: 4,
        image:
          "https://cf.bstatic.com/xdata/images/hotel/max1280x900/308797093.jpg?k=3a35a30f15d40ced28afacf4b6ae81ea597a43c90c274194a08738f6e760b596&o=&hp=1",
        price: 100,
        description:
          "The Opulent River Face Hotel is a luxurious hotel located in the heart of Colombo, Sri Lanka. It offers a range of amenities including a swimming pool, a gym, and a spa.",
      }).unwrap();
      toast.success("Hotel created successfully!");
  } catch (errors) {
     // toast.error("An error occurred while creating the hotel.");
    } 
  };
  return (
  <main>
<h1 className="font-bold">Create Hotel page</h1>
<form onSubmit={handleSubmit}>
  <Input
  type="text"
    id="name"
    value={name}
    onChange={(e) =>{setName(e.target.value);

if(e.target.value.length>0){
  seterror({name:""});

}
    }}
    
    />
   
<p>{errors.name}</p>

<div className="mt-4">
        <Button type="submit">Create Hotel</Button>
      </div>
      </form>
    </main>
  )
}

export default createHotel;*/
