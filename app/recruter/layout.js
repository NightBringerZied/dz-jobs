"use client"
import {useState } from "react";
import { usePathname } from "next/navigation";
import Ha from "./component/ha";
export default function Layout({ children }) {
    let path = usePathname();
    let pathName=""
    if(path="/recruter/profile")
      {
         pathName="User Profile"
      }
    else
      {
                 pathName="Job Search"
        }
    const name="profile Managments"
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    return (
  <div className="flex h-screen ">
    <aside
      className={`fixed z-30 transition-all duration-500 ease-out transform overflow-y-auto hide-scrollbar flex flex-col  bg-white h-screen justify-between gap-5 inset-y-0 left-0 text-[#95a1af]  
        ${isSidebarOpen ? " w-[70px] " : "-translate-x-full lg:w-[200px] " }   lg:translate-x-0 lg:visible`}
    >
      <div className="flex flex-col"> 
        <div className="text-2xl font-bold flex justify-around items-center border-b-2 border-[#27AE60] h-[60px] ">
            <img src="/navlogo.png" alt="zeid" className="h-[40px] w-[50px]"/>
          {!isSidebarOpen &&
            <div>
              <h2 className="font-semibold text-[#27AE60]" >Dz Jobs</h2>
              <p className=" text-lg text-gray-400">Candidate Dashboard </p>
            </div>}
        </div>
        <nav className="mt-4 flex flex-col items-center justify-center gap-5 w-full py-6 border-b-2 border-[#27AE60]">
                <Ha href="/candidates/profile" title={"Profile Mangaments"} notselectedimg={"/profile.png"} selectedimg={"/profile.png"} isopen={isSidebarOpen}/>
                <Ha  href="/candidates/jobsearch" title={"Job Search "} notselectedimg={"/jobsearch.png"} selectedimg={"/greenjob.png"}   isopen={isSidebarOpen}/>
                <Ha  href="/candidates/jobapplication" title={"Job Application "} notselectedimg={"/jobappli.png"} selectedimg={"/greenjob.png"} isopen={isSidebarOpen}/>
                <Ha  href="/candidates/favorite" title={"Favorite "} notselectedimg={"/favorite.png"} selectedimg={"/favorite.png"}  isopen={isSidebarOpen}/>
        </nav>
      </div>
      <div className="flex flex-col justify-around py-6 items-start">
          <div className="mt-4 flex flex-col items-center justify-center gap-5 w-full py-6 ">
                <Ha  href="/candidates/setting" title={"Setting"} notselectedimg={"/setting.png"} selectedimg={"/setting.png"} isopen={isSidebarOpen}/>
                <Ha  href="/candidates/Faq" title={"FAQ"} notselectedimg={"/FAQ.png"} selectedimg={"/FAQ.png"} isopen={isSidebarOpen}/>
          </div>
          <div className="flex flex-row items-center justify-evenly w-full py-6 ">
                  <img src="/pdp.png" alt="asda" className="rounded-full h-[30px] w-[30px]" />
                {!isSidebarOpen &&  <h1 className="text-xl text-[#888888] font-light">zied Benaliouche</h1>}
                {!isSidebarOpen &&  <img src="/logout.png" alt="logout" className="h-[20px] w-[20px]" />}
          </div>
      </div>
  </aside>
    <div className="flex-1 flex flex-col ">
      <header className={`bg-white border-b-2 border-[#27AE60]  shadow-2xl ${isSidebarOpen ? "w-full pl-[80px]" : "lg:pl-[220px] w-full "} h-[60px] text-[#95a1af] px-4 flex justify-between items-center`}>
        <div className="flex flex-row justify-center items-center   gap-4 ">

          <button
            className={ ` transition-all duration-500 ease-out transform `}
            onClick={() => setSidebarOpen(!isSidebarOpen)}
          >
          <img src="/navto.png" alt="zeid"/>
          </button>
          <h1 className="text-2xl text-[#27AE60] font-semibold ">{pathName}</h1>
        </div>
        <h1 className="text-lg font-bold">Dashboard</h1>
      </header>
      <main className={`flex-1 ${isSidebarOpen ? "pl-[80px]" : "lg:pl-[220px]"} overflow-y-auto overflow-x-hidden bg-[#f6f7fb]`}>
        {children}
      </main>
    </div>
  </div>
  )
}