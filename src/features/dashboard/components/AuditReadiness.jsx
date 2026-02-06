import {
    ResponsiveContainer,
    RadialBarChart,
    RadialBar,
    PolarAngleAxis,
} from "recharts";

export default function AuditReadiness({ readinessLevel, overdueStds, missingEvidence }) {

    return (
        <div className="w-full max-w-2xl rounded-xl bg-white p-4 h-[400px] sm:h-[50px]">
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
                        data={[{ value: readinessLevel }]}
                    >

                        <PolarAngleAxis
                            type="number"
                            domain={[0, 100]}
                            tick={false}
                        />

                        <RadialBar
                            dataKey="value"
                            fill="#1EA54E"
                            cornerRadius={24}
                            background={{ fill: "#f1f5f9" }}
                        />
                    </RadialBarChart>
                </ResponsiveContainer>

                <div className="absolute inset-0 flex flex-col items-center justify-center pt-[4em]">
                    <div className="text-4xl font-bold mb-4">
                        {readinessLevel}%
                    </div>
                    <div className="text-sm text-slate-400">
                        Readiness Level
                    </div>
                </div>

                <div className="w-full border-t pt-6">
                    <div className="flex align-center justify-between text-center">
                        <div>
                            <div className="text-2xl font-bold text-slate-900">
                                {overdueStds}
                            </div>
                            <div className="text-sm text-slate-400">
                                Overdue Stds
                            </div>
                        </div>

                        <div>
                            <div className="text-2xl font-bold text-slate-900">
                                {missingEvidence}
                            </div>
                            <div className="text-sm text-slate-400">
                                Missing Evidence
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
