import { Layout } from '../../components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { MapPin, Navigation, Clock, Package, Phone, MessageCircle, CheckCircle } from 'lucide-react';

export function VolunteerRoutes() {
  const currentRoute = {
    id: 1,
    totalStops: 3,
    totalDistance: '12.5 km',
    estimatedTime: '45 min',
    currentStop: 1,
  };

  const stops = [
    {
      id: 1,
      type: 'pickup',
      status: 'current',
      name: 'Green Grocery',
      address: '123 Green St, Downtown',
      phone: '+1 234-567-8900',
      items: 'Fresh Vegetables Mix (15 kg)',
      notes: 'Enter through back door',
      eta: 'Arrive now',
      position: { top: '25%', left: '40%' },
    },
    {
      id: 2,
      type: 'delivery',
      status: 'upcoming',
      name: 'Hope Shelter',
      address: '456 Hope Ave, Midtown',
      phone: '+1 234-567-8901',
      items: 'Fresh Vegetables Mix (15 kg)',
      notes: 'Ring doorbell twice',
      eta: '15 min',
      position: { top: '50%', left: '60%' },
    },
    {
      id: 3,
      type: 'pickup',
      status: 'upcoming',
      name: 'Sunrise Cafe',
      address: '789 Main St, Uptown',
      phone: '+1 234-567-8902',
      items: 'Prepared Sandwiches (50 units)',
      notes: 'Ask for manager',
      eta: '30 min',
      position: { top: '65%', left: '35%' },
    },
  ];

  const getStopColor = (type: string) => {
    return type === 'pickup' ? 'var(--foodbridge-green)' : 'var(--foodbridge-orange)';
  };

  return (
    <Layout role="volunteer">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl mb-1">Active Route</h1>
              <p className="text-gray-600">Follow the optimized route for your deliveries</p>
            </div>
            <Button style={{ backgroundColor: 'var(--foodbridge-blue)', color: 'white' }} className="gap-2">
              <Navigation className="h-5 w-5" />
              Start Navigation
            </Button>
          </div>
        </div>

        {/* Route Summary */}
        <Card className="mb-6 border-2" style={{ borderColor: 'var(--foodbridge-blue)' }}>
          <CardContent className="pt-6">
            <div className="grid grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Stops</p>
                <p className="text-2xl">{currentRoute.totalStops}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Distance</p>
                <p className="text-2xl">{currentRoute.totalDistance}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Est. Time</p>
                <p className="text-2xl">{currentRoute.estimatedTime}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Progress</p>
                <p className="text-2xl">{currentRoute.currentStop}/{currentRoute.totalStops}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Map View */}
          <div className="md:col-span-2">
            <Card>
              <div className="relative bg-gray-100 h-[600px] rounded-lg" style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23d1d5db\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
              }}>
                {/* Route Line */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                  <path
                    d="M 40% 25% Q 50% 37.5% 60% 50% T 35% 65%"
                    stroke="var(--foodbridge-blue)"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="10,5"
                  />
                </svg>

                {/* Stop Markers */}
                {stops.map((stop, index) => (
                  <div
                    key={stop.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
                    style={{ top: stop.position.top, left: stop.position.left }}
                  >
                    <div className="relative">
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center border-4 border-white shadow-lg"
                        style={{ backgroundColor: stop.status === 'current' ? 'var(--foodbridge-blue)' : getStopColor(stop.type) }}
                      >
                        {stop.status === 'completed' ? (
                          <CheckCircle className="h-7 w-7 text-white" />
                        ) : (
                          <span className="text-white text-xl">{index + 1}</span>
                        )}
                      </div>
                      {stop.status === 'current' && (
                        <div className="absolute -inset-2 rounded-full border-2 border-blue-400 animate-ping" />
                      )}
                      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                        <Badge className={stop.status === 'current' ? '' : 'bg-white text-gray-800 border border-gray-300'}>
                          {stop.type === 'pickup' ? 'Pickup' : 'Delivery'}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Your Location */}
                <div className="absolute top-[20%] left-[35%] transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center animate-pulse" style={{ backgroundColor: 'var(--foodbridge-blue)' }}>
                    <Navigation className="h-5 w-5 text-white" />
                  </div>
                </div>

                {/* Map Controls */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 z-30">
                  <Button size="icon" className="bg-white text-gray-800 hover:bg-gray-100">
                    +
                  </Button>
                  <Button size="icon" className="bg-white text-gray-800 hover:bg-gray-100">
                    −
                  </Button>
                </div>

                {/* Legend */}
                <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-lg z-30">
                  <p className="text-sm mb-2">Legend</p>
                  <div className="space-y-1 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: 'var(--foodbridge-green)' }} />
                      <span>Pickup Point</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: 'var(--foodbridge-orange)' }} />
                      <span>Delivery Point</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: 'var(--foodbridge-blue)' }} />
                      <span>Current Stop</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Stop Details */}
          <div className="space-y-4">
            {stops.map((stop, index) => (
              <Card
                key={stop.id}
                className={`border-2 ${stop.status === 'current' ? 'border-blue-400 shadow-lg' : stop.status === 'completed' ? 'opacity-60' : ''}`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm"
                        style={{ backgroundColor: getStopColor(stop.type) }}
                      >
                        {index + 1}
                      </div>
                      <div>
                        <CardTitle className="text-base">{stop.name}</CardTitle>
                        <Badge
                          variant="outline"
                          style={{
                            borderColor: getStopColor(stop.type),
                            color: getStopColor(stop.type),
                          }}
                        >
                          {stop.type === 'pickup' ? 'Pickup' : 'Delivery'}
                        </Badge>
                      </div>
                    </div>
                    {stop.status === 'current' && (
                      <Badge style={{ backgroundColor: 'var(--foodbridge-blue)', color: 'white' }}>
                        Current
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{stop.address}</span>
                  </div>

                  <div className="flex items-start gap-2 text-sm">
                    <Package className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{stop.items}</span>
                  </div>

                  <div className="flex items-start gap-2 text-sm">
                    <Clock className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">ETA: {stop.eta}</span>
                  </div>

                  {stop.notes && (
                    <div className="bg-yellow-50 p-2 rounded text-sm border border-yellow-200">
                      <strong>Note:</strong> {stop.notes}
                    </div>
                  )}

                  <div className="flex gap-2 pt-2">
                    <Button size="sm" variant="outline" className="flex-1 gap-1">
                      <Phone className="h-3 w-3" />
                      Call
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 gap-1">
                      <MessageCircle className="h-3 w-3" />
                      Message
                    </Button>
                  </div>

                  {stop.status === 'current' && (
                    <Button
                      className="w-full"
                      style={{ backgroundColor: 'var(--foodbridge-blue)', color: 'white' }}
                    >
                      {stop.type === 'pickup' ? 'Mark as Picked Up' : 'Mark as Delivered'}
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
