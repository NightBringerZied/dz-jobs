import React, { useState } from 'react';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DeleteEducationAction } from '@/app/action/EditAction';
import { DeleteCertificationAction } from '@/app/action/EditAction';
const Certification = (props) => {
  const [open, setOpen] = useState(false);

  const handleDelete = async () => {
    const responese = await DeleteCertificationAction(props.data.certification_name);
    console.log(responese);
    setOpen(false);
    window.location.reload();
  };

  return (
    <div className="w-[40%] bg-white shadow-2xl rounded-xl flex flex-col justify-normal items-start gap-10 p-8">
      <div className="w-full flex justify-center items-center">
        <img src="/cert.png" alt="logo" className="w-[80px] h-[80px] object-cover" />
      </div>
      <div className="flex flex-col w-full justify-center items-start gap-4">
        <h1 className="text-3xl font-bold">{props.data.certification_name}</h1>
        
        <h2 className="text-black text-xl font-light">
          {props.data.issue_date} - {props.data.expiration_date}
        </h2>
        <h1 className="text-xl font-light">{props.data.issued_by}</h1>
      </div>
      <div className="w-full flex flex-row justify-center items-center">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="w-[80%] px-8 py-1 rounded-lg text-lg bg-red-600 text-white">
              Delete
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Confirm Deletion</DialogTitle>
              <DialogDescription>
                Are you sure you want to delete this certification? This action cannot be undone.
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
  );
};

export default Certification;
