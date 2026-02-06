import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
} from "recharts";

export default function ComplianceScore({score}) {

  return (
    <div className="w-full max-w-2xl rounded-xl bg-white p-4 h-auto sm:h-[50px]">
      <div className="text-base font-semibold">
        Overall Compliance Score
      </div>

      <div className="relative h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="75%"
            innerRadius="85%"
            outerRadius="100%"
            startAngle={180}
            endAngle={0}
            data={[{ value: score }]}
          >
            <PolarAngleAxis
              type="number"
              domain={[0, 100]}
              tick={false}
            />

            <RadialBar
              dataKey="value"
              fill="#ef4444"
              cornerRadius={24}
              background={{ fill: "#f1f5f9" }}
            />
          </RadialBarChart>
        </ResponsiveContainer>

        <div className="absolute inset-0 flex flex-col items-center justify-center pt-10">
          <div className="text-4xl font-bold mb-4">
            {score}%
          </div>
          <div className="text-sm text-slate-400">
            Basic Standards 2025
          </div>
        </div>
      </div>
    </div>
  );
}
