"use client"
import Image from "next/image"
import { useState } from "react"
import { LuSun } from "react-icons/lu";
 
const Navbar = () => {
    const [profileOptionOpen,isProfileOptionOpen] = useState(false)
  return (
    <div className="flex items-center justify-between p-4">
        {/* Search Bar */}
        <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-4 py-3">
            <Image src="/search.png" alt="search" width={14} height={14}/>
            <input type="text" placeholder="Search..." className="w-[200px] px-2 bg-transparent outline-none"/>
        </div>
        {/* Icons And Users */}
        <div className="flex items-center gap-6 justify-end w-full">
            <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
                <Image src="/message.png" alt="" width={20} height={20}/>
            </div>
            <div className="bg-white relative rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
                <Image src="/announcement.png" alt="" width={20} height={20}/>
                <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center text-center justify-center rounded-full bg-primary text-white text-xs">1 </div>
            </div>
            <div className="bg-white relative rounded-full w-8 h-8 flex items-center justify-center cursor-pointer">
                <LuSun className="w-8 h-8"/>
            </div>
            <div className="flex flex-col">
                <span className="text-xs leading-3 font-medium">John Doe</span>
                <span className="text-[10px] text-gray-500 text-right">Admin</span>
            </div>
            <div className="relative">
                <Image src="/avatar.png" alt="avatar" width={36} height={36} className="rounded-full" onClick={()=>isProfileOptionOpen(prev=>!prev)}/>
                <div className={`${profileOptionOpen ? "absolute":"hidden"} top-[2.5rem] right-1 rounded px-2 scrollbaroverflow overflow-y-scroll w-36 h-36 bg-primary text-white`}>
                    <div>asd</div>
                    <div>asd</div>
                    <div>asd</div>
                    <div>asd</div>
                    <div>asd</div>
                    <div>asd</div>
                    <div>asd</div>
                    <div>asd</div>
                    <div>asd</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar