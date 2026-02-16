import { Layout } from '../../components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Progress } from '../../components/ui/progress';
import { Package, MapPin, Clock, CheckCircle, Truck, AlertCircle, Star, MessageCircle } from 'lucide-react';

export function RecipientClaimed() {
  const claimedItems = [
    {
      id: 1,
      title: 'Fresh Vegetables Mix',
      donor: 'Green Grocery',
      donorPhone: '+1 234-567-8900',
      quantity: '15 kg',
      claimedAt: '2 hours ago',
      pickupTime: '4:00 PM - 6:00 PM',
      status: 'confirmed',
      statusText: 'Confirmed',
      progress: 25,
      nextStep: 'Waiting for volunteer assignment',
      address: '123 Green St, Downtown',
      image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=200&h=150&fit=crop',
    },
    {
      id: 2,
      title: 'Prepared Sandwiches',
      donor: 'Sunrise Cafe',
      donorPhone: '+1 234-567-8901',
      quantity: '50 units',
      claimedAt: '4 hours ago',
      pickupTime: '3:00 PM - 5:00 PM',
      status: 'in-transit',
      statusText: 'In Transit',
      progress: 75,
      nextStep: 'Volunteer is on the way',
      volunteerName: 'John Smith',
      volunteerPhone: '+1 234-567-8902',
      eta: '15 minutes',
      address: '456 Main Ave, Midtown',
      image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=200&h=150&fit=crop',
    },
    {
      id: 3,
      title: 'Fresh Fruits Basket',
      donor: 'FreshMart',
      donorPhone: '+1 234-567-8903',
      quantity: '20 kg',
      claimedAt: 'Yesterday',
      pickupTime: '2:00 PM - 4:00 PM',
      status: 'completed',
      statusText: 'Delivered',
      progress: 100,
      nextStep: 'Rate your experience',
      address: '789 Oak Rd, Uptown',
      image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=200&h=150&fit=crop',
      rating: 0,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'var(--foodbridge-yellow)';
      case 'in-transit': return 'var(--foodbridge-blue)';
      case 'completed': return 'var(--foodbridge-green)';
      default: return '#6B7280';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed': return Clock;
      case 'in-transit': return Truck;
      case 'completed': return CheckCircle;
      default: return AlertCircle;
    }
  };

  const handleRate = (itemId: number, rating: number) => {
    console.log(`Rated item ${itemId} with ${rating} stars`);
  };

  return (
    <Layout role="recipient">
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl mb-1">Claimed Items</h1>
          <p className="text-gray-600">Track your food claims and delivery status</p>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl mb-1" style={{ color: 'var(--foodbridge-green)' }}>12</div>
              <div className="text-sm text-gray-600">Total Claims</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl mb-1" style={{ color: 'var(--foodbridge-blue)' }}>2</div>
              <div className="text-sm text-gray-600">In Transit</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl mb-1" style={{ color: 'var(--foodbridge-orange)' }}>185 kg</div>
              <div className="text-sm text-gray-600">Food Claimed</div>
            </CardContent>
          </Card>
        </div>

        {/* Claimed Items List */}
        <div className="space-y-4">
          {claimedItems.map((item) => {
            const StatusIcon = getStatusIcon(item.status);
            return (
              <Card key={item.id} className="border-2">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-4 gap-4 p-4">
                    {/* Image */}
                    <div className="md:col-span-1">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    </div>

                    {/* Details */}
                    <div className="md:col-span-3 space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3>{item.title}</h3>
                            <Badge style={{ backgroundColor: getStatusColor(item.status) + '20', color: getStatusColor(item.status) }}>
                              <StatusIcon className="h-3 w-3 mr-1" />
                              {item.statusText}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600">{item.donor}</p>
                        </div>
                        <span className="text-sm text-gray-500">{item.claimedAt}</span>
                      </div>

                      {/* Progress */}
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-gray-600">{item.nextStep}</span>
                          <span className="text-sm">{item.progress}%</span>
                        </div>
                        <Progress value={item.progress} className="h-2" />
                      </div>

                      {/* Info Grid */}
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600 mb-1 flex items-center gap-1">
                            <Package className="h-3 w-3" />
                            Quantity
                          </p>
                          <p>{item.quantity}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 mb-1 flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            Pickup Time
                          </p>
                          <p>{item.pickupTime}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 mb-1 flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            Location
                          </p>
                          <p className="truncate">{item.address}</p>
                        </div>
                      </div>

                      {/* Volunteer Info (if in transit) */}
                      {item.status === 'in-transit' && item.volunteerName && (
                        <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm mb-1">
                                <Truck className="h-4 w-4 inline mr-1" style={{ color: 'var(--foodbridge-blue)' }} />
                                Volunteer: <strong>{item.volunteerName}</strong>
                              </p>
                              <p className="text-sm text-gray-600">ETA: {item.eta}</p>
                            </div>
                            <Button size="sm" variant="outline" className="gap-1">
                              <MessageCircle className="h-4 w-4" />
                              Contact
                            </Button>
                          </div>
                        </div>
                      )}

                      {/* Rating (if completed) */}
                      {item.status === 'completed' && (
                        <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                          <p className="text-sm mb-2">Rate your experience:</p>
                          <div className="flex items-center gap-2">
                            {[1, 2, 3, 4, 5].map((rating) => (
                              <button
                                key={rating}
                                onClick={() => handleRate(item.id, rating)}
                                className="hover:scale-110 transition-transform"
                              >
                                <Star
                                  className="h-6 w-6"
                                  fill={rating <= (item.rating || 0) ? '#FCD34D' : 'none'}
                                  stroke={rating <= (item.rating || 0) ? '#FCD34D' : '#9CA3AF'}
                                />
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Actions */}
                      <div className="flex gap-2">
                        {item.status !== 'completed' && (
                          <Button variant="outline" size="sm" className="gap-1">
                            <MessageCircle className="h-4 w-4" />
                            Message Donor
                          </Button>
                        )}
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        {item.status === 'confirmed' && (
                          <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                            Cancel Claim
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Empty State (if no items) */}
        {/* <Card className="text-center py-12">
          <CardContent>
            <Package className="h-12 w-12 mx-auto mb-4 text-gray-400" />
            <h3 className="mb-2">No Claimed Items Yet</h3>
            <p className="text-gray-600 mb-4">Start browsing available food to make your first claim</p>
            <Button style={{ backgroundColor: 'var(--foodbridge-orange)', color: 'white' }}>
              Browse Food
            </Button>
          </CardContent>
        </Card> */}
      </div>
    </Layout>
  );
}
