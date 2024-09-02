"use client"

import Image from "next/image"
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    income: 2000,
    expense: 3000,
    amt: 2400,
  },
  {
    name: 'Feb',
    income: 5000,
    expense: 2000,
    amt: 2400,
  },
  {
    name: 'Mrch',
    income: 500,
    expense: 100,
    amt: 2400,
  },
  {
    name: 'Apr',
    income: 3000,
    expense: 200,
    amt: 2400,
  },
  {
    name: 'May',
    income: 4000,
    expense: 2400,
    amt: 2400,
  },
  {
    name: 'June',
    income: 4000,
    expense: 2400,
    amt: 2400,
  },
  {
    name: 'July',
    income: 4000,
    expense: 2400,
    amt: 2400,
  },
  {
    name: 'Aug',
    income: 4000,
    expense: 2400,
    amt: 2400,
  },
  {
    name: 'Sep',
    income: 4000,
    expense: 2400,
    amt: 2400,
  },
  {
    name: 'Oct',
    income: 4000,
    expense: 2400,
    amt: 2400,
  },
  {
    name: 'Nov',
    income: 4000,
    expense: 2400,
    amt: 2400,
  },
  {
    name: 'Dec',
    income: 4000,
    expense: 2400,
    amt: 2400,
  },
];

const FinanceChart = () => {
  return (
    <div className='bg-white rounded-lg p-4 h-full'>
      <div className="flex justify-between items-center">
        <h1 className='font-semibold text-lg'>Attendance</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20}/>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          
          barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3"  vertical={false} stroke="#ddd"/>
          <XAxis dataKey="name"  axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}  tickMargin={20}/>
          <YAxis  axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} tickMargin={10}/>
          <Tooltip  contentStyle={{ borderRadius:"10px",borderColor:"lightgray" }}/>
          <Legend align="center" verticalAlign='top' wrapperStyle={{ paddingTop:"10px",paddingBottom:"30px" }}/>
          <Line type="monotone" dataKey="income" stroke="#CFCEFF" strokeWidth={5} />
          <Line type="monotone" dataKey="expense" stroke="#C3EBFA" strokeWidth={5}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default FinanceChart