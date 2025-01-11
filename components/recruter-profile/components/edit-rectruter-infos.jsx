"use client";
import {
  Dialog,
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

export function EditRectruterInfos({ data }) {
  const [open, setOpen] = useState(false);

  const form = useForm({
    defaultValues: {
      company_contact: data?.company_contact,
      company_description: data?.company_description,
      company_location: data?.company_location,
      company_name: data?.company_name,
      company_website: data?.company_website,
      social_links: data?.social_links,
    },
  });
  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setOpen(false);
    toast.success("profile edited");
    console.log(values);
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className=" hover:bg-green-500/40 bg-green-500 text-3xl font-semibold h-full">
          Edit Profile
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className=" text-3xl  text-center">
            Edit profile
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className=" flex justify-between">
              <FormField
                control={form.control}
                name="company_contact"
                render={({ field }) => (
                  <FormItem className="basis-[48%]">
                    <FormLabel>company contact</FormLabel>
                    <FormControl>
                      <Input placeholder="company contact" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="company_description"
                render={({ field }) => (
                  <FormItem className="basis-[48%]">
                    <FormLabel>company description</FormLabel>
                    <FormControl>
                      <Input placeholder="company description" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className=" flex justify-between">
              <FormField
                control={form.control}
                name="company_location"
                render={({ field }) => (
                  <FormItem className="basis-[48%]">
                    <FormLabel>company location</FormLabel>
                    <FormControl>
                      <Input placeholder="company location" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="company_description"
                render={({ field }) => (
                  <FormItem className="basis-[48%]">
                    <FormLabel>company name</FormLabel>
                    <FormControl>
                      <Input placeholder="company name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className=" flex justify-between">
              <FormField
                control={form.control}
                name="company_website"
                render={({ field }) => (
                  <FormItem className="basis-[48%]">
                    <FormLabel>company website</FormLabel>
                    <FormControl>
                      <Input placeholder="company website" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="social_links"
                render={({ field }) => (
                  <FormItem className="basis-[48%]">
                    <FormLabel>social links</FormLabel>
                    <FormControl>
                      <Input placeholder="social_links" {...field} />
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
      </DialogContent>
    </Dialog>
  );
}
