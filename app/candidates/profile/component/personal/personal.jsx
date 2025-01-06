"use client";
import React, { useState } from "react";
import { FaFileDownload } from "react-icons/fa";
import { EditPersonalAction } from "@/app/action/EditAction";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Personal = (props) => {
  const [name, setName] = useState(props.personal.name);
  const [dateOfBirth, setDateOfBirth] = useState(props.personal.date_of_birth);
  const [gender, setGender] = useState(props.personal.gender);
  const [email, setEmail] = useState(props.personal.email);
  const [phone, setPhone] = useState(props.personal.phone);
  const [address, setAddress] = useState(props.personal.address);
  const [isSaving, setIsSaving] = useState(false);

  const handleSaveInfo = async () => {
    const data = {
      name,
      date_of_birth: dateOfBirth,
      gender,
      email,
      phone,
      address,
      bio: props.personal.bio,
    };
    try {
      setIsSaving(true);
      const res = await EditPersonalAction(data); // Replace with your actual save function
      console.log(res);
      window.location.reload();
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="w-full flex flex-col justify-normal items-start gap-10 px-10 py-6 bg-white rounded-2xl">
      <h1 className="text-3xl font-light">Personal Information</h1>
      <div className="flex flex-row w-full justify-around items-start gap-10 text-lg">
        <div className="flex flex-col w-[40%] max-md:w-full justify-center items-center gap-10">
          <div className="flex flex-row justify-between py-2 items-center w-full border-b border-dashed border-[#E6E6E6]">
            <h1 className="text-xl font-light">Full Name:</h1>
            <p className="text-xl text-[#888888]">{name}</p>
          </div>
          <div className="flex flex-row justify-between py-2 items-center w-full border-b border-dashed border-[#E6E6E6]">
            <h1 className="text-xl font-light">Date of Birth:</h1>
            <p className="text-xl text-[#888888]">{dateOfBirth}</p>
          </div>
          <div className="flex flex-row justify-between py-2 items-center w-full border-b border-dashed border-[#E6E6E6]">
            <h1 className="text-xl font-light">Gender:</h1>
            <p className="text-xl text-[#888888]">{gender}</p>
          </div>
        </div>
        <div className="flex flex-col w-[40%] max-md:w-full justify-center items-center gap-10">
          <div className="flex flex-row justify-between py-2 items-center w-full border-b border-dashed border-[#E6E6E6]">
            <h1 className="text-xl font-light">Email:</h1>
            <p className="text-xl text-[#888888]">{email}</p>
          </div>
          <div className="flex flex-row justify-between py-2 items-center w-full border-b border-dashed border-[#E6E6E6]">
            <h1 className="text-xl font-light">Phone:</h1>
            <p className="text-xl text-[#888888]">{phone}</p>
          </div>
          <div className="flex flex-row justify-between py-2 items-center w-full border-b border-dashed border-[#E6E6E6]">
            <h1 className="text-xl font-light">Address:</h1>
            <p className="text-xl text-[#888888]">{address}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full justify-between items-center text-lg">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="profile">Edit Info</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Personal Information</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col gap-4">
              <div>
                <label htmlFor="name" className="block text-lg font-medium">Full Name</label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                />
              </div>
              <div>
                <label htmlFor="dateOfBirth" className="block text-lg font-medium">Date of Birth</label>
                <Input
                  id="dateOfBirth"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  placeholder="Date of Birth"
                />
              </div>
              <div>
                <label htmlFor="gender" className="block text-lg font-medium">Gender</label>
                <Input
                  id="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  placeholder="Gender"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium">Email</label>
                <Input
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-lg font-medium">Phone</label>
                <Input
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone"
                />
              </div>
              <div>
                <label htmlFor="address" className="block text-lg font-medium">Address</label>
                <Input
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Address"
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleSaveInfo} disabled={isSaving}>
                {isSaving ? "Saving..." : "Save"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Personal;
