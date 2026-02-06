export default function StrategyHeaderCard() {
  return (
    <div className="bg-white rounded-xl border p-6 flex items-center justify-between">
      <div>
        <span className="inline-block mb-2 px-3 py-1 text-xs font-medium text-scale-200 bg-blue-50 rounded-full">
          Strategy & Planning
        </span>

        <h2 className="text-lg font-bold text-gray-800">
          Digital Transformation Strategic Planning
        </h2>

        <p className="text-sm text-gray-500 mt-1 max-w-2xl">
          Develop Comprehensive Strategic Plans For Digital Transformation
          Aligned With Organizational Goals
        </p>
      </div>

      <ProgressRing percentage={100} />
    </div>
  );
}

function ProgressRing({ percentage }) {
  const radius = 42;
  const stroke = 5;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset =
    circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-20 h-20">
      <svg height="80" width="80">
        <circle
          stroke="#E5E7EB"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx="40"
          cy="40"
        />
        <circle
          stroke="#16A34A"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx="40"
          cy="40"
          transform="rotate(-90 40 40)"
        />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-black">
        {percentage}%
      </div>
    </div>
  );
}

