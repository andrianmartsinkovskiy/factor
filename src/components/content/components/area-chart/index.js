import React from 'react';
import {AreaChart, Area,  ResponsiveContainer, CartesianGrid} from 'recharts';

const data = []

const getCountByNumber = (val) => {
  if (val <= 30) return 8000
  if (val >= 30 && val < 60) return 5000
  if (val >= 60 && val < 90) return 7000
  if (val >= 90 && val < 140) return 9000
  if (val >= 140 && val < 170) return 11000
  if (val >= 170) return 8000
}

for (let i=0;i<200; i++) {
  data.push({
    name: 'item ' + i,
    uv: getCountByNumber(i) + (Math.ceil(Math.random() * 4000)),
  })
}

const MyAreaChart = () => {

  return (
    <ResponsiveContainer>
      <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeOpacity={0.08} strokeDasharray="3 3" />
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export {
  MyAreaChart
}