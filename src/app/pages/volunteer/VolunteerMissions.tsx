import { Layout } from '../../components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { CheckCircle, Clock, Package, MapPin, Star, Trophy } from 'lucide-react';

export function VolunteerMissions() {
  const activeMissions = [
    {
      id: 1,
      title: 'Afternoon Food Rescue',
      pickups: 2,
      deliveries: 2,
      distance: '8.5 km',
      time: '2:00 PM - 5:00 PM',
      status: 'in-progress',
      progress: 50,
    },
  ];

  const availableMissions = [
    {
      id: 2,
      title: 'Morning Bakery Run',
      pickups: 1,
      deliveries: 3,
      distance: '6.2 km',
      time: 'Tomorrow 8:00 AM - 11:00 AM',
      estimatedDuration: '45 min',
      points: 50,
    },
    {
      id: 3,
      title: 'Downtown Food Loop',
      pickups: 3,
      deliveries: 4,
      distance: '15.3 km',
      time: 'Tomorrow 1:00 PM - 4:00 PM',
      estimatedDuration: '90 min',
      points: 120,
    },
    {
      id: 4,
      title: 'Evening Rescue Mission',
      pickups: 2,
      deliveries: 2,
      distance: '9.8 km',
      time: 'Tomorrow 6:00 PM - 8:00 PM',
      estimatedDuration: '60 min',
      points: 80,
    },
  ];

  const completedMissions = [
    {
      id: 5,
      title: 'Morning Fresh Produce',
      completedAt: 'Today, 11:30 AM',
      pickups: 2,
      deliveries: 3,
      distance: '12.5 km',
      duration: '52 min',
      rating: 5,
      points: 100,
    },
    {
      id: 6,
      title: 'Lunch Rush Delivery',
      completedAt: 'Yesterday, 2:45 PM',
      pickups: 3,
      deliveries: 3,
      distance: '18.2 km',
      duration: '78 min',
      rating: 5,
      points: 150,
    },
    {
      id: 7,
      title: 'Weekend Bakery Special',
      completedAt: '2 days ago',
      pickups: 1,
      deliveries: 4,
      distance: '14.8 km',
      duration: '65 min',
      rating: 4,
      points: 120,
    },
  ];

  const leaderboard = [
    { rank: 1, name: 'Sarah Johnson', deliveries: 89, points: 4250, avatar: '👩' },
    { rank: 2, name: 'Mike Chen', deliveries: 82, points: 3980, avatar: '👨' },
    { rank: 3, name: 'Emma Davis', deliveries: 76, points: 3650, avatar: '👩' },
    { rank: 4, name: 'James Wilson', deliveries: 71, points: 3420, avatar: '👨' },
    { rank: 5, name: 'Lisa Anderson', deliveries: 68, points: 3280, avatar: '👩' },
    { rank: 12, name: 'You', deliveries: 47, points: 2340, avatar: '⭐', isCurrentUser: true },
  ];

  return (
    <Layout role="volunteer">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl mb-1">Missions</h1>
          <p className="text-gray-600">Accept missions and climb the leaderboard</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Missions Tabs */}
          <div className="md:col-span-2">
            <Tabs defaultValue="available" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="active">
                  Active ({activeMissions.length})
                </TabsTrigger>
                <TabsTrigger value="available">
                  Available ({availableMissions.length})
                </TabsTrigger>
                <TabsTrigger value="completed">
                  Completed ({completedMissions.length})
                </TabsTrigger>
              </TabsList>

              {/* Active Missions */}
              <TabsContent value="active" className="space-y-4">
                {activeMissions.map((mission) => (
                  <Card key={mission.id} className="border-2" style={{ borderColor: 'var(--foodbridge-blue)' }}>
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="mb-1">{mission.title}</h3>
                          <Badge style={{ backgroundColor: 'var(--foodbridge-blue)' + '20', color: 'var(--foodbridge-blue)' }}>
                            In Progress
                          </Badge>
                        </div>
                        <span className="text-2xl">{mission.progress}%</span>
                      </div>

                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-4">
                        <div
                          className="h-full rounded-full"
                          style={{ width: `${mission.progress}%`, backgroundColor: 'var(--foodbridge-blue)' }}
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                        <div>
                          <p className="text-gray-600 mb-1">Stops</p>
                          <p>{mission.pickups} pickups, {mission.deliveries} deliveries</p>
                        </div>
                        <div>
                          <p className="text-gray-600 mb-1">Distance</p>
                          <p>{mission.distance}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 mb-1">Time Window</p>
                          <p>{mission.time}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 mb-1">Status</p>
                          <p className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            On schedule
                          </p>
                        </div>
                      </div>

                      <Button className="w-full" style={{ backgroundColor: 'var(--foodbridge-blue)', color: 'white' }}>
                        Continue Mission
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              {/* Available Missions */}
              <TabsContent value="available" className="space-y-4">
                {availableMissions.map((mission) => (
                  <Card key={mission.id} className="border hover:shadow-lg transition-all">
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="mb-1">{mission.title}</h3>
                          <p className="text-sm text-gray-600">{mission.time}</p>
                        </div>
                        <Badge style={{ backgroundColor: 'var(--foodbridge-yellow)' + '20', color: 'var(--foodbridge-yellow)' }}>
                          +{mission.points} pts
                        </Badge>
                      </div>

                      <div className="grid grid-cols-3 gap-4 text-sm mb-4">
                        <div>
                          <p className="text-gray-600 mb-1">Pickups</p>
                          <p className="flex items-center gap-1">
                            <Package className="h-3 w-3" />
                            {mission.pickups}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-600 mb-1">Deliveries</p>
                          <p className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {mission.deliveries}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-600 mb-1">Duration</p>
                          <p className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {mission.estimatedDuration}
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button variant="outline" className="flex-1">
                          View Details
                        </Button>
                        <Button className="flex-1" style={{ backgroundColor: 'var(--foodbridge-green)', color: 'white' }}>
                          Accept Mission
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              {/* Completed Missions */}
              <TabsContent value="completed" className="space-y-4">
                {completedMissions.map((mission) => (
                  <Card key={mission.id} className="border">
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="mb-1">{mission.title}</h3>
                          <p className="text-sm text-gray-600">{mission.completedAt}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <CheckCircle className="h-5 w-5" style={{ color: 'var(--foodbridge-green)' }} />
                          <Badge style={{ backgroundColor: 'var(--foodbridge-green)' + '20', color: 'var(--foodbridge-green)' }}>
                            +{mission.points}
                          </Badge>
                        </div>
                      </div>

                      <div className="grid grid-cols-4 gap-3 text-sm mb-4">
                        <div>
                          <p className="text-gray-600 mb-1 text-xs">Pickups</p>
                          <p>{mission.pickups}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 mb-1 text-xs">Deliveries</p>
                          <p>{mission.deliveries}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 mb-1 text-xs">Distance</p>
                          <p>{mission.distance}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 mb-1 text-xs">Duration</p>
                          <p>{mission.duration}</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                        <span className="text-sm">Your rating:</span>
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className="h-4 w-4"
                              fill={star <= mission.rating ? '#FCD34D' : 'none'}
                              stroke={star <= mission.rating ? '#FCD34D' : '#9CA3AF'}
                            />
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>

          {/* Leaderboard */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5" style={{ color: 'var(--foodbridge-yellow)' }} />
                  Leaderboard
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {leaderboard.map((user) => (
                    <div
                      key={user.rank}
                      className={`flex items-center gap-3 p-3 rounded-lg ${
                        user.isCurrentUser
                          ? 'bg-blue-50 border-2 border-blue-300'
                          : user.rank <= 3
                          ? 'bg-yellow-50'
                          : 'bg-gray-50'
                      }`}
                    >
                      <div className="text-2xl w-8 flex-shrink-0">
                        {user.rank <= 3 ? (
                          user.rank === 1 ? '🥇' : user.rank === 2 ? '🥈' : '🥉'
                        ) : (
                          <span className="text-sm text-gray-500">#{user.rank}</span>
                        )}
                      </div>
                      <div className="text-2xl">{user.avatar}</div>
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm truncate ${user.isCurrentUser ? 'font-bold' : ''}`}>
                          {user.name}
                        </p>
                        <p className="text-xs text-gray-600">{user.deliveries} deliveries</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm">{user.points}</p>
                        <p className="text-xs text-gray-600">pts</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm text-gray-700">
                    💡 Complete 3 more missions to reach the top 10!
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Monthly Challenge */}
            <Card className="mt-4" style={{ backgroundColor: 'var(--foodbridge-green)' + '10' }}>
              <CardHeader>
                <CardTitle className="text-base">Monthly Challenge</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <div className="flex items-center justify-between mb-2 text-sm">
                      <span>50 Deliveries Goal</span>
                      <span className="font-medium">47/50</span>
                    </div>
                    <div className="h-2 bg-white rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{ width: '94%', backgroundColor: 'var(--foodbridge-green)' }}
                      />
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">
                    🎁 Complete to earn <strong>500 bonus points</strong> and a special badge!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
