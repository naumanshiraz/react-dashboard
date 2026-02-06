import { Link } from "react-router-dom";

const STATUS_COLORS = {
  notStarted: "bg-gray-400",
  inProgress: "bg-amber-500",
  completed: "bg-green-500",
  partiallyUploaded: "bg-blue-500",
  fullyUploaded: "bg-sky-500",
  delayed: "bg-red-500",
};

export default function ProgressStatus({ perspectives }) {
  return (
    <section className="bg-white rounded-xl p-4 sm:p-6 shadow-none">
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
        <h3 className="text-lg font-semibold text-slate-800">
          Progress Status
        </h3>

        <div className="flex flex-wrap gap-3 text-xs text-slate-600">
          {Object.entries(STATUS_COLORS).map(([k, v]) => (
            <Legend key={k} label={k} color={v} />
          ))}
        </div>
      </header>

      <div className="flex flex-col sm:flex-row gap-4 sm:overflow-x-auto">
        {perspectives.map(p => (
          <PerspectiveColumn key={p.id} data={p} />
        ))}
      </div>
    </section>
  );
}

function PerspectiveColumn({ data }) {
  return (
    <div className="w-full sm:w-[102px] flex flex-col min-h-0 sm:min-h-[260px]">
      <div className="bg-[#0f2742] text-white rounded-lg p-3 h-[90px]">
        <div className="text-[12px] text-center font-semibold mb-1 leading-tight">
          {data.title}
        </div>
        <div className="text-center bg-[#1e3a5f] rounded-md py-1 text-sm font-bold">
          {data.score}%
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-3 mt-3">
        {data.pillars.map((pl, idx) => {
          const href =
            pl.name === "Digital Transformation"
              ? "/strategic-planning"
              : "#";

          return (
            <Link
              key={idx}
              to={href}
              onClick={href === "#" ? e => e.preventDefault() : undefined}
              className="block flex-1"
            >
              <div className="h-full flex flex-col bg-slate-50 rounded-lg p-2 border border-slate-200 hover:bg-slate-100 transition">
                <div className="text-[10px] text-center font-medium text-slate-500 mb-3">
                  {pl.name}
                </div>

                <div className="flex-1 flex items-center justify-center">
                  <div className="flex justify-center gap-2 sm:grid sm:grid-cols-2 sm:justify-items-center mx-auto">
                    {pl.statuses.map(s => (
                      <span
                        key={s.id}
                        className={`w-6 h-6 rounded-full text-white text-xs font-semibold flex items-center justify-center ${STATUS_COLORS[s.status]}`}
                      >
                        {s.id}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function Legend({ label, color }) {
  return (
    <div className="flex items-center gap-1 capitalize whitespace-nowrap">
      <span className={`w-2 h-2 rounded-full ${color}`} />
      {label.replace(/([A-Z])/g, " $1")}
    </div>
  );
}
