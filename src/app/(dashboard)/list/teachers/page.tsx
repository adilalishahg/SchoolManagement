import Pagination from '@/components/Pagination'
import TableSearch from '@/components/TableSearch'
import Table from '@/components/Table'
import Image from 'next/image'
import React from 'react'
import { CiFilter } from 'react-icons/ci'
import { GoSortDesc } from 'react-icons/go'
import { IoMdAddCircleOutline } from 'react-icons/io'
import Link from 'next/link'
import { role, teachersData } from '@/lib/data'

type Teacher = {
    id:number;
    teacherId:string;
    name:string;
    email?:string;
    photo:string;
    phone:string;
    subjects:string[];
    classes:string[];
    address:string;
}
const columns = [
    {header:"Info",accessor:"info"},
    {header:"Teacher ID",accessor:"teacher id",className:"hidden md:table-cell"},
    {header:"Subjects",accessor:"subjects",className:"hidden md:table-cell"},
    {header:"Classes",accessor:"classes",className:"hidden md:table-cell"},
    {header:"Phone",accessor:"phone",className:"hidden md:table-cell"},
    {header:"Address",accessor:"address",className:"hidden md:table-cell"},
    {header:"Actions",accessor:"actions"},
]
const TeacherListPage = () => {
    const renderRow = (item:Teacher)=>(
        <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight">
            <td className="flex items-center gap-4 p-4">
                <Image src={item.photo} alt="" width={40} height={40} 
                    className='md:hidden xl:block w-10 h-10 rounded-full object-cover'
                /> 
                <div className="flex flex-col">
                    <div className="font-semibold">{item.name}</div>
                    <div className="text text-gray-500">{item?.email}</div>
                </div>
            </td>
            <td className='hidden md:table-cell'>{item.teacherId}</td>
            <td className='hidden md:table-cell'>{item.subjects.join(",")}</td>
            <td className='hidden md:table-cell'>{item.classes.join(",")}</td>
            <td className='hidden md:table-cell'>{item.phone}</td>
            <td className='hidden md:table-cell'>{item.address}</td>
            <td>
                <div className="flex items-center gap-2">
                    <Link href={`/list/teachers/${item.id}`}>
                        <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
                            <Image src="/edit.png" alt="" width={16} height={16}/>
                        </button>
                    </Link>
                    {role==="admin" &&(
                        <Link href={`/list/teachers/${item.id}`}>
                        <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
                            <Image src="/delete.png" alt="" width={16} height={16}/>
                        </button>
                    </Link> 
                    )}
                </div>
            </td>
        </tr>
    )
  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
        {/* Top */}
        <div className="flex items-center justify-between">
            <h1 className='hidden md:block text-lg font-semibold'>All Teachers</h1>
            <div className=" flex flex-col md:flex-row items-center justify-center gap-4 w-full md:w-auto">
                <TableSearch/>
                <div className="flex items-center gap-4 self-end">
                    <button className='w-8 h-8 flex items-center justify-center rounded-full bg-primary'>
                        <CiFilter className='text-white h-[70%] w-[70%] font-bold'/>
                        
                    </button> 
                    <button className='w-8 h-8 flex items-center justify-center rounded-full bg-primary'>
                        <GoSortDesc  className='text-white h-[70%] w-[70%] font-bold'/>
                        
                    </button> 
                    {role==='admin' && (

                        <button className='w-8 h-8 flex items-center justify-center rounded-full bg-primary'>
                        <IoMdAddCircleOutline   className='text-white h-[70%] w-[70%] font-bold'/>
                        
                    </button>  
                    )} 
                </div>
            </div>
        </div>
        {/* List */}
        <div className="list">
            <Table columns={columns} renderRow={renderRow} data={teachersData}/>
        </div>    
        {/* Pagintation */}
        <div className="pagination">
            <Pagination/>
        </div>
    </div>
  )
}

export default TeacherListPage