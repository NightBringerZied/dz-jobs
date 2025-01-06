"use client"
import React, { useState } from 'react';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // Assuming shadcn/ui has an Input component
import { NewExperienceAction } from '@/app/action/EditAction';
import ExperienceItem from './ExperienceItem';
const Experience = (props) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    job_title: '',
    company: '',
    start_date: '',
    end_date: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddExperience = async () => {
    const data = {
      job_title: formData.job_title,
      company: formData.company,
      start_date: formData.start_date,
      end_date: formData.end_date,
      description: formData.description,
    };
    const response = await NewExperienceAction(data);
    console.log(response);
    setOpen(false);
    window.location.reload();
  };

  return (
    <div className="w-full flex flex-col justify-normal items-start gap-10 px-10 py-6 bg-white rounded-2xl">
      <h1 className="text-4xl font-light">Work Experience</h1>
      {props.experience.total > 0 &&
        props.experience.experiences.map((item, index) => (
          <ExperienceItem
            key={index}
            experience_id={item.experience_id}
            job_title={item.job_title}
            company={item.company}
            description={item.description}
            end_date={item.end_date}
            start_date={item.start_date}
          />
        ))}
      <div className="w-full flex items-center ">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="bg-[#4CAF50] w-full  text-white p-4 rounded-xl font-light">
              <p className="text-lg">Add new experience</p>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Experience</DialogTitle>
              <DialogDescription>
                Fill out the form below to add a new work experience.
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-4 py-4">
              <Input
                type="text"
                name="job_title"
                placeholder="Job Title"
                value={formData.job_title}
                onChange={handleInputChange}
              />
              <Input
                type="text"
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleInputChange}
              />
              <Input
                type="date"
                name="start_date"
                placeholder="Start Date"
                value={formData.start_date}
                onChange={handleInputChange}
              />
              <Input
                type="date"
                name="end_date"
                placeholder="End Date"
                value={formData.end_date}
                onChange={handleInputChange}
              />
              <Input
                type="text"
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleInputChange}
              />
            </div>
            <DialogFooter>
              <Button variant="primary" onClick={handleAddExperience}>
                Add Experience
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

export default Experience;
