import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useUpdateHotelMutation, useGetHotelsQuery } from "@/lib/api/api";

const formSchema = z.object({
  name: z.string().min(1).optional(),
  location: z.string().min(1).optional(),
  image: z.string().min(1).optional(),
  price: z.union([z.string(), z.number()]).transform((value) => value.toString()).optional(),
  description: z.string().min(1).optional(),
});

const UpdateHotelForm = (props) => {
  const [updateHotel, { isLoading }] = useUpdateHotelMutation();
  
 const { refetch } = useGetHotelsQuery();
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const handleSubmit = async (values) => {
    const { name, location, image, price, description } = values;
    try {
      await updateHotel({
        id: props.hotel._id,
        name,
        location,
        image,
        price,
        description,
      }).unwrap();
      await refetch(); // Refetch the hotels data after successful update
      toast.success("Hotel updated successfully");
    } catch (error) {
      toast.error("Hotel update failed");
    }
  };

  return (
    <Form {...form}>
      <form className="w-1/2" onSubmit={form.handleSubmit(handleSubmit)}>
        <div className="grid gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Hotel Name</FormLabel>
                <FormControl>
                  <Input placeholder="Hotel Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input placeholder="Location" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image</FormLabel>
                <FormControl>
                  <Input placeholder="Image" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Price"
                    onChange={(e) => {
                      field.onChange(parseFloat(e.target.value));
                    }}
                    value={field.value}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="Description" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="mt-4">
          <Button
            type="submit"
            variant="destructive"
            disabled={isLoading}
          >
            {isLoading ? "Updating..." : "Update Hotel"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default UpdateHotelForm;


