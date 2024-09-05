import Announcement from "@/components/Announcement"
import BigCalendar from "@/components/BigCalender"
import PerformanceChart from "@/components/PerformanceChart"
import Image from "next/image"
import Link from "next/link"

const page = () => {
  return (
    <div className="flex-1 p-4 flex flex-col xl:flex-row">
        {/* Left */}
            <div className="w-full xl:w-2/3 p-1">
                <div className="flex flex-col lg:flex-row gap-4">
                {/* User Info Card */}
                    <div className="bg-lamaSky py-4 px-4 rounded-md flex-1 flex gap-4">
                        <div className="w-1/3">
                            <Image                 
                                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200"
                                width={144}
                                height={144}
                                alt=""
                                className="w-36 h-36 rounded-full object-cover" />
                        </div>
                        <div className="w-2/3 flex flex-col justify-between gap-4">
                            <h1 className="text-xl font-semibold">Test User</h1>
                            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <div className="flex items-center justify-between flex-wrap text-xs font-medium gap-2">
                                <div className="w-full md:w-1/3 2xl:w-1/3 lg:w-full flex item-center gap-2">
                                    <Image src="/blood.png" alt="" width={14} height={14}/>
                                    <span>A</span>
                                </div>
                                <div className="w-full md:w-1/3 2xl:w-1/3 lg:w-full flex item-center gap-2">
                                    <Image src="/date.png" alt="" width={14} height={14}/>
                                    <span>Jan 2025</span>
                                </div>
                                <div className="w-full md:w-1/3 2xl:w-1/3 lg:w-full flex item-center gap-2">
                                    <Image src="/mail.png" alt="" width={14} height={14}/>
                                    <span>a@gmail.com</span>
                                </div>
                                <div className="w-full md:w-1/3 2xl:w-1/3 lg:w-full flex item-center gap-2">
                                    <Image src="/phone.png" alt="" width={14} height={14}/>
                                    <span>1 234 255</span>
                                </div>
                            </div>
                        </div>
                    </div>

                {/* SMALL CARDS */}
                    <div className="flex-1 flex gap-4 justify-between flex-wrap ">
                        {/* CARD */}
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                            <Image src="/singleAttendance.jpg" alt="" width={24} height={24} className="w-6 h-6"/>
                            <div className="">
                                <h1 className="text-xs font-semibold">90%</h1>
                                <span className="text-sm text-gray-400">Attendance</span>
                            </div>
                        </div>
                        {/* CARD */}
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                            <Image src="/singleBranch.jpg" alt="" width={24} height={24} className="w-6 h-6"/>
                            <div className="">
                                <h1 className="text-xs font-semibold">2</h1>
                                <span className="text-sm text-gray-400">Branches</span>
                            </div>
                        </div>
                        {/* CARD */}
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                            <Image src="/singleLesson.jpg" alt="" width={24} height={24} className="w-6 h-6"/>
                            <div className="">
                                <h1 className="text-xs font-semibold">90%</h1>
                                <span className="text-sm text-gray-400">Lessons</span>
                            </div>
                        </div>
                        {/* CARD */}
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                            <Image src="/singleClass.jpg" alt="" width={24} height={24} className="w-6 h-6"/>
                            <div className="">
                                <h1 className="text-xs font-semibold">90%</h1>
                                <span className="text-sm text-gray-400">Classes</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* BOTTOM */}
                <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
                    <h1>Teacher &apos; s Schedule</h1>
                    <BigCalendar />
                </div>
            </div>
            
        {/* Right */}
            <div className="w-full xl:w-1/3 flex flex-col gap-4">
                <div className="bg-white rounded-md p-4">
                    <h1 className="text-xl font-semibold">Shortcuts</h1>
                    <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
                        <Link className="p-3 rounded-md bg-lamaSkyLight" href="/">Teacher &apos; s Classes</Link>
                        <Link className="p-3 rounded-md bg-lamaPurple" href="/">Teacher &apos; s Students</Link>
                        <Link className="p-3 rounded-md bg-lamaSky" href="/">Teacher &apos; s Lessons</Link>
                        <Link className="p-3 rounded-md bg-lamaPurpleLight" href="/">Teacher &apos; s Exams</Link>
                        <Link className="p-3 rounded-md bg-lamaYellowLight" href="/">Teacher &apos; s Assignments</Link>
                    </div>
                </div>
                <PerformanceChart/> 
                <Announcement/>
            </div>
    </div>
  )
}

export default page