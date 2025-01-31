import Pagination from '@/components/Pagination'
import TableSearch from '@/components/TableSearch'
import Table from '@/components/Table'
import Image from 'next/image'
import React from 'react'
import { CiFilter } from 'react-icons/ci'
import { GoSortDesc } from 'react-icons/go'
import { IoMdAddCircleOutline } from 'react-icons/io'
import Link from 'next/link'
import { classesData, role, subjectsData, teachersData } from '@/lib/data'

type Class = {
    id:number; 
    name:string;  
    capacity:number;
    grade:number;
    supervisor:string;
}
const columns = [
    {header:"Class Name",accessor:"info"},
    {header:"Capacity",accessor:"capacity",className:"hidden md:table-cell"}, 
    {header:"Grade",accessor:"grade",className:"hidden md:table-cell"}, 
    {header:"Supervisor",accessor:"supervisor",className:"hidden md:table-cell"}, 
    {header:"Actions",accessor:"actions"},
]
const ClassListPage = () => {
    const renderRow = (item:Class)=>(
        <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight">
            <td className="flex items-center gap-4 p-4">
              {item.name}                
            </td>  
            <td className="hidden md:table-cell">
                 {item.capacity}  
            </td> 
            <td className="hidden md:table-cell">
                 {item.grade}  
            </td> 
            <td className="hidden md:table-cell">
                 {item.supervisor}  
            </td> 
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
            <h1 className='hidden md:block text-lg font-semibold'>All Classes</h1>
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
            <Table columns={columns} renderRow={renderRow} data={classesData}/>
        </div>    
        {/* Pagintation */}
        <div className="pagination">
            <Pagination/>
        </div>
    </div>
  )
}

export default ClassListPage