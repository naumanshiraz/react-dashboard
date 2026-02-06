export default function TopPerformingLeaders({ leaders }) {
  return (
    <div className="w-full max-w-md rounded-xl bg-white p-4">
      <div className="text-sm font-semibold text-slate-800 mb-4">
        Top Performing Perspective Leaders
      </div>

      <div className="space-y-4">
        {leaders.map((leader, index) => (
          <div key={leader.name}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={leader.avatar}
                  alt={leader.name}
                  className="w-10 h-10 rounded-full object-cover"
                />

                <div>
                  <div className="text-sm font-medium text-slate-900">
                    {leader.name}
                  </div>
                  <div className="text-xs text-slate-500">
                    {leader.role}
                  </div>
                </div>
              </div>

              <div className="text-sm font-bold text-slate-900">
                {leader.score}%
              </div>
            </div>

            {index !== leaders.length - 1 && (
              <div className="mt-4 h-px bg-slate-200" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
