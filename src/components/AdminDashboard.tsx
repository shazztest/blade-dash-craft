
import React, { useState } from 'react';
import Sidebar from './dashboard/Sidebar';
import Header from './dashboard/Header';
import DashboardContent from './dashboard/DashboardContent';

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-background">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-muted/30">
          <DashboardContent />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
