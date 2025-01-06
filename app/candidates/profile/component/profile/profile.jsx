"use client";

import React, { useState } from "react";
import { FaFileDownload } from "react-icons/fa";
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
import { EditBioAction, EditPictureAction } from "@/app/action/EditAction";

const Profile = (props) => {
  const [name, setName] = useState(props.personal.name);
  const [bio, setBio] = useState(props.personal.bio);
  const [profilePicture, setProfilePicture] = useState(props.candidate.profile_picture);
  const [resume, setResume] = useState(props.candidate.resume);
  const [isSaving, setIsSaving] = useState(false);

  const handleSaveInfo = async () => {
    const data = {
      ...props.personal,
      name,
      bio,
    };
    try {
      setIsSaving(true);
      const res = await EditBioAction(data);
      console.log(res);
      window.location.reload();
    } finally {
      setIsSaving(false);
    }
  };

  const handleSavePictureAndResume = async () => {
    try {
      setIsSaving(true);
      const formData = new FormData();
      formData.append("profile_picture", profilePicture);
      formData.append("resume", resume);
      const res = await EditPictureAction(formData);
      console.log(res);
      window.location.reload();
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="w-full max-md:flex-col flex flex-row min-h-[250px] bg-white rounded-lg justify-between items-center shadow-2xl">
      <div className="flex max-sm:flex-col flex-row h-full min-h-[180px] items-center justify-center max-md:w-[90%] w-[90%] gap-10">
        <div className="flex w-[50%] justify-center py-4 items-center flex-col">
          <img
            src={props.candidate.profile_picture}
            alt="Profile"
            className="object-cover w-[80%] max-w-[200px] max-h-[150px] h-[80%] max-sm:w-full max-sm:h-[60%]  rounded-2xl"
          />
          <div className="my-4  flex flex-row gap-10 justify-center items-center text-xl text-gray-500">
            {resume ? (
              <>
                Resume:{" "}
                <a
                  href={props.candidate.resume} // Assuming `resume.url` contains the URL of the resume
                  download={"resume"}
                  target="blank" // Optional: set a default download name
                  className="text-black flex flex-row gap-5 cursor-pointer underline hover:text-[#4CAF4F] "
                >
                  <FaFileDownload />
                  { "Download"}
                </a>
              </>
            ): (
              "No resume uploaded"
            )}
          </div>
          <div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="profile">Edit Picture and Resume</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit Profile Picture and Resume</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col gap-4">
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                  e.target.files[0] && setProfilePicture(e.target.files[0])
                  }
                />
                <Input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) =>
                    e.target.files[0] && setResume(e.target.files[0])
                  }
                />
              </div>
              <DialogFooter>
                <Button
                  onClick={handleSavePictureAndResume}
                  disabled={isSaving}
                >
                  {isSaving ? "Saving..." : "Save"}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        </div>
        <div className="flex flex-col max-md:w-[90%] w-[70%] h-full justify-center items-start gap-5">
          <h1 className="text-5xl max-md:text-2xl font-light">{props.personal.name}</h1>
          <div className="flex flex-col w-full justify-evenly gap-6 pl-2">
            <h2 className="text-3xl max-md:text-2xl font-light">Biography</h2>
            <p className="text-lg max-md:text-sm text-[#6b6a6a]">{props.personal.bio}</p>
            <div className="w-full flex justify-end items-end">
              <div className="w-[30%] flex  justify-end items-end">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="profile">Edit Info</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Edit Personal Information</DialogTitle>
                    </DialogHeader>
                    <Input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Name"
                    />
                    <Textarea
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      placeholder="Biography"
                    />
                    <DialogFooter>
                      <Button onClick={handleSaveInfo} disabled={isSaving}>
                        {isSaving ? "Saving..." : "Save"}
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
