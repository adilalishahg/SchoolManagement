 
const Announcement = () => {
  return (
    <div className="bg-white p-4 rounded-md">
        <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">Announcement</h1>
            <span className="text-xs text-gray-400">View All</span>
        </div>
        <div className="flex flex-col gap-4 mt-4">
            <div className="bg-lamaSkyLight rounded-md p-4">
                <div className="flex items-center justify-between">
                    <h1 className="font-medium">Lorem ipsum</h1>
                    <span className="text-xs text-gray-400 bg-white rounded-md p-1">
                        2025-03-20
                    </span>
                </div>
                <p className="text-sm text-gray-400 mt-1">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus vitae 
                </p>
            </div>
            <div className="bg-lamaPurple rounded-md p-4">
                <div className="flex items-center justify-between">
                    <h1 className="font-medium">Lorem ipsum</h1>
                    <span className="text-xs text-gray-400 bg-white rounded-md p-1">
                        2025-03-20
                    </span>
                </div>
                <p className="text-sm text-gray-400 mt-1">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus vitae 
                </p>
            </div>
            <div className="bg-lamaYellow rounded-md p-4">
                <div className="flex items-center justify-between">
                    <h1 className="font-medium">Lorem ipsum</h1>
                    <span className="text-xs text-gray-400 bg-white rounded-md p-1">
                        2025-03-20
                    </span>
                </div>
                <p className="text-sm text-gray-400 mt-1">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus vitae 
                </p>
            </div>
           
        </div>
    </div>
  )
}

export default Announcement