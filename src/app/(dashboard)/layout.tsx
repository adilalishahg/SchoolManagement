"use client"
import Link from "next/link"
import { useState } from "react"
import Menu from "@/components/Menu";
import Image from "next/image"; 

 
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen,setIsOpen] = useState(false)
  return ( 
      <div className="h-screen flex">
        {/* Left */}
        <div className={` ease-in-out duration-500 ${isOpen ? "w-[4%]":"w-[14%] xl:w-[18%] md:w-[8%] lg:w-[16%]"}`}>
          <div className={`flex items-center pt-2 ${isOpen? "flex-col lg:justify-start":"justify-center  gap-3"}`}>
            <Link href="/" className={`flex items-center justify-center gap-3  ${isOpen &&"lg:justify-start p-4"}`}>
              <Image src="/logo.png" alt="schoolLogo" width={32} height={32} />
              <span className={`hidden ${isOpen ? "lg:hidden":" lg:block"}`}>SchoolManagement</span>
              
            </Link>
            <div className="flex flex-col gap-[4.5px] cursor-pointer" 
              onClick={()=>setIsOpen(prev=>!prev)}>
                <div className={`w-6 h-1 bg-blue-500 rounded-sm `}></div>
                <div className={`w-6 h-1 bg-blue-500 rounded-sm  `}></div>
                <div className={`w-6 h-1 bg-blue-500 rounded-sm `}></div>
              </div>
            </div>
          <Menu isOpen={isOpen}/>
        </div>
        {/* Right */}
        <div className="w-[86%] xl:w-[86%] md:w-[92%] lg:w-[82%]" ></div>
      </div>  
  );
}
