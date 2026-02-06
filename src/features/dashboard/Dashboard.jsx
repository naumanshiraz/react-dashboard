import StatsCard from './components/StatsCard';
import Timeline from './components/Timeline';
import ProgressGrid from './components/ProgressGrid';
import ComplianceScore from './components/ComplianceScore';
import TopPerformingLeaders from './components/TopPerformingLeader';
import RecentActivities from '../common/RecentActivites';
import PerformanceBarChart from './components/PerformanceBarChart';
import AuditReadiness from './components/AuditReadiness';
import { stats, timeline, barData, perspectives, score, leaders, activities, readinessLevel, overdueStds, missingEvidence } from './mockData';

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-6">
        <Timeline points={timeline} />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        {stats.map(s => <StatsCard key={s.id} id={s.id} value={s.value ?? s.value} label={s.label} />)}
      </div>

      <ProgressGrid perspectives={perspectives} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="card p-4 border !shadow-none">
          <ComplianceScore score={score} />
        </div>

        <div className="card p-4 border !shadow-none">
          <TopPerformingLeaders leaders={leaders} />
        </div>


        <div className="card p-4 border !shadow-none">
          <RecentActivities activities={activities} />
        </div>

        <div className="lg:col-span-2">
          <div className="card p-4 border !shadow-none">
            <PerformanceBarChart barData={barData} />
          </div>
        </div>

        <div className="card p-4border !shadow-none">
          <AuditReadiness readinessLevel={readinessLevel} overdueStds={overdueStds} missingEvidence={missingEvidence} />
        </div>
      </div>
    </div>
  );
}