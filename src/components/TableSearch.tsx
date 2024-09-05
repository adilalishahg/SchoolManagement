import Image from "next/image"

 
const TableSearch = () => {
  return (
    <div className="">
         {/* Search Bar */}
         <div className="w-full flex md:w-auto items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-4 py-3">
            <Image src="/search.png" alt="search" width={14} height={14}/>
            <input type="text" placeholder="Search..." className="w-[200px] px-2 bg-transparent outline-none"/>
        </div>
    </div>
  )
}

export default TableSearch