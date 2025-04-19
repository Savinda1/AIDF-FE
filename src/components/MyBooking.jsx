import React from "react";
import { Calendar, MapPin, Clock, User } from "lucide-react";
import { format } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useDeleteBookingMutation } from "@/lib/api/api";
import { toast } from "sonner";

export default function MyBooking({ booking}) {
  if (!booking) return null;
  const [cancelBooking, { isLoading, isError, error }] = useDeleteBookingMutation();

  const handleCancel = async (bookingId) => {
    try {
      await cancelBooking(bookingId).unwrap();
      toast.success("Booking cancelled successfully!");
    } catch (error) {
      console.error("Failed to cancel booking:", error);
      toast.error("Error cancelling booking");
    }
  };
  
return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Booking Details</span>
          <Badge variant={booking.status === "confirmed" ? "success" : "secondary"}>
            {booking.status}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-2">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <div>
            <p className="text-sm font-medium">Check-in</p>
            <p className="text-sm text-muted-foreground">
              {format(new Date(booking.checkIn), "PPP")}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <div>
            <p className="text-sm font-medium">Check-out</p>
            <p className="text-sm text-muted-foreground">
              {format(new Date(booking.checkOut), "PPP")}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <MapPin className="h-4 w-4 text-muted-foreground" />
          <div>
            <p className="text-sm font-medium">Hotel</p>
            <p className="text-sm text-muted-foreground">
              {booking.hotel?.address || "Hotel Address"}
            </p>
          </div>
        </div>

       

        <div className="pt-4 border-t">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Total Amount</span>
            <span className="text-lg font-bold">
              ${booking.totalAmount?.toFixed(2) || "0.00"}
             
              </span>
            
          </div>
          <Button
            onClick={() =>{ // console.log("Hotel ID:", props.hotel._id);
                handleCancel(booking._id)}}
            variant="destructive"
            disabled={isLoading}
          >

            {isLoading ? "Cancelling..." : "Cancel Booking"}
          </Button>
       </div>
        
       
      </CardContent>
    </Card>
   
   
  );
}