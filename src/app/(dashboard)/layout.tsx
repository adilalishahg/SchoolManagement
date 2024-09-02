"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import Menu from "@/components/Menu";
import Image from "next/image"; 
import Navbar from "@/components/Navbar";

 
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    // Function to check the screen size
    const handleResize = () => {
      if (window.matchMedia('(max-width: 768px)').matches) {
        // If screen size is medium or small (<= 768px)
        setIsOpen(false);
      }
    };
  
    // Check the screen size when the component mounts
    handleResize();
  
    // Add an event listener to detect screen size changes
    window.addEventListener('resize', handleResize);
  
    // Clean up the event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty dependency array means this effect runs once on mount
  const [isOpen,setIsOpen] = useState(false)
  return ( 
      <div className="h-screen flex">
        {/* Left */}
        <div className={` ease-in-out duration-500 ${isOpen ? "w-[4%]":"w-[14%] xl:w-[18%] md:w-[8%] lg:w-[16%]"}`}>
          <div className={`flex items-center pt-2 ${isOpen ? "flex-col lg:justify-start":"justify-center  gap-3"}`}>
            <Link href="/" className={`flex items-center justify-center gap-3  ${isOpen &&"lg:justify-start p-4"}`}>
              <Image src="/logo.png" alt="schoolLogo" width={32} height={32} />
              <span className={`hidden ${isOpen ? "lg:hidden":" lg:block"}`}>
                  <span className="md:hidden lg:block">
                    SchoolManagement
                  </span>
                  <span className="hidden md:block  lg:hidden">
                    S.M.S
                  </span>
                </span>
              
            </Link>
            <div className="lg:flex flex-col gap-[4.5px] cursor-pointer hidden" 
              onClick={()=>setIsOpen(prev=>!prev)}>
                <div className={`w-6 h-1 bg-purple-500 rounded-sm `}></div>
                <div className={`w-6 h-1 bg-purple-500 rounded-sm  `}></div>
                <div className={`w-6 h-1 bg-purple-500 rounded-sm `}></div>
              </div>
            </div>
          <Menu isOpen={isOpen}/>
        </div>
        {/* Right */}
        <div className={`scrollbaroverflow ${isOpen ? "w-[96%]":"w-[86%] xl:w-[86%] md:w-[92%] lg:w-[82%] overflow-scroll"} bg-[#F7F8FA] `} >
          <Navbar/>
          {children}
        </div>
      </div>  
  );
}
