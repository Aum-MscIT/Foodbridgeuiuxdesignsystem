import { useNavigate } from 'react-router';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { ArrowLeft, Package, Users, CheckCircle, AlertCircle, TrendingUp, Bell } from 'lucide-react';

export function Notifications() {
  const navigate = useNavigate();

  const notifications = {
    all: [
      {
        id: 1,
        type: 'claim',
        icon: Package,
        title: 'New claim on your listing',
        message: 'Hope Shelter claimed your "Fresh Vegetables Mix" listing',
        time: '5 min ago',
        read: false,
        color: 'var(--foodbridge-green)',
      },
      {
        id: 2,
        type: 'delivery',
        icon: CheckCircle,
        title: 'Delivery completed',
        message: 'Your food donation was successfully delivered to Community Care Center',
        time: '1 hour ago',
        read: false,
        color: 'var(--foodbridge-blue)',
      },
      {
        id: 3,
        type: 'milestone',
        icon: TrendingUp,
        title: 'Milestone achieved!',
        message: 'Congratulations! You\'ve saved 100 meals this month',
        time: '2 hours ago',
        read: true,
        color: 'var(--foodbridge-yellow)',
      },
      {
        id: 4,
        type: 'volunteer',
        icon: Users,
        title: 'Volunteer assigned',
        message: 'John Smith will handle the pickup for your listing',
        time: '3 hours ago',
        read: true,
        color: 'var(--foodbridge-orange)',
      },
      {
        id: 5,
        type: 'alert',
        icon: AlertCircle,
        title: 'Listing expiring soon',
        message: 'Your "Bakery Items" listing will expire in 1 hour',
        time: '5 hours ago',
        read: true,
        color: 'var(--foodbridge-red)',
      },
    ],
  };

  const unreadCount = notifications.all.filter(n => !n.read).length;

  const markAllAsRead = () => {
    // Handle mark all as read
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="md:hidden bg-white border-b p-4">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl">Notifications</h1>
          {unreadCount > 0 && (
            <Badge style={{ backgroundColor: 'var(--foodbridge-green)', color: 'white' }}>
              {unreadCount}
            </Badge>
          )}
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl mb-1">Notifications</h1>
              <p className="text-gray-600">Stay updated with your FoodBridge activity</p>
            </div>
            <Button variant="outline" onClick={markAllAsRead}>
              Mark all as read
            </Button>
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="all">
              All ({notifications.all.length})
            </TabsTrigger>
            <TabsTrigger value="unread">
              Unread ({unreadCount})
            </TabsTrigger>
            <TabsTrigger value="claims">
              Claims
            </TabsTrigger>
            <TabsTrigger value="deliveries">
              Deliveries
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-3">
            {notifications.all.map((notification) => {
              const Icon = notification.icon;
              return (
                <Card
                  key={notification.id}
                  className={`border-2 cursor-pointer hover:shadow-md transition-all ${
                    !notification.read ? 'bg-green-50 border-green-200' : ''
                  }`}
                >
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: notification.color + '20' }}
                      >
                        <Icon className="h-6 w-6" style={{ color: notification.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-1">
                          <h4>{notification.title}</h4>
                          <span className="text-sm text-gray-500 flex-shrink-0 ml-2">
                            {notification.time}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">{notification.message}</p>
                      </div>
                      {!notification.read && (
                        <div
                          className="w-3 h-3 rounded-full flex-shrink-0"
                          style={{ backgroundColor: 'var(--foodbridge-green)' }}
                        />
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </TabsContent>

          <TabsContent value="unread" className="space-y-3">
            {notifications.all
              .filter(n => !n.read)
              .map((notification) => {
                const Icon = notification.icon;
                return (
                  <Card key={notification.id} className="border-2 bg-green-50 border-green-200">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: notification.color + '20' }}
                        >
                          <Icon className="h-6 w-6" style={{ color: notification.color }} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-1">
                            <h4>{notification.title}</h4>
                            <span className="text-sm text-gray-500">{notification.time}</span>
                          </div>
                          <p className="text-sm text-gray-600">{notification.message}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
          </TabsContent>

          <TabsContent value="claims" className="space-y-3">
            {notifications.all
              .filter(n => n.type === 'claim')
              .map((notification) => {
                const Icon = notification.icon;
                return (
                  <Card key={notification.id} className="border-2">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: notification.color + '20' }}
                        >
                          <Icon className="h-6 w-6" style={{ color: notification.color }} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-1">
                            <h4>{notification.title}</h4>
                            <span className="text-sm text-gray-500">{notification.time}</span>
                          </div>
                          <p className="text-sm text-gray-600">{notification.message}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
          </TabsContent>

          <TabsContent value="deliveries" className="space-y-3">
            {notifications.all
              .filter(n => n.type === 'delivery')
              .map((notification) => {
                const Icon = notification.icon;
                return (
                  <Card key={notification.id} className="border-2">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: notification.color + '20' }}
                        >
                          <Icon className="h-6 w-6" style={{ color: notification.color }} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-1">
                            <h4>{notification.title}</h4>
                            <span className="text-sm text-gray-500">{notification.time}</span>
                          </div>
                          <p className="text-sm text-gray-600">{notification.message}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
          </TabsContent>
        </Tabs>

        {/* Empty State */}
        {notifications.all.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <Bell className="h-12 w-12 mx-auto mb-4 text-gray-400" />
              <h3 className="mb-2">No Notifications</h3>
              <p className="text-gray-600">You're all caught up!</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
