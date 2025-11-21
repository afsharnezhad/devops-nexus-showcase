import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, CheckSquare, Calendar, TrendingUp } from 'lucide-react';

const DashboardHome = () => {
  const stats = [
    { name: 'Total Clients', value: '0', icon: Users, color: 'text-blue-500' },
    { name: 'Active Tasks', value: '0', icon: CheckSquare, color: 'text-green-500' },
    { name: 'Upcoming Events', value: '0', icon: Calendar, color: 'text-purple-500' },
    { name: 'Completed', value: '0', icon: TrendingUp, color: 'text-orange-500' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to your dashboard</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.name}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.name}
                </CardTitle>
                <Icon className={cn('h-4 w-4', stat.color)} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Getting Started</CardTitle>
          <CardDescription>
            Start managing your projects efficiently
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <CheckSquare className="h-4 w-4 text-primary" />
              <span>Add your first client</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckSquare className="h-4 w-4 text-primary" />
              <span>Create a task roadmap</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckSquare className="h-4 w-4 text-primary" />
              <span>Schedule calendar events</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckSquare className="h-4 w-4 text-primary" />
              <span>Configure settings</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default DashboardHome;
