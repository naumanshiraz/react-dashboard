import { Routes, Route, Navigate } from 'react-router-dom';
import Header from '@/shared/components/Header';
import Sidebar from '@/shared/components/Sidebar';
import Dashboard from '@/features/dashboard/Dashboard';
import StrategicPlanning from '@/features/strategic-planning/StrategicPlanning';

export default function App() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="w-full mx-auto p-6">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/strategic-planning/:id?" element={<StrategicPlanning />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}