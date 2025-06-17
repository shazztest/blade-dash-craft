
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { BarChart3, Users, Store, Gift, Target, TrendingUp, Calendar, Eye } from 'lucide-react';

const PlatformStats = () => {
  const [isOpen, setIsOpen] = useState(false);

  const stats = [
    { title: 'Total Revenue', value: '$45,892', change: '+12.5%', icon: TrendingUp },
    { title: 'Monthly Users', value: '12,890', change: '+8.7%', icon: Users },
    { title: 'Active Stores', value: '1,247', change: '+15.2%', icon: Store },
    { title: 'Offers Created', value: '3,456', change: '+25.1%', icon: Gift },
    { title: 'Claims Processed', value: '8,923', change: '+18.9%', icon: Target },
    { title: 'Page Views', value: '156,432', change: '+22.3%', icon: Eye },
  ];

  const chartData = [
    { month: 'Jan', revenue: 12000, users: 8500, stores: 1100 },
    { month: 'Feb', revenue: 15000, users: 9200, stores: 1150 },
    { month: 'Mar', revenue: 18000, users: 10100, stores: 1180 },
    { month: 'Apr', revenue: 22000, users: 11400, stores: 1210 },
    { month: 'May', revenue: 28000, users: 12200, stores: 1235 },
    { month: 'Jun', revenue: 32000, users: 12890, stores: 1247 },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className="bg-accent rounded-lg p-4 cursor-pointer hover:bg-accent/80 transition-colors">
          <h3 className="text-sm font-medium text-foreground">Platform Stats</h3>
          <p className="text-xs text-muted-foreground mt-1">
            Monitor your offers platform performance and growth metrics.
          </p>
          <Button className="mt-3 w-full bg-primary text-primary-foreground text-xs py-2 px-3 rounded-md hover:bg-primary/90 transition-colors">
            View Analytics
          </Button>
        </div>
      </DialogTrigger>
      
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Platform Analytics Dashboard
          </DialogTitle>
          <DialogDescription>
            Comprehensive overview of your offers platform performance and growth metrics.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                      <p className="text-xl font-bold text-foreground mt-1">{stat.value}</p>
                      <div className="flex items-center mt-1">
                        <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                        <span className="text-xs font-medium text-green-600">{stat.change}</span>
                      </div>
                    </div>
                    <div className="p-2 rounded-full bg-primary/10">
                      <stat.icon className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Growth Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Growth Trends (Last 6 Months)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {chartData.map((data, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b last:border-b-0">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{data.month}</span>
                    </div>
                    <div className="flex gap-6 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span>Revenue: ${data.revenue.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span>Users: {data.users.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <span>Stores: {data.stores.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Insights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Top Performing Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Food & Dining</span>
                    <span className="font-semibold">35%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Fashion & Retail</span>
                    <span className="font-semibold">28%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Entertainment</span>
                    <span className="font-semibold">22%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Health & Beauty</span>
                    <span className="font-semibold">15%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>New store approved: "Bella's Bistro"</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>1,247 offers claimed today</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Store registration spike: +15% this week</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Platform uptime: 99.9%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PlatformStats;
