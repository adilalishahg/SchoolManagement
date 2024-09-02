"use client"

import Image from 'next/image';
import React, { PureComponent } from 'react';

import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Total', 
    count: 100,
    fill: 'blue',
  },
  {
    name: 'Girls',
     
    count: 50,
    fill: '#8884d8',
  },
  {
    name: 'Boys',
     
    count: 50,
    fill: '#83a6ed',
  } 
];

const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};
const CountChart = () => {
  return (
    <div className="bg-white rounded-xl p-4 w-full h-full">
        {/* Title */}
        <div className="flex justify-between items-center">
            <h1 className='text-xl font-semibold'>Students</h1>
            <Image src="/moreDark.png" alt='moreDark' width={20} height={20}/>
        </div>
        {/* Chart */}
        <div className="relative w-full h-[75%]">
        <ResponsiveContainer width="100%" height={300}>
            <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
              <RadialBar
                 background
                dataKey="count"
              />
             </RadialBarChart>
          </ResponsiveContainer>
          <Image src="/maleFemale.png" alt='maleFemale' height={50}  width={50} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
        </div>
        {/* Bottom */}
        <div className="flex justify-center gap-16">
            <div className="flex flex-col gap-1">
                <div className="w-5 h-5 bg-lamaSky rounded-full"></div>
                <h1 className='font-bold'>1234</h1>
                <h2 className='text-xs text-gray-300'>Boys (55%)</h2>
            </div>
            <div className="flex flex-col gap-1">
                <div className="w-5 h-5 bg-lamaYellow rounded-full"></div>
                <h1 className='font-bold'>1234</h1>
                <h2 className='text-xs text-gray-300'>Girls (55%)</h2>
            </div>
        </div>
    </div>
  )
}

export default CountChart