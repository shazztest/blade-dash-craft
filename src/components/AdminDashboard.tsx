
import React, { useState } from 'react';
import Sidebar from './dashboard/Sidebar';
import Header from './dashboard/Header';
import DashboardContent from './dashboard/DashboardContent';
import StoresPage from './stores/StoresPage';

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderContent = () => {
    switch (currentPage) {
      case 'stores':
        return <StoresPage />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-muted/30">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
