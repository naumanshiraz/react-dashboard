import { useNavigate } from "react-router-dom";
import { evidenceStats, overviewData, evidenceRows, comments } from './mockData';
import StrategyHeaderCard from './components/StrategyHeaderCard';
import EvidenceStats from './components/EvidenceStats';
import OverviewEvidenceTabs from './components/OverviewEvidenceTabs';
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowLeft02Icon } from '@hugeicons/core-free-icons'  

export default function StrategicPlanning(){
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2 font-bold">
        <button
          onClick={() => navigate(-1)}
          className="p-1 rounded hover:bg-gray-200 transition"
          aria-label="Go back"
        >
          <HugeiconsIcon icon={ArrowLeft02Icon} />
        </button>

        <span className="text-sm font-bold text-gray-700">
          Digital Transformation Strategic Planning
        </span>
      </div>

      <StrategyHeaderCard />

      <EvidenceStats evidenceStats={evidenceStats} />

      <OverviewEvidenceTabs overviewData={overviewData} evidenceRows={evidenceRows} comments={comments} />
    </div>
  );
}