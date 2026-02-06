import profileImage from "@/assets/profile-b.jpg";

export function LeadersSection() {
  return (
    <div className="bg-white rounded-xl border p-4 mt-4">
      <h3 className="text-sm font-semibold text-gray-800 mb-3">Leaders</h3>

      <div className="flex gap-4">
        {[1, 2].map((i) => (
          <div
            key={i}
            className="flex items-center gap-3 bg-gray-50 rounded-lg p-3"
          >
            <div className="w-8 h-8 rounded-full bg-gray-300">
              <img
                src={profileImage}
                alt="User"
                className="w-auto h-full rounded-full"
              />
            </div>
            <div>
              <p className="text-sm font-medium">Ahmed Al-Ali</p>
              <p className="text-xs text-gray-500">
                Strategy Perspective
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}