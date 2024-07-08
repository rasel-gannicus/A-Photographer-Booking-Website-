import React from "react";
import "flowbite";
import { Pie, PieChart, ResponsiveContainer } from "recharts";

const DashboardChart = () => {
  const data01 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const data02 = [
    { name: "A1", value: 100 },
    { name: "A2", value: 300 },
    { name: "B1", value: 100 },
    { name: "B2", value: 80 },
    { name: "B3", value: 40 },
    { name: "B4", value: 30 },
    { name: "B5", value: 50 },
    { name: "C1", value: 100 },
    { name: "C2", value: 200 },
    { name: "D1", value: 150 },
    { name: "D2", value: 50 },
  ];

  return (
    <div className="overflow-x-scroll  shadow">
      <div className=" bg-white rounded-lg  dark:bg-gray-800 p-4 md:p-6 h-full flex flex-col justify-center  items-center ">
        <h2 className="text-2xl font-semibold text-gray-400">Profile Chart</h2>
        <PieChart width={400} height={400} >
          <Pie
            data={data01}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={60}
            fill="#8884d8"
          />
          <Pie
            data={data02}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={90}
            fill="#82ca9d"
            label
          />
        </PieChart>
      </div>
    </div>
  );
};

export default DashboardChart;
