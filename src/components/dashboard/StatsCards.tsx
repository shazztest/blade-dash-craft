
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, TrendingDown, Users, Store, Gift, Target } from 'lucide-react';

const stats = [
  {
    title: 'Total Stores',
    value: '1,247',
    change: '+12.3%',
    changeType: 'positive',
    icon: Store,
  },
  {
    title: 'Active Offers',
    value: '3,456',
    change: '+25.1%',
    changeType: 'positive',
    icon: Gift,
  },
  {
    title: 'Total Users',
    value: '12,890',
    change: '+8.7%',
    changeType: 'positive',
    icon: Users,
  },
  {
    title: 'Claims Today',
    value: '892',
    change: '-2.4%',
    changeType: 'negative',
    icon: Target,
  },
];

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                <p className="text-2xl font-bold text-foreground mt-2">{stat.value}</p>
                <div className="flex items-center mt-2">
                  {stat.changeType === 'positive' ? (
                    <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                  )}
                  <span className={`text-sm font-medium ${
                    stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change}
                  </span>
                  <span className="text-sm text-muted-foreground ml-1">from last month</span>
                </div>
              </div>
              <div className={`p-3 rounded-full ${
                stat.changeType === 'positive' ? 'bg-green-50' : 'bg-red-50'
              }`}>
                <stat.icon className={`h-6 w-6 ${
                  stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                }`} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatsCards;
