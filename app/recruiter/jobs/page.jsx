import { EditDeleteJob } from "@/components/job-management/edit-delete-job";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { DollarSign, Locate, UsersRound } from "lucide-react";
import Link from "next/link";

const data = [
  {
    title: "Active Job Postings",
    value: 12,
    bg: "bg-[#dcfce7]",
    color: "text-[#39cc6f]",
  },
  {
    title: "Total Applications",
    value: 248,
    bg: "bg-[#dbeafe]",
    color: "text-[#2563eb]",
  },
  {
    title: "Shortlisted Candidates",
    value: 45,
    bg: "bg-[#f3e8ff]",
    color: "text-[#7c3aed]",
  },
];

const jobs = [
  {
    title: "Senior Frontend Developer",
    status: "active",
    location: "New York, USA",
    salaire: "$120,000 - $150,000",
    applied: 45,
  },
];

export default function Page() {
  return (
    <div className="">
      <div className=" mx-auto max-w-[1200px] space-y-8">
        <div className=" bg-white p-8 rounded-md flex justify-between ">
          <h1 className=" font-bold text-4xl">Job Management</h1>
          <Button
            asChild
            className=" bg-green-800 !text-2xl h-full hover:bg-green-800/80 font-semibold "
          >
            <Link href={"/recruter/add-job"}>+ Post New Job</Link>
          </Button>
        </div>
        <div className=" bg-white  p-8 rounded-md flex flex-col gap-8 justify-between ">
          <h2 className=" font-bold text-4xl">Recruitment Overview</h2>
          <div className=" flex justify-between">
            {data.map((element) => (
              <div
                key={element.title}
                className={`${element.bg} basis-[32%] flex flex-col gap-14 p-4 rounded-lg`}
              >
                <p className=" text-gray-500">{element.title}</p>
                <div className=" flex justify-end">
                  <p className={`${element.color}`}>{element.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" bg-white  p-8 rounded-xl flex flex-col gap-8 justify-between ">
          <h2 className=" font-bold text-4xl">Job Listings</h2>
          <div className=" flex justify-between">
            {jobs.map((element) => (
              <div
                key={element.title}
                className={`basis-full flex justify-between  p-4 rounded-lg border `}
              >
                <div className=" space-y-4">
                  <div className=" space-x-4">
                    <span className=" !text-3xl text-green-800 ">
                      {element.title}
                    </span>
                    <span
                      className={clsx(" p-2 px-4  capitalize rounded-3xl", {
                        "bg-[#dcfce7] text-[#417c62]":
                          element.status === "active",
                        "bg-[#e9ecef] text-[#7c848b]":
                          element.status === "closed",
                      })}
                    >
                      {element.status}
                    </span>
                  </div>
                  <div>
                    <p className=" flex items-center gap-2">
                      <Locate />
                      <span className=" text-gray-600">{element.location}</span>
                    </p>
                    <p className=" flex items-center gap-2">
                      <DollarSign />
                      <span className=" text-gray-600">{element.salaire}</span>
                    </p>
                    <p className=" flex items-center gap-2">
                      <UsersRound />
                      <span className=" text-gray-600">
                        {element.applied} applications
                      </span>
                    </p>
                  </div>
                </div>
                <EditDeleteJob data={element} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
