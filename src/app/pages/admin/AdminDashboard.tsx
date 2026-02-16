import { Layout } from '../../components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Users, Package, Truck, TrendingUp, AlertTriangle, CheckCircle, Clock, Activity } from 'lucide-react';
import { AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export function AdminDashboard() {
  const stats = [
    { label: 'Total Users', value: '15,234', change: '+12.5%', icon: Users, color: 'var(--foodbridge-blue)' },
    { label: 'Active Listings', value: '342', change: '+8.3%', icon: Package, color: 'var(--foodbridge-green)' },
    { label: 'Active Volunteers', value: '1,248', change: '+15.2%', icon: Truck, color: 'var(--foodbridge-orange)' },
    { label: 'Meals Saved (MTD)', value: '50,234', change: '+22.1%', icon: TrendingUp, color: 'var(--foodbridge-yellow)' },
  ];

  const monthlyData = [
    { month: 'Aug', donors: 850, recipients: 1200, volunteers: 650, meals: 18500 },
    { month: 'Sep', donors: 920, recipients: 1350, volunteers: 720, meals: 22300 },
    { month: 'Oct', donors: 1050, recipients: 1500, volunteers: 850, meals: 28700 },
    { month: 'Nov', donors: 1180, recipients: 1680, volunteers: 950, meals: 35200 },
    { month: 'Dec', donors: 1350, recipients: 1900, volunteers: 1100, meals: 42800 },
    { month: 'Jan', donors: 1520, recipients: 2150, volunteers: 1248, meals: 50234 },
  ];

  const categoryData = [
    { name: 'Vegetables', value: 12500, color: 'var(--foodbridge-green)' },
    { name: 'Prepared Food', value: 15800, color: 'var(--foodbridge-orange)' },
    { name: 'Bakery', value: 9200, color: 'var(--foodbridge-yellow)' },
    { name: 'Dairy', value: 7300, color: 'var(--foodbridge-blue)' },
    { name: 'Other', value: 5434, color: '#9CA3AF' },
  ];

  const recentActivity = [
    { type: 'user', action: 'New donor registered', user: 'Green Market', time: '5 min ago', status: 'pending' },
    { type: 'listing', action: 'Flagged listing reported', user: 'Fresh Produce (ID: 1234)', time: '12 min ago', status: 'review' },
    { type: 'delivery', action: 'Delivery completed', user: 'Mission #5678', time: '23 min ago', status: 'success' },
    { type: 'user', action: 'New volunteer verified', user: 'Sarah Johnson', time: '35 min ago', status: 'success' },
    { type: 'alert', action: 'High traffic in Downtown', user: 'System Alert', time: '1 hour ago', status: 'warning' },
  ];

  const pendingActions = [
    { id: 1, type: 'verification', title: 'User Verification Pending', count: 23, priority: 'high' },
    { id: 2, type: 'moderation', title: 'Flagged Content to Review', count: 7, priority: 'medium' },
    { id: 3, type: 'support', title: 'Support Tickets Open', count: 15, priority: 'medium' },
    { id: 4, type: 'system', title: 'System Health Checks', count: 2, priority: 'low' },
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'user': return Users;
      case 'listing': return Package;
      case 'delivery': return Truck;
      case 'alert': return AlertTriangle;
      default: return Activity;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success': return 'var(--foodbridge-green)';
      case 'pending': return 'var(--foodbridge-yellow)';
      case 'review': return 'var(--foodbridge-orange)';
      case 'warning': return 'var(--foodbridge-red)';
      default: return '#6B7280';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'var(--foodbridge-red)';
      case 'medium': return 'var(--foodbridge-yellow)';
      case 'low': return 'var(--foodbridge-blue)';
      default: return '#6B7280';
    }
  };

  return (
    <Layout role="admin">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl mb-1">Admin Dashboard</h1>
          <p className="text-gray-600">Monitor platform health and manage operations</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-2">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: stat.color + '20' }}>
                      <Icon className="h-5 w-5" style={{ color: stat.color }} />
                    </div>
                    <Badge style={{ backgroundColor: 'var(--foodbridge-green)' + '20', color: 'var(--foodbridge-green)' }}>
                      {stat.change}
                    </Badge>
                  </div>
                  <p className="text-2xl mb-1">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Pending Actions */}
        <div className="grid md:grid-cols-4 gap-4 mb-6">
          {pendingActions.map((action) => (
            <Card key={action.id} className="border-2 hover:shadow-lg transition-all cursor-pointer">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-2">
                  <Badge style={{ backgroundColor: getPriorityColor(action.priority) + '20', color: getPriorityColor(action.priority) }}>
                    {action.priority}
                  </Badge>
                  <span className="text-2xl">{action.count}</span>
                </div>
                <p className="text-sm">{action.title}</p>
                <Button size="sm" variant="link" className="p-0 h-auto mt-2" style={{ color: 'var(--foodbridge-blue)' }}>
                  Review →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* User Growth */}
          <Card>
            <CardHeader>
              <CardTitle>User Growth Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area type="monotone" dataKey="donors" stackId="1" stroke="var(--foodbridge-green)" fill="var(--foodbridge-green)" fillOpacity={0.6} />
                  <Area type="monotone" dataKey="recipients" stackId="1" stroke="var(--foodbridge-orange)" fill="var(--foodbridge-orange)" fillOpacity={0.6} />
                  <Area type="monotone" dataKey="volunteers" stackId="1" stroke="var(--foodbridge-blue)" fill="var(--foodbridge-blue)" fillOpacity={0.6} />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Meals Saved */}
          <Card>
            <CardHeader>
              <CardTitle>Meals Saved Monthly</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="meals" fill="var(--foodbridge-green)" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Food Categories Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Food Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentActivity.map((activity, index) => {
                  const Icon = getActivityIcon(activity.type);
                  return (
                    <div key={index} className="flex items-start gap-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: getStatusColor(activity.status) + '20' }}>
                        <Icon className="h-4 w-4" style={{ color: getStatusColor(activity.status) }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm mb-1">{activity.action}</p>
                        <p className="text-sm text-gray-600 truncate">{activity.user}</p>
                      </div>
                      <div className="text-xs text-gray-500 flex-shrink-0">{activity.time}</div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-auto py-4 flex-col gap-2">
                <Users className="h-6 w-6" />
                <span>Manage Users</span>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex-col gap-2">
                <Package className="h-6 w-6" />
                <span>View Listings</span>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex-col gap-2">
                <AlertTriangle className="h-6 w-6" />
                <span>Reports & Flags</span>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex-col gap-2">
                <Activity className="h-6 w-6" />
                <span>System Logs</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
