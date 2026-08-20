import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", tasks: 6 },
  { day: "Tue", tasks: 8 },
  { day: "Wed", tasks: 5 },
  { day: "Thu", tasks: 9 },
  { day: "Fri", tasks: 7 },
  { day: "Sat", tasks: 4 },
  { day: "Sun", tasks: 6 },
];

function WeeklyChart() {
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#262626"
            vertical={false}
          />

          <XAxis
            dataKey="day"
            stroke="#737373"
            tickLine={false}
            axisLine={false}
          />

          <YAxis
            stroke="#737373"
            tickLine={false}
            axisLine={false}
          />

          <Tooltip
            contentStyle={{
              backgroundColor: "#171717",
              border: "1px solid #262626",
              borderRadius: "12px",
            }}
          />

          <Bar
            dataKey="tasks"
            fill="#ffffff"
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default WeeklyChart;