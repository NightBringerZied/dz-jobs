"use client";
import React, { useState } from 'react';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DeleteExperienceAction } from '@/app/action/EditAction';

const ExperienceItem = (props) => {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  const handleDelete = async  () => {
    const response = await DeleteExperienceAction(props.experience_id);
    console.log(response);
    setOpen(false);
    window.location.reload();
  };

  return (
    <div className="w-full flex flex-col justify-normal items-start gap-6 border-b border-[#888888] py-4">
      <div className="flex flex-row gap-4 justify-start items-center">
        <img src="/degre.png" alt="insta" />
        <p className="text-2xl font-light">{props.job_title}</p>
      </div>
      <div className="flex flex-row gap-4 justify-start text-xl items-center text-[#888888]">
        <p>
          {props.company} <span className="text-5xl">.</span>
        </p>
        <p>
          {props.start_date} - {props.end_date} <span className="text-5xl">.</span>{' '}
        </p>
      </div>
      {show && (
        <p className="text-xl text-[#888888]">{props.description}</p>
      )}
      <div className="flex flex-row items-center w-full justify-between">
        <button
          className="text-[#888888] text-xl underline"
          onClick={() => setShow(!show)}
        >
          {show ? 'Show Less' : 'Show More'}
        </button>
        <div className="flex gap-4">
          {/* Delete Button with Dialog */}
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button variant="destructive" className="px-8 py-2 bg-red-600 rounded-2xl text-xl">
                Delete
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Confirm Deletion</DialogTitle>
                <DialogDescription>
                  Are you sure you want to delete this experience? This action
                  cannot be undone.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button variant="destructive" onClick={handleDelete}>
                  Yes, Delete
                </Button>
                <Button variant="secondary" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
