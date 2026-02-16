import { Layout } from '../../components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Plus, Package, Clock, CheckCircle, TrendingUp, Users, Leaf } from 'lucide-react';
import { Link } from 'react-router';

export function DonorDashboard() {
  const stats = [
    { label: 'Active Listings', value: '12', icon: Package, color: 'var(--foodbridge-green)' },
    { label: 'Pending Pickup', value: '8', icon: Clock, color: 'var(--foodbridge-yellow)' },
    { label: 'Completed', value: '156', icon: CheckCircle, color: 'var(--foodbridge-blue)' },
    { label: 'Meals Saved', value: '2,340', icon: Users, color: 'var(--foodbridge-orange)' },
  ];

  const activeListings = [
    {
      id: 1,
      title: 'Fresh Vegetables Mix',
      quantity: '15 kg',
      category: 'Vegetables',
      expiry: '2 hours',
      status: 'available',
      claims: 3,
    },
    {
      id: 2,
      title: 'Prepared Sandwiches',
      quantity: '50 units',
      category: 'Prepared Food',
      expiry: '4 hours',
      status: 'claimed',
      claims: 1,
    },
    {
      id: 3,
      title: 'Bakery Items',
      quantity: '25 units',
      category: 'Bakery',
      expiry: '6 hours',
      status: 'available',
      claims: 5,
    },
    {
      id: 4,
      title: 'Dairy Products',
      quantity: '20 liters',
      category: 'Dairy',
      expiry: '1 hour',
      status: 'picked-up',
      claims: 1,
    },
  ];

  const recentActivity = [
    { action: 'Food picked up', item: 'Fresh Bread (30 units)', time: '10 minutes ago' },
    { action: 'New claim received', item: 'Vegetables Mix (15 kg)', time: '25 minutes ago' },
    { action: 'Listing expired', item: 'Prepared Meals (40 units)', time: '1 hour ago' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'var(--foodbridge-green)';
      case 'claimed': return 'var(--foodbridge-yellow)';
      case 'picked-up': return 'var(--foodbridge-blue)';
      default: return '#6B7280';
    }
  };

  return (
    <Layout role="donor">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl mb-1">Donor Dashboard</h1>
            <p className="text-gray-600">Manage your food donations and track impact</p>
          </div>
          <Link to="/donor/create">
            <Button style={{ backgroundColor: 'var(--foodbridge-orange)', color: 'white' }} className="gap-2">
              <Plus className="h-5 w-5" />
              Create Listing
            </Button>
          </Link>
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

        {/* Impact Banner */}
        <Card className="mb-6 border-2" style={{ borderColor: 'var(--foodbridge-green)' }}>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--foodbridge-green)' }}>
                  <Leaf className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="mb-1">Environmental Impact</h3>
                  <p className="text-sm text-gray-600">You've helped reduce 145 kg of CO₂ emissions this month!</p>
                </div>
              </div>
              <Link to="/donor/impact">
                <Button variant="outline" style={{ borderColor: 'var(--foodbridge-green)', color: 'var(--foodbridge-green)' }}>
                  View Details
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Active Listings */}
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Active Listings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activeListings.map((listing) => (
                    <div key={listing.id} className="flex items-center gap-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--foodbridge-green)' + '20' }}>
                        <Package className="h-8 w-8" style={{ color: 'var(--foodbridge-green)' }} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4>{listing.title}</h4>
                          <Badge style={{ backgroundColor: getStatusColor(listing.status) + '20', color: getStatusColor(listing.status) }}>
                            {listing.status}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span>{listing.quantity}</span>
                          <span>•</span>
                          <span>{listing.category}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            Expires in {listing.expiry}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">{listing.claims} claims</p>
                        <Button variant="link" size="sm" style={{ color: 'var(--foodbridge-green)' }}>
                          Manage
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="pb-4 border-b last:border-0 last:pb-0">
                      <p className="text-sm mb-1">{activity.action}</p>
                      <p className="text-sm text-gray-600 mb-1">{activity.item}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="mt-4" style={{ backgroundColor: 'var(--foodbridge-green)' + '10' }}>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 mt-1" style={{ color: 'var(--foodbridge-green)' }} />
                  <div>
                    <h4 className="mb-1">Tip of the Day</h4>
                    <p className="text-sm text-gray-700">
                      Listings with photos get 3x more claims! Add clear images to increase visibility.
                    </p>
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
