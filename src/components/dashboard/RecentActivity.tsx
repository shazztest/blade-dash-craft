
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const activities = [
  {
    user: 'Pizza Palace',
    action: 'published new offer',
    offer: '20% off pizzas',
    time: '2 minutes ago',
    status: 'success',
    type: 'store'
  },
  {
    user: 'John Smith',
    action: 'claimed offer',
    offer: 'Free coffee at Cafe Central',
    time: '5 minutes ago',
    status: 'info',
    type: 'user'
  },
  {
    user: 'Fashion Hub',
    action: 'registered as new store',
    offer: '',
    time: '10 minutes ago',
    status: 'success',
    type: 'store'
  },
  {
    user: 'Maria Garcia',
    action: 'claimed offer',
    offer: '15% off electronics',
    time: '15 minutes ago',
    status: 'info',
    type: 'user'
  },
  {
    user: 'Book Store',
    action: 'offer expired',
    offer: 'Buy 2 get 1 free',
    time: '20 minutes ago',
    status: 'warning',
    type: 'store'
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
                <p className="text-xs text-muted-foreground">
                  {activity.action} {activity.offer && `- ${activity.offer}`}
                </p>
              </div>
              <div className="text-right">
                <Badge 
                  variant={activity.status as any} 
                  className="text-xs"
                >
                  {activity.type}
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
