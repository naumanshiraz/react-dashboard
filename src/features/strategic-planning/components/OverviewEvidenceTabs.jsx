import { useState } from "react";
import { LeadersSection } from "./LeadersSection";
import EvidenceTable from "./EvidenceTable";
import Comments from "./Comments";
import RecentActivities from "../../common/RecentActivites";
import { activities } from "../../dashboard/mockData";

export default function OverviewEvidenceTabs({ overviewData, evidenceRows, comments }) {
  const [activeTab, setActiveTab] = useState("overview");
  const [activeSection, setActiveSection] = useState("objective");

  return (
    <div className="bg-gray-50 rounded-xl p-4">
      <div className="flex gap-2 mb-4">
        <Tab
          active={activeTab === "overview"}
          onClick={() => setActiveTab("overview")}
        >
          Overview
        </Tab>
        <Tab
          active={activeTab === "evidence"}
          onClick={() => setActiveTab("evidence")}
        >
          Evidence
        </Tab>
      </div>

      {activeTab === "overview" ? (
        <>
          <OverviewContent overviewData={overviewData} />
          <LeadersSection />
        </>
      ) : (
        <>
          <EvidenceTable evidenceRows={evidenceRows} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Comments comments={comments} />

             <RecentActivities activities={activities} />
          </div>
        </>
      )}


    </div>
  );
}

function Tab({ active, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-sm rounded-lg transition ${active
          ? "bg-white text-blue-600 shadow-sm"
          : "text-gray-500 hover:bg-white/60"
        }`}
    >
      {children}
    </button>
  );
}

function OverviewContent({ overviewData }) {
  return (
    <div className="bg-white border rounded-xl p-4">
      <div className="grid grid-cols-[180px_1fr] gap-3 relative">
        <div className="absolute top-0 left-[185px] h-full w-px bg-slate-100"></div>
        {overviewData.map((item) => (
          <div
            key={item.key}
            className="contents"
          >
            <div className="relative bg-slate-50 rounded-lg px-4 py-3 text-sm font-medium text-slate-700">
              {item.title}
            </div>

            <div className="relative whitespace-pre-line bg-slate-50 rounded-lg px-4 py-3 text-sm text-slate-700 leading-relaxed">
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

