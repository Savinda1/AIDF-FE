import React from "react";
import { MapPin, Star } from "lucide-react";
import { useDeleteHotelMutation } from "@/lib/api/api";
//import{useUpdateHotelMutation} from"@/lib/api/api";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Link } from "react-router";
function DeleteHotelCard(props) {
    //console.log("props.hotel:", props.hotel._id);
  const [deleteHotel, { isLoading, isError, error }] = useDeleteHotelMutation();
    //const [updateHotel, { isLoading: isUpdating }] = useUpdateHotelMutation();

  const handleDelete = async () => {
    try {
      await deleteHotel(props.hotel._id).unwrap();
      toast.success("Hotel deleted successfully!");
    } catch (error) {
      console.error("Failed to delete hotel:", error);
      toast.error("Error deleting hotel");
    }
  };
 // const [updateeHotel, { isLoading, isError, error }] = useUpdateHotelMutation();



  return (
    <main>
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
        <img
          src={props.hotel.image}
          alt={props.hotel.name}
          className="object-cover w-full h-full absolute transition-transform group-hover:scale-105"
        />
      </div>

      <div className="mt-3 space-y-2">
        <h3 className="font-semibold text-lg">{props.hotel.name}</h3>
        <div className="flex items-center text-muted-foreground">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{props.hotel.location}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Star className="h-4 w-4 fill-primary text-primary" />
          <span className="font-medium">
            {props.hotel?.rating ?? "No rating"}
          </span>
          <span className="text-muted-foreground">
            ({props.hotel.reviews?.toLocaleString() ?? "NO"} Reviews)
          </span>
        </div>
        <div className="flex items-baseline space-x-2">
          <span className="text-xl font-bold">${props.hotel.price}</span>
          <Button
            onClick={() =>{ // console.log("Hotel ID:", props.hotel._id);
                handleDelete(props.hotel._id)}}
            variant="destructive"
            disabled={isLoading}
          >

            {isLoading ? "Deleting..." : "Delete Hotel"}
          </Button>
          </div>
      </div>
       </main>
   

  );
}

export default DeleteHotelCard;
