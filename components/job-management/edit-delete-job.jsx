"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "sonner";
import { Delete, Pencil } from "lucide-react";

export function EditDeleteJob({ data }) {
  const [open, setOpen] = useState(false);
  const [model, setModel] = useState(-1);

  const form = useForm({
    defaultValues: {
      title: data?.title,
      salaire: data?.salaire,
      location: data?.location,
      status: data?.status,
    },
  });
  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setOpen(false);
    toast.success("Job edited");
    console.log(values);
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div className=" space-x-2">
        <DialogTrigger onClick={() => setModel(1)} asChild>
          <Button className=" hover:bg-green-500/40  bg-green-500 text-3xl font-semibold h-fit">
            <Pencil />
          </Button>
        </DialogTrigger>
        <DialogTrigger asChild onClick={() => setModel(2)}>
          <Button className=" hover:bg-red-500/40 bg-red-500 text-3xl font-semibold h-fit">
            <Delete />
          </Button>
        </DialogTrigger>
      </div>

      <DialogContent className="sm:max-w-[425px]">
        {model === 1 && (
          <>
            <DialogHeader>
              <DialogTitle className=" text-3xl  text-center">
                Edit Job
              </DialogTitle>
            </DialogHeader>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <div className=" flex justify-between">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem className="basis-[48%]">
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                          <Input placeholder="job Title" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="salaire"
                    render={({ field }) => (
                      <FormItem className="basis-[48%]">
                        <FormLabel>Salaire</FormLabel>
                        <FormControl>
                          <Input placeholder="salaire" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className=" flex justify-between">
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem className="basis-[48%]">
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
                    name="status"
                    render={({ field }) => (
                      <FormItem className="basis-[48%]">
                        <FormLabel>Status</FormLabel>
                        <FormControl>
                          <Input placeholder="status" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button
                  className="  hover:bg-green-500/40 bg-green-500 text-xl font-semibold h-fit"
                  type="submit"
                >
                  Save changes
                </Button>
              </form>
            </Form>
          </>
        )}
        {model == 2 && (
          <>
            <DialogHeader>
              <DialogTitle className=" text-3xl  text-center">
                Delete Job
              </DialogTitle>
              <DialogDescription className=" text-center !text-xl">
                Are sure you want to delete this job ?
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button
                className="  hover:bg-red-500/40 bg-red-500 text-xl font-semibold h-fit"
                onClick={() => {
                  toast.success("job deleted");
                  setOpen(false);
                }}
              >
                Delete
              </Button>
              <DialogClose>Cancel</DialogClose>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
