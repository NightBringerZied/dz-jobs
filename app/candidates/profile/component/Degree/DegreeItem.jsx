"use client"
import React from 'react'
import { useState } from 'react'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DeleteEducationAction } from '@/app/action/EditAction';
const DegreeItem = (props) => {
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState(false);  
    const handleDelete = async() => {
        const education_id = props.education_id;
        console.log(education_id);
        const responese = await DeleteEducationAction(education_id);
        window.location.reload();
        console.log(responese);
        setOpen(false);
    };
    
  return (
    <div className='w-full  flex flex-col justify-normal items-start gap-6 border-b border-[#888888] py-4'>
        <div className='flex flex-row gap-4 justify-start items-center'>
            <img src='/degre.png' alt='insta'/>
            <p className='text-2xl font-light'>{props.degree}</p>
        </div>
        <div className='flex flex-row gap-4 justify-start text-xl items-center text-[#888888]'>
                <p >{props.institution} <span className='text-5xl'>.</span></p>
                <p>Gpa 3.8/4.0 <span className='text-5xl'>.</span></p>
                <p>Saudi Arabia <span className='text-5xl'>.</span></p>
                <p>{props.start_date} - {props.end_date} <span className='text-5xl'>.</span> </p>
        </div>
       {show &&( 
                <p className='text-xl text-[#888888]'>
                    {props.description}
                </p> 
                )
        }
        <div className='flex flex-row items-center w-full justify-between '>
            <button className='text-[#888888] text-xl underline' onClick={()=>setShow(!show)}>
                    {show ? "Show Less" : "Show More"}
            </button>
            <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="bg-red-600 text-white px-8 py-2 text-xl rounded-xl">
            Delete
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this item? This action cannot be undone.
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
  )
}

export default DegreeItem