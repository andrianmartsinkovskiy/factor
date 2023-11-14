import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
  {
    subject: 'BETA',
    A: 65,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'LKV',
    A: 60,
    B: 60,
    fullMark: 150,
  },
  {
    subject: 'MKT CAP',
    A: 10,
    B: 10,
    fullMark: 150,
  },
  {
    subject: 'VLTLTY',
    A: 66,
    B: 40,
    fullMark: 150,
  },
  {
    subject: 'LQUTY',
    A: 55,
    B: 54,
    fullMark: 150,
  },
];

export const RadarCharts = () => {

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
}