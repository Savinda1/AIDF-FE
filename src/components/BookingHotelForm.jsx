import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { addDays } from "date-fns";
import { Input } from "@/components/ui/input";

import { toast } from "sonner";
//import {  useCreateBookingMutation } from "@/lib/api/api";

const formSchema = z.object({
  checkIn: z.date({
    required_error: "Check-in date is required",
  }),
  checkOut: z.date({
    required_error: "Check-out date is required",
  }),
}).refine(data => data.checkOut > data.checkIn, {
  message: "Check-out date must be after check-in date",
  path: ["checkOut"],
});

export default function BookingForm ({ onSubmit, isLoading, hotelId }) {
   // const [onSubmit, { isLoading }] =  useCreateBookingMutation();
 const tomorrow = addDays(new Date(), 1);
 
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      checkIn: new Date(),
      checkOut: tomorrow,
    },
  });
  //data yawanawa
const handleSubmit = async(values) => {
  onSubmit({
    ...values,
    hotelId,
  });
  };


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="checkIn"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Check-in Date</FormLabel>
              <Input
  type="date"
  placeholder="Check-in Date"
  value={field.value?.toISOString().split("T")[0] || ""}
  onChange={(e) => field.onChange(new Date(e.target.value))}
/>

<FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="checkOut"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Check-out Date</FormLabel>
              <Input
  type="date"
  placeholder="Check-out Date"
  value={field.value?.toISOString().split("T")[0] || ""}
  onChange={(e) => field.onChange(new Date(e.target.value))}
/>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Booking..." : "Book Now"}
        </Button>
      </form>
    </Form>
  );
} 