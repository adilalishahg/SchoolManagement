"use client"
import Announcement from "@/components/Announcement"; 
import EventCalender from "@/components/EventCalender"; 
import Loader from "@/components/Loader";
// import CountChart from "@/components/CountChart"
import UserCard from "@/components/UserCard"
import dynamic from 'next/dynamic';

// Lazy load CountChart with SSR disabled
const CountChart = dynamic(() => import('@/components/CountChart'), {
  ssr: false,
  loading: () => <Loader/>, // Optional: Show a loading indicator while the component is loading
});
// Lazy load FinanceChart with SSR disabled
const FinanceChart = dynamic(() => import('@/components/FinanceChart'), {
  ssr: false,
  loading: () => <Loader/>, // Optional: Show a loading indicator while the component is loading
});
// Lazy load AttendanceChart with SSR disabled
const AttendanceChart = dynamic(() => import('@/components/AttendanceChart'), {
  ssr: false,
  loading: () => <Loader/>, // Optional: Show a loading indicator while the component is loading
});
const AdminPage = ()=>{
    return(
        <div className="p-4 flex gap-4 flex-col md:flex-row">
            {/* Left */}
            <div className="w-full lg:w-2/3 flex flex-col gap-8">
                <div className="flex gap-4 justify-between flex-wrap">
                    <UserCard type="student"/>
                    <UserCard type="teacher"/>
                    <UserCard type="parent"/>
                    <UserCard type="staff"/>
                </div>
                {/* Middle Charts */}
                <div className="flex flex-col gap-6 lg:flex-row">
                    <div className="w-full lg:w-1/3 h-[450px]">
                        <CountChart/>
                    </div>
                    <div className="w-full lg:w-2/3 h-[450px]">
                        <AttendanceChart />
                    </div>
                </div>
                {/* Bottom Charts */}
                <div className="w-full h-[500px]">
                    <FinanceChart/>
                </div>
            </div>
            {/* Right */}
            <div className="w-full lg:w-1/3 flex flex-col gap-8">
                <EventCalender/>
                <Announcement />
            </div>
        </div>
    )
}
export default AdminPage