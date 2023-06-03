import React from "react";

import { useUsers } from "../hooks/useUser";
import { useAdmin } from "../hooks/useAdminBid";
import { useUserBid } from "../hooks/useUserBid";

import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

const AdminGraph = () => {
  const { users } = useUsers();
  const { post } = useAdmin();
  const { done } = useUserBid();
  const userLength = users.length;
  const postLength = post.length;
  const doneLength = done.length;

  const data = [
    { name: "Users", activity: userLength },
    { name: "Training Posts", activity: postLength },
    { name: "Bids Placed", activity: doneLength },
  ];
  const data02 = [
    { name: "Group A", value: 2400 },
    { name: "Group B", value: 4567 },
    { name: "Group C", value: 1398 },
    { name: "Group D", value: 9800 },
    { name: "Group E", value: 3908 },
    { name: "Group F", value: 4800 },
  ];

  const data03 = [
    {
      name: "Jan",
      uv: userLength,
      pv: userLength,
      amt: 100,
    },
    {
      name: "Feb",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Mar",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Apr",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "May",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Jun",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Jul",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            margin: "20px",
          }}
        >
          <div style={{}}>
            <PieChart width={300} height={370}>
              <Pie
                dataKey="activity"
                isAnimationActive={false}
                data={data}
                cx={200}
                cy={200}
                outerRadius={80}
                fill="black"
                label
              />

              <Tooltip />
            </PieChart>
          </div>
          <div style={{ marginTop: "40px" }}>
            <BarChart
              width={400}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 80,
                bottom: 5,
              }}
              barSize={30}
            >
              <XAxis
                dataKey="name"
                scale="point"
                padding={{ left: 10, right: 10 }}
              />
              <YAxis />
              <Tooltip />
              <Legend />
              <CartesianGrid strokeDasharray="3 3" />
              <Bar
                dataKey="activity"
                fill="black"
                background={{ fill: "#eee" }}
              />
            </BarChart>
          </div>
          <div style={{ marginTop: "40px" }}>
            <LineChart
              width={500}
              height={300}
              data={data03}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="black"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="gray" />
            </LineChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminGraph;
