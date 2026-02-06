export default function RecentActivities({activities}) {

  return (
    <div className="w-full max-w-md self-start rounded-xl bg-white p-4">
      <div className="text-sm font-semibold text-slate-800 mb-3">
        Recent Activities
      </div>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index}>
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <span className="mt-2 w-2 h-2 rounded-full bg-red-500 shrink-0" />
                <div className="text-sm text-slate-800 leading-snug">
                  {activity.text}
                </div>
              </div>

              <div className="text-xs text-slate-400 whitespace-nowrap">
                {activity.time}
              </div>
            </div>

            {index !== activities.length - 1 && (
              <div className="mt-4 h-px bg-slate-200" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
