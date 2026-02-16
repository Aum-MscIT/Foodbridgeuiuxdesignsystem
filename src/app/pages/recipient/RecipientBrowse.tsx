import { useState } from 'react';
import { Layout } from '../../components/Layout';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Badge } from '../../components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../../components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Search, MapPin, Clock, Filter, Star, Package } from 'lucide-react';
import { toast } from 'sonner';

export function RecipientBrowse() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({ category: '', dietary: '', distance: '' });

  const foodListings = [
    {
      id: 1,
      title: 'Fresh Vegetables Mix',
      donor: 'Green Grocery',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop',
      quantity: '15 kg',
      category: 'Vegetables',
      distance: '1.2 km',
      expiresIn: '2 hours',
      dietary: ['Vegetarian', 'Vegan'],
      description: 'Fresh mixed vegetables including carrots, tomatoes, lettuce, and bell peppers.',
      pickupTime: '2:00 PM - 6:00 PM',
      available: true,
    },
    {
      id: 2,
      title: 'Prepared Sandwiches',
      donor: 'Sunrise Cafe',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop',
      quantity: '50 units',
      category: 'Prepared Food',
      distance: '0.8 km',
      expiresIn: '4 hours',
      dietary: ['Vegetarian'],
      description: 'Assorted vegetarian sandwiches with fresh ingredients.',
      pickupTime: '3:00 PM - 8:00 PM',
      available: true,
    },
    {
      id: 3,
      title: 'Bakery Items',
      donor: 'Daily Bread Bakery',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop',
      quantity: '25 units',
      category: 'Bakery',
      distance: '2.5 km',
      expiresIn: '6 hours',
      dietary: ['Vegetarian'],
      description: 'Fresh bread, croissants, and pastries.',
      pickupTime: '4:00 PM - 9:00 PM',
      available: true,
    },
    {
      id: 4,
      title: 'Fresh Fruits Basket',
      donor: 'FreshMart',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400&h=300&fit=crop',
      quantity: '20 kg',
      category: 'Fruits',
      distance: '1.5 km',
      expiresIn: '3 hours',
      dietary: ['Vegetarian', 'Vegan', 'Gluten-Free'],
      description: 'Assorted seasonal fruits: apples, oranges, bananas, and grapes.',
      pickupTime: '1:00 PM - 7:00 PM',
      available: true,
    },
    {
      id: 5,
      title: 'Dairy Products',
      donor: 'Milk & More',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=300&fit=crop',
      quantity: '20 liters',
      category: 'Dairy',
      distance: '3.2 km',
      expiresIn: '1 hour',
      dietary: ['Vegetarian'],
      description: 'Fresh milk, yogurt, and cheese products.',
      pickupTime: '12:00 PM - 4:00 PM',
      available: true,
    },
    {
      id: 6,
      title: 'Cooked Rice & Curry',
      donor: 'Spice Kitchen',
      rating: 5.0,
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop',
      quantity: '40 portions',
      category: 'Prepared Food',
      distance: '1.8 km',
      expiresIn: '5 hours',
      dietary: ['Vegan', 'Gluten-Free'],
      description: 'Freshly prepared vegan curry with basmati rice.',
      pickupTime: '5:00 PM - 9:00 PM',
      available: true,
    },
  ];

  const handleClaim = (listing: any) => {
    toast.success(`Successfully claimed "${listing.title}"!`);
  };

  return (
    <Layout role="recipient">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl mb-1">Browse Available Food</h1>
          <p className="text-gray-600">Discover and claim surplus food from nearby donors</p>
        </div>

        {/* Search & Filter Bar */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search for food items..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="flex gap-2">
                <Select value={selectedFilters.category} onValueChange={(value) => setSelectedFilters({ ...selectedFilters, category: value })}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="vegetables">Vegetables</SelectItem>
                    <SelectItem value="fruits">Fruits</SelectItem>
                    <SelectItem value="prepared">Prepared Food</SelectItem>
                    <SelectItem value="bakery">Bakery</SelectItem>
                    <SelectItem value="dairy">Dairy</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedFilters.dietary} onValueChange={(value) => setSelectedFilters({ ...selectedFilters, dietary: value })}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Dietary" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Dietary</SelectItem>
                    <SelectItem value="vegetarian">Vegetarian</SelectItem>
                    <SelectItem value="vegan">Vegan</SelectItem>
                    <SelectItem value="gluten-free">Gluten-Free</SelectItem>
                  </SelectContent>
                </Select>

                <Button variant="outline" className="gap-2">
                  <Filter className="h-4 w-4" />
                  More
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Count */}
        <div className="mb-4 flex items-center justify-between">
          <p className="text-gray-600">{foodListings.length} listings available nearby</p>
          <Select defaultValue="distance">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="distance">Nearest First</SelectItem>
              <SelectItem value="expiry">Expiring Soon</SelectItem>
              <SelectItem value="quantity">Most Quantity</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Food Listings Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {foodListings.map((listing) => (
            <Dialog key={listing.id}>
              <DialogTrigger asChild>
                <Card className="cursor-pointer hover:shadow-lg transition-all border-2 hover:border-orange-200">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={listing.image}
                        alt={listing.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge style={{ backgroundColor: 'var(--foodbridge-green)', color: 'white' }}>
                          Available
                        </Badge>
                      </div>
                      <div className="absolute bottom-2 left-2">
                        <Badge className="bg-white/90 text-gray-800 backdrop-blur">
                          <Clock className="h-3 w-3 mr-1" />
                          {listing.expiresIn}
                        </Badge>
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="flex-1 line-clamp-1">{listing.title}</h3>
                        <div className="flex items-center gap-1 text-sm">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span>{listing.rating}</span>
                        </div>
                      </div>

                      <p className="text-sm text-gray-600 mb-3">{listing.donor}</p>

                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <span className="flex items-center gap-1">
                          <Package className="h-4 w-4" />
                          {listing.quantity}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {listing.distance}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-3">
                        {listing.dietary.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <Button
                        className="w-full"
                        style={{ backgroundColor: 'var(--foodbridge-orange)', color: 'white' }}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleClaim(listing);
                        }}
                      >
                        Claim Food
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>

              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>{listing.title}</DialogTitle>
                  <DialogDescription>{listing.donor}</DialogDescription>
                </DialogHeader>

                <div className="space-y-4">
                  <img
                    src={listing.image}
                    alt={listing.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Quantity</p>
                      <p>{listing.quantity}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Category</p>
                      <p>{listing.category}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Distance</p>
                      <p>{listing.distance} away</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Expires In</p>
                      <p className="text-red-600">{listing.expiresIn}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 mb-1">Description</p>
                    <p>{listing.description}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 mb-1">Pickup Time</p>
                    <p>{listing.pickupTime}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 mb-2">Dietary Information</p>
                    <div className="flex flex-wrap gap-2">
                      {listing.dietary.map((tag) => (
                        <Badge key={tag} style={{ backgroundColor: 'var(--foodbridge-green)' + '20', color: 'var(--foodbridge-green)' }}>
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button
                    className="w-full"
                    style={{ backgroundColor: 'var(--foodbridge-orange)', color: 'white' }}
                    onClick={() => handleClaim(listing)}
                  >
                    Claim This Food
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </Layout>
  );
}
