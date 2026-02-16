import { useState } from 'react';
import { Layout } from '../../components/Layout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { MapPin, Navigation, Package, Clock, Star, X } from 'lucide-react';
import { toast } from 'sonner';

export function RecipientMap() {
  const [selectedListing, setSelectedListing] = useState<number | null>(null);

  const mapListings = [
    {
      id: 1,
      title: 'Fresh Vegetables Mix',
      donor: 'Green Grocery',
      rating: 4.8,
      quantity: '15 kg',
      distance: '1.2 km',
      expiresIn: '2 hours',
      position: { top: '35%', left: '45%' },
      category: 'Vegetables',
    },
    {
      id: 2,
      title: 'Prepared Sandwiches',
      donor: 'Sunrise Cafe',
      rating: 4.9,
      quantity: '50 units',
      distance: '0.8 km',
      expiresIn: '4 hours',
      position: { top: '50%', left: '55%' },
      category: 'Prepared Food',
    },
    {
      id: 3,
      title: 'Bakery Items',
      donor: 'Daily Bread Bakery',
      rating: 4.7,
      quantity: '25 units',
      distance: '2.5 km',
      expiresIn: '6 hours',
      position: { top: '28%', left: '65%' },
      category: 'Bakery',
    },
    {
      id: 4,
      title: 'Fresh Fruits',
      donor: 'FreshMart',
      rating: 4.6,
      quantity: '20 kg',
      distance: '1.5 km',
      expiresIn: '3 hours',
      position: { top: '60%', left: '40%' },
      category: 'Fruits',
    },
    {
      id: 5,
      title: 'Dairy Products',
      donor: 'Milk & More',
      rating: 4.5,
      quantity: '20 liters',
      distance: '3.2 km',
      expiresIn: '1 hour',
      position: { top: '42%', left: '72%' },
      category: 'Dairy',
    },
  ];

  const selected = mapListings.find(l => l.id === selectedListing);

  const handleClaim = (listing: any) => {
    toast.success(`Successfully claimed "${listing.title}"!`);
    setSelectedListing(null);
  };

  return (
    <Layout role="recipient">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl mb-1">Map View</h1>
          <p className="text-gray-600">Find available food near your location</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Map Area */}
          <div className="md:col-span-2">
            <Card className="overflow-hidden">
              <div className="relative bg-gray-100 h-[600px]" style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23d1d5db\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
              }}>
                {/* Your Location Pin (Center) */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center animate-pulse" style={{ backgroundColor: 'var(--foodbridge-blue)' }}>
                      <Navigation className="h-6 w-6 text-white" />
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                      <Badge className="bg-white text-gray-800 border border-gray-300">You</Badge>
                    </div>
                  </div>
                </div>

                {/* Food Listing Pins */}
                {mapListings.map((listing) => (
                  <button
                    key={listing.id}
                    className="absolute transform -translate-x-1/2 -translate-y-full cursor-pointer hover:scale-110 transition-transform z-20"
                    style={{ top: listing.position.top, left: listing.position.left }}
                    onClick={() => setSelectedListing(listing.id)}
                  >
                    <div className="relative">
                      <MapPin
                        className="h-10 w-10 drop-shadow-lg"
                        fill={selectedListing === listing.id ? 'var(--foodbridge-orange)' : 'var(--foodbridge-green)'}
                        stroke="white"
                        strokeWidth={1}
                      />
                      {selectedListing === listing.id && (
                        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-64">
                          <Card className="border-2 shadow-xl" style={{ borderColor: 'var(--foodbridge-orange)' }}>
                            <CardContent className="p-3">
                              <div className="flex items-start justify-between mb-2">
                                <h4 className="flex-1 text-sm">{listing.title}</h4>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedListing(null);
                                  }}
                                  className="ml-2"
                                >
                                  <X className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                                </button>
                              </div>
                              <p className="text-xs text-gray-600 mb-2">{listing.donor}</p>
                              <div className="flex items-center gap-2 text-xs text-gray-600 mb-2">
                                <span className="flex items-center gap-1">
                                  <Package className="h-3 w-3" />
                                  {listing.quantity}
                                </span>
                                <span>•</span>
                                <span className="flex items-center gap-1">
                                  <MapPin className="h-3 w-3" />
                                  {listing.distance}
                                </span>
                              </div>
                              <Button
                                size="sm"
                                className="w-full text-xs"
                                style={{ backgroundColor: 'var(--foodbridge-orange)', color: 'white' }}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleClaim(listing);
                                }}
                              >
                                Claim
                              </Button>
                            </CardContent>
                          </Card>
                        </div>
                      )}
                    </div>
                  </button>
                ))}

                {/* Map Controls */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <Button size="icon" className="bg-white text-gray-800 hover:bg-gray-100">
                    +
                  </Button>
                  <Button size="icon" className="bg-white text-gray-800 hover:bg-gray-100">
                    −
                  </Button>
                </div>

                {/* Legend */}
                <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-lg">
                  <p className="text-sm mb-2">Legend</p>
                  <div className="space-y-1 text-xs">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" fill="var(--foodbridge-green)" stroke="white" strokeWidth={1} />
                      <span>Available Food</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" fill="var(--foodbridge-orange)" stroke="white" strokeWidth={1} />
                      <span>Selected</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--foodbridge-blue)' }}>
                        <Navigation className="h-2 w-2 text-white" />
                      </div>
                      <span>Your Location</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Listings Sidebar */}
          <div className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <h3 className="mb-4">Nearby Listings</h3>
                <div className="space-y-3 max-h-[530px] overflow-y-auto">
                  {mapListings.map((listing) => (
                    <button
                      key={listing.id}
                      onClick={() => setSelectedListing(listing.id)}
                      className={`w-full text-left p-3 rounded-lg border-2 transition-all ${
                        selectedListing === listing.id
                          ? 'border-orange-400 bg-orange-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-sm flex-1 line-clamp-1">{listing.title}</h4>
                        <div className="flex items-center gap-1 text-xs">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span>{listing.rating}</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 mb-2">{listing.donor}</p>
                      <div className="flex items-center gap-3 text-xs text-gray-600 mb-2">
                        <span className="flex items-center gap-1">
                          <Package className="h-3 w-3" />
                          {listing.quantity}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {listing.distance}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-xs">
                        <Clock className="h-3 w-3 text-red-600" />
                        <span className="text-red-600">Expires in {listing.expiresIn}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
