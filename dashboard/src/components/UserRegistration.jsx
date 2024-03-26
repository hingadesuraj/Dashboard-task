import React from "react";
// import { Line } from "react-chartjs-2";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

const UserRegistration = () => {
 
    // dummy data 
  const data = [
    {
      name: "January",
      user: 2400,
      amt: 2400,
    },
    {
      name: "February",
      user: 1398,
      amt: 2210,
    },
    {
      name: "March",
      user: 9800,
      amt: 2290,
    },
    {
      name: "April",
      user: 3908,
      amt: 2000,
    },
    {
      name: "May",
      user: 4800,
      amt: 2181,
    },
    {
      name: "June",
      user: 3800,
      amt: 2500,
    },
    {
      name: "July",
      user: 4300,
      amt: 2100,
    },
    {
      name: "August",
      user: 4300,
      amt: 2100,
    },
    {
      name: "September",
      user: 4300,
      amt: 2100,
    },
    {
      name: "October",
      user: 4300,
      amt: 2100,
    },
    {
      name: "November",
      user: 4300,
      amt: 2100,
    },
    {
      name: "December",
      user: 4300,
      amt: 2100,
    },
  ];

  return (
    <div>
      <div className="border-b-2" >
        <h2 className="text-xl font-semibold text-center p-2" >User Registrations Over Time</h2>

        <LineChart width={1100} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <Line
            type="monotone"
            dataKey="user"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </div>
    </div>
  );
};

export default UserRegistration;
