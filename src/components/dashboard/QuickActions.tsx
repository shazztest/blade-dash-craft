
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, FileText, Users, Package } from 'lucide-react';

const actions = [
  { title: 'Add New User', icon: Users, color: 'bg-blue-500' },
  { title: 'Create Product', icon: Package, color: 'bg-green-500' },
  { title: 'Generate Report', icon: FileText, color: 'bg-purple-500' },
  { title: 'New Order', icon: Plus, color: 'bg-orange-500' },
];

const QuickActions = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              className="h-20 flex flex-col items-center justify-center gap-2 hover:bg-accent"
            >
              <div className={`p-2 rounded-full ${action.color}`}>
                <action.icon className="h-4 w-4 text-white" />
              </div>
              <span className="text-xs text-center">{action.title}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;
