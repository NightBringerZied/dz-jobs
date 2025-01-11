"use client";
import { UserRound, Pencil, BriefcaseBusiness, UsersRound } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

const content = [
  {
    title: "Profile",
    url: "/recruiter/profile",
    icon: UserRound,
  },
  {
    title: "Job Management",
    url: "/recruiter/jobs",
    icon: BriefcaseBusiness,
  },
  {
    title: "Post New Job",
    url: "/recruiter/add-job",
    icon: Pencil,
  },
  {
    title: "Condidate Mangement",
    url: "/recruiter/condidate-management",
    icon: UsersRound,
  },
];
export default function RecruterSideBar() {
  return (
    <Sidebar>
      <SidebarContent className=" bg-white     text-black-2">
        <SidebarMenu className="mt-[5rem] px-4 space-y-6 h-fit">
          <h2
            data-testid="menu"
            id="menu"
            className=" text-3xl text-green-600 font-bold  "
          >
            Menu
          </h2>
          <div className="">
            {content.map((item, index) => (
              <SidebarMenuItem className="" key={index}>
                <SidebarMenuButton className=" h-full" asChild>
                  <Link className=" text-4xl" href={item.url}>
                    <item.icon />
                    <span className=" font-semibold text-2xl">
                      {item.title}
                    </span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </div>
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
