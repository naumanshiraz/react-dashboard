export default function Timeline({ points, year = "2026" }) {
  const completedCount = points.filter(p => p.status === "done").length;
  const progressPercent =
    points.length > 2 ? (completedCount / points.length) * 100 : 0;

  return (
    <div className="card p-4 flex-1 border !shadow-none">
      <div className="flex items-center justify-between gap-3 mb-6">
        <div className="text-lg font-medium">Project Timeline</div>

        <select className="border rounded-md px-3 py-1 text-sm text-slate-600 w-fit">
          <option>{year}</option>
        </select>
      </div>

      {/* MOBILE */}
      <div className="flex flex-col gap-6 sm:hidden relative pl-6">
        <div className="absolute left-2 top-0 bottom-0 w-1 bg-slate-200 rounded-full" />
        <div
            className="absolute w-1 top-0 left-2 bg-green-500 rounded-full transition-all"
            style={{ height: `${progressPercent}%` }}
          />

        {points.map((p, i) => (
          <div key={i} className="relative">
            <div
              className={`w-3 h-3 rounded-full absolute -left-[20px] top-3 ${
                p.status === "done" ? "bg-green-500" : "bg-red-500"
              }`}
            />

            <div className="ml-4">
              <div className="text-xs text-slate-500">{p.date}</div>
              <div className="text-sm font-medium">{p.title}</div>
            </div>
          </div>
        ))}
      </div>

      {/* DESKTOP */}
      <div className="relative hidden sm:block overflow-x-auto">
        <div className="relative min-w-[800px] pb-4">
          <div className="absolute top-4 left-0 right-0 h-3 bg-slate-200 rounded-full" />

          <div
            className="absolute top-4 left-0 h-3 bg-green-500 rounded-full transition-all"
            style={{ width: `${progressPercent}%` }}
          />

          <div className="relative flex justify-between px-2 pt-4">
            {points.map((p, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center w-[140px] relative"
              >
                <div
                  className={`w-3 h-3 rounded-full z-10 absolute ${
                    p.status === "done" ? "bg-white" : "bg-red-500"
                  }`}
                />

                <div className="mt-4 text-xs text-slate-500">
                  {p.date}
                </div>
                <div className="text-sm font-medium">
                  {p.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
