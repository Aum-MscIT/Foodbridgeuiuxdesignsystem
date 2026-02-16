import { Layout } from '../../components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { TrendingUp, Users, Leaf, Award, Calendar } from 'lucide-react';
import { AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export function DonorImpact() {
  const overallStats = [
    { label: 'Total Meals Saved', value: '2,340', icon: Users, color: 'var(--foodbridge-green)' },
    { label: 'Food Rescued', value: '1,250 kg', icon: TrendingUp, color: 'var(--foodbridge-orange)' },
    { label: 'CO₂ Prevented', value: '145 kg', icon: Leaf, color: 'var(--foodbridge-blue)' },
    { label: 'Donation Days', value: '89', icon: Calendar, color: 'var(--foodbridge-yellow)' },
  ];

  const monthlyData = [
    { month: 'Aug', meals: 180, weight: 95 },
    { month: 'Sep', meals: 220, weight: 115 },
    { month: 'Oct', meals: 260, weight: 135 },
    { month: 'Nov', meals: 310, weight: 160 },
    { month: 'Dec', meals: 380, weight: 195 },
    { month: 'Jan', meals: 420, weight: 220 },
    { month: 'Feb', meals: 570, weight: 330 },
  ];

  const categoryData = [
    { name: 'Vegetables', value: 380, color: 'var(--foodbridge-green)' },
    { name: 'Prepared Food', value: 420, color: 'var(--foodbridge-orange)' },
    { name: 'Bakery', value: 290, color: 'var(--foodbridge-yellow)' },
    { name: 'Dairy', value: 180, color: 'var(--foodbridge-blue)' },
    { name: 'Other', value: 130, color: '#9CA3AF' },
  ];

  const achievements = [
    { title: 'First Donation', description: 'Made your first food listing', date: 'Nov 15, 2025', unlocked: true },
    { title: 'Eco Warrior', description: 'Prevented 100kg of CO₂ emissions', date: 'Jan 20, 2026', unlocked: true },
    { title: 'Century Club', description: 'Saved 100+ meals', date: 'Dec 5, 2025', unlocked: true },
    { title: 'Consistency Star', description: 'Donated for 30 consecutive days', date: 'Feb 1, 2026', unlocked: true },
    { title: 'Community Hero', description: 'Reach 5,000 meals saved', date: 'Not unlocked', unlocked: false },
    { title: 'Platinum Donor', description: 'One year of active donations', date: 'Not unlocked', unlocked: false },
  ];

  return (
    <Layout role="donor">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl mb-1">Impact Dashboard</h1>
          <p className="text-gray-600">Track your contribution to reducing food waste and helping the community</p>
        </div>

        {/* Overall Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {overallStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label} className="border-2">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: stat.color + '20' }}>
                      <Icon className="h-6 w-6" style={{ color: stat.color }} />
                    </div>
                    <p className="text-2xl mb-1">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Meals Saved Trend */}
          <Card>
            <CardHeader>
              <CardTitle>Meals Saved Over Time</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="meals" stroke="var(--foodbridge-green)" fill="var(--foodbridge-green)" fillOpacity={0.3} />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Food Weight Donated */}
          <Card>
            <CardHeader>
              <CardTitle>Food Weight Donated (kg)</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="weight" fill="var(--foodbridge-orange)" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Category Breakdown and Environmental Impact */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {/* Category Breakdown */}
          <Card className="md:col-span-1">
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

          {/* Environmental Impact */}
          <Card className="md:col-span-2" style={{ backgroundColor: 'var(--foodbridge-green)' + '10' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Leaf className="h-5 w-5" style={{ color: 'var(--foodbridge-green)' }} />
                Environmental Impact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">CO₂ Emissions Prevented</span>
                    <span className="font-medium">145 kg</span>
                  </div>
                  <div className="h-3 bg-white/50 rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: '58%', backgroundColor: 'var(--foodbridge-green)' }} />
                  </div>
                  <p className="text-xs text-gray-600 mt-1">Target: 250 kg by March</p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">Water Saved</span>
                    <span className="font-medium">8,400 liters</span>
                  </div>
                  <div className="h-3 bg-white/50 rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: '67%', backgroundColor: 'var(--foodbridge-blue)' }} />
                  </div>
                  <p className="text-xs text-gray-600 mt-1">Target: 12,500 liters by March</p>
                </div>

                <div className="pt-4 border-t">
                  <p className="text-sm text-gray-700">
                    🌱 Your contributions are equivalent to planting <strong>45 trees</strong> or taking a car off the road for <strong>12 days</strong>!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Achievements & Badges */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5" style={{ color: 'var(--foodbridge-yellow)' }} />
              Achievements & Badges
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              {achievements.map((achievement) => (
                <div
                  key={achievement.title}
                  className={`p-4 border-2 rounded-lg ${achievement.unlocked ? 'border-green-300 bg-green-50' : 'border-gray-200 bg-gray-50 opacity-60'}`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${achievement.unlocked ? 'bg-yellow-400' : 'bg-gray-300'}`}>
                      <Award className={`h-5 w-5 ${achievement.unlocked ? 'text-white' : 'text-gray-500'}`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="mb-1">{achievement.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">{achievement.description}</p>
                      <Badge variant={achievement.unlocked ? 'default' : 'outline'} className="text-xs">
                        {achievement.unlocked ? `Unlocked: ${achievement.date}` : 'Locked'}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
