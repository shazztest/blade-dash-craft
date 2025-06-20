
import React from 'react';
import StatsCards from './StatsCards';
import ChartSection from './ChartSection';
import RecentActivity from './RecentActivity';
import QuickActions from './QuickActions';
import OffersOverview from './OffersOverview';
import StoreManagement from './StoreManagement';

const DashboardContent = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Offers Platform Dashboard</h1>
        <p className="text-muted-foreground mt-2">Manage stores, offers, and user claims from your centralized dashboard.</p>
      </div>
      
      <StatsCards />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2">
          <ChartSection />
        </div>
        <div className="space-y-8">
          <QuickActions />
          <RecentActivity />
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-8">
        <OffersOverview />
        <StoreManagement />
      </div>
    </div>
  );
};

export default DashboardContent;
