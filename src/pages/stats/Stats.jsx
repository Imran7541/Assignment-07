import React, { useState } from 'react';
import { Legend, Pie, PieChart } from 'recharts';
import useFriend from '../../hooks/useFriend';


const Stats = () => {
   const { friend } = useFriend();
    const data = [
  { name: 'Text', value:friend.length , fill: '#0088FE' },
  { name: 'Call', value: friend.length, fill: '#00C49F' },
  { name: 'Video', value:friend.length, fill: '#FFBB28' },
  
];
    return (
        
        <div className='my-10 shadow p-10 rounded-md border border-slate-300 container mx-auto'>
          <div className='font-bold text-4xl mb-16 text-center my-5 '><h1>Friendship Analytics </h1></div>
          <h2 className='text-center text-2xl'>By Interaction Type</h2>
          <PieChart style=
             {{ width: '100%',
             maxWidth: '500px',
             margin:'auto',
              maxHeight: '80vh',
               aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
      <Legend/>
    </PieChart>
        </div>
        
    );
};

export default Stats;