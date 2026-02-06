import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Jan", value: 88 },
  { month: "Feb", value: 76 },
  { month: "Mar", value: 81 },
  { month: "Apr", value: 42 },
  { month: "May", value: 88 },
  { month: "Jun", value: 79 },
  { month: "Jul", value: 54 },
  { month: "Aug", value: 88 },
  { month: "Sept", value: 79 },
  { month: "Oct", value: 54 },
  { month: "Nov", value: 88 },
  { month: "Dec", value: 79 },
];

export default function PerformanceBarChart({barData}) {
  return (
    <div className="w-full rounded-xl border bg-white p-5">
      <div className="text-sm font-bold text-slate-800 mb-4">
        12-Month Performance
      </div>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barCategoryGap={4}>
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0078D7" />
                <stop offset="100%" stopColor="#ffffff" />
              </linearGradient>
            </defs>

            <CartesianGrid
              vertical={false}
              stroke="#f1f5f9"
            />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94a3b8", fontSize: 12 }}
            />

            <YAxis
              domain={[0, 100]}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94a3b8", fontSize: 12 }}
            />

            <Bar
              dataKey="value"
              fill="url(#barGradient)"
              radius={[4, 4, 0, 0]}
              maxBarSize={42}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
