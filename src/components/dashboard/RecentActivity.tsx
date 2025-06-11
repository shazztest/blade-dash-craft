
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const activities = [
  {
    user: 'Alice Johnson',
    action: 'placed a new order',
    time: '2 minutes ago',
    status: 'success',
  },
  {
    user: 'Bob Smith',
    action: 'updated profile',
    time: '5 minutes ago',
    status: 'info',
  },
  {
    user: 'Carol Williams',
    action: 'cancelled order #1234',
    time: '10 minutes ago',
    status: 'warning',
  },
  {
    user: 'David Brown',
    action: 'left a review',
    time: '15 minutes ago',
    status: 'success',
  },
  {
    user: 'Eva Davis',
    action: 'requested refund',
    time: '20 minutes ago',
    status: 'destructive',
  },
];

const RecentActivity = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-center space-x-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg" alt={activity.user} />
                <AvatarFallback>{activity.user.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">{activity.user}</p>
                <p className="text-xs text-muted-foreground">{activity.action}</p>
              </div>
              <div className="text-right">
                <Badge variant={activity.status as any} className="text-xs">
                  {activity.status}
                </Badge>
                <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
