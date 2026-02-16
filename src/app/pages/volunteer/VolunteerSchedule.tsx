import { useState } from 'react';
import { Layout } from '../../components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Calendar } from '../../components/ui/calendar';
import { Switch } from '../../components/ui/switch';
import { Label } from '../../components/ui/label';
import { Trophy, Award, Clock, Package, TrendingUp, Star } from 'lucide-react';

export function VolunteerSchedule() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [availability, setAvailability] = useState({
    morning: true,
    afternoon: true,
    evening: false,
  });

  const stats = [
    { label: 'Total Deliveries', value: '47', icon: Package, color: 'var(--foodbridge-blue)' },
    { label: 'Hours Volunteered', value: '32', icon: Clock, color: 'var(--foodbridge-green)' },
    { label: 'Rating', value: '4.9', icon: Star, color: 'var(--foodbridge-yellow)' },
    { label: 'Leaderboard Rank', value: '#12', icon: Trophy, color: 'var(--foodbridge-orange)' },
  ];

  const upcomingShifts = [
    {
      id: 1,
      date: 'Today',
      time: '2:00 PM - 6:00 PM',
      deliveries: 3,
      distance: '12.5 km',
      status: 'confirmed',
    },
    {
      id: 2,
      date: 'Tomorrow',
      time: '10:00 AM - 2:00 PM',
      deliveries: 5,
      distance: '18.2 km',
      status: 'confirmed',
    },
    {
      id: 3,
      date: 'Feb 17',
      time: '3:00 PM - 7:00 PM',
      deliveries: 4,
      distance: '15.8 km',
      status: 'pending',
    },
  ];

  const achievements = [
    { title: 'First Delivery', icon: '🎯', unlocked: true, progress: 100 },
    { title: 'Speed Demon', icon: '⚡', unlocked: true, progress: 100 },
    { title: '50 Deliveries', icon: '📦', unlocked: false, progress: 94 },
    { title: '5-Star Hero', icon: '⭐', unlocked: true, progress: 100 },
  ];

  return (
    <Layout role="volunteer">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl mb-1">Volunteer Dashboard</h1>
          <p className="text-gray-600">Manage your schedule and track your impact</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-2xl mb-1">{stat.value}</p>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                    </div>
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: stat.color + '20' }}>
                      <Icon className="h-5 w-5" style={{ color: stat.color }} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Calendar & Availability */}
          <div className="md:col-span-2 space-y-6">
            {/* Upcoming Shifts */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Shifts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {upcomingShifts.map((shift) => (
                    <div key={shift.id} className="flex items-center gap-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--foodbridge-blue)' + '20' }}>
                        <Clock className="h-8 w-8" style={{ color: 'var(--foodbridge-blue)' }} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4>{shift.date}</h4>
                          <Badge style={{
                            backgroundColor: shift.status === 'confirmed' ? 'var(--foodbridge-green)' + '20' : 'var(--foodbridge-yellow)' + '20',
                            color: shift.status === 'confirmed' ? 'var(--foodbridge-green)' : 'var(--foodbridge-yellow)',
                          }}>
                            {shift.status}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span>{shift.time}</span>
                          <span>•</span>
                          <span>{shift.deliveries} deliveries</span>
                          <span>•</span>
                          <span>{shift.distance}</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        View Route
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" style={{ color: 'var(--foodbridge-yellow)' }} />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {achievements.map((achievement) => (
                    <div
                      key={achievement.title}
                      className={`p-4 border-2 rounded-lg ${achievement.unlocked ? 'border-green-300 bg-green-50' : 'border-gray-200'}`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="text-3xl">{achievement.icon}</div>
                        <div className="flex-1">
                          <h4 className="text-sm">{achievement.title}</h4>
                          {!achievement.unlocked && (
                            <p className="text-xs text-gray-600">{achievement.progress}%</p>
                          )}
                        </div>
                        {achievement.unlocked && (
                          <Badge style={{ backgroundColor: 'var(--foodbridge-yellow)', color: 'white' }}>
                            ✓
                          </Badge>
                        )}
                      </div>
                      {!achievement.unlocked && (
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full"
                            style={{ width: `${achievement.progress}%`, backgroundColor: 'var(--foodbridge-blue)' }}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Calendar & Settings */}
          <div className="space-y-6">
            {/* Calendar */}
            <Card>
              <CardHeader>
                <CardTitle>Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>

            {/* Availability Settings */}
            <Card>
              <CardHeader>
                <CardTitle>Availability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="morning">Morning (6am-12pm)</Label>
                  <Switch
                    id="morning"
                    checked={availability.morning}
                    onCheckedChange={(checked) => setAvailability({ ...availability, morning: checked })}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="afternoon">Afternoon (12pm-6pm)</Label>
                  <Switch
                    id="afternoon"
                    checked={availability.afternoon}
                    onCheckedChange={(checked) => setAvailability({ ...availability, afternoon: checked })}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="evening">Evening (6pm-10pm)</Label>
                  <Switch
                    id="evening"
                    checked={availability.evening}
                    onCheckedChange={(checked) => setAvailability({ ...availability, evening: checked })}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Leaderboard Teaser */}
            <Card style={{ backgroundColor: 'var(--foodbridge-blue)' + '10' }}>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <Trophy className="h-5 w-5 mt-1" style={{ color: 'var(--foodbridge-blue)' }} />
                  <div>
                    <h4 className="mb-1">Leaderboard</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      You're ranked <strong>#12</strong> this month! Complete 3 more deliveries to reach the top 10.
                    </p>
                    <Button size="sm" style={{ backgroundColor: 'var(--foodbridge-blue)', color: 'white' }}>
                      View Leaderboard
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
