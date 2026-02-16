import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Layout } from '../../components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Badge } from '../../components/ui/badge';
import { Upload, X, Calendar, Clock } from 'lucide-react';
import { toast } from 'sonner';

export function CreateListing() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    quantity: '',
    unit: 'kg',
    expiryDate: '',
    expiryTime: '',
    pickupStartTime: '',
    pickupEndTime: '',
  });

  const [dietaryTags, setDietaryTags] = useState<string[]>([]);
  const [images, setImages] = useState<string[]>([]);

  const categories = [
    'Vegetables',
    'Fruits',
    'Prepared Food',
    'Bakery',
    'Dairy',
    'Meat & Seafood',
    'Grains & Cereals',
    'Beverages',
    'Other',
  ];

  const dietaryOptions = ['Vegetarian', 'Vegan', 'Gluten-Free', 'Dairy-Free', 'Halal', 'Kosher'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Food listing created successfully!');
    navigate('/donor');
  };

  const toggleDietaryTag = (tag: string) => {
    setDietaryTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleImageUpload = () => {
    // Mock image upload
    setImages([...images, 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=300&h=300&fit=crop']);
  };

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <Layout role="donor">
      <div className="container mx-auto px-4 py-6 max-w-3xl">
        <div className="mb-6">
          <h1 className="text-3xl mb-1">Create Food Listing</h1>
          <p className="text-gray-600">List surplus food to share with those in need</p>
        </div>

        <form onSubmit={handleSubmit}>
          <Card>
            <CardHeader>
              <CardTitle>Food Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Photo Upload */}
              <div className="space-y-2">
                <Label>Food Photos</Label>
                <div className="grid grid-cols-4 gap-4">
                  {images.map((img, index) => (
                    <div key={index} className="relative aspect-square rounded-lg overflow-hidden border">
                      <img src={img} alt={`Upload ${index + 1}`} className="w-full h-full object-cover" />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                  {images.length < 4 && (
                    <button
                      type="button"
                      onClick={handleImageUpload}
                      className="aspect-square rounded-lg border-2 border-dashed border-gray-300 hover:border-gray-400 flex flex-col items-center justify-center gap-2 transition-colors"
                    >
                      <Upload className="h-6 w-6 text-gray-400" />
                      <span className="text-xs text-gray-500">Upload</span>
                    </button>
                  )}
                </div>
                <p className="text-xs text-gray-500">Add up to 4 photos. Listings with photos get 3x more claims!</p>
              </div>

              {/* Title */}
              <div className="space-y-2">
                <Label htmlFor="title">Food Title *</Label>
                <Input
                  id="title"
                  placeholder="e.g., Fresh Vegetables Mix"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe the food items, condition, packaging, etc."
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>

              {/* Category & Quantity */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Category *</Label>
                  <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="quantity">Quantity *</Label>
                  <div className="flex gap-2">
                    <Input
                      id="quantity"
                      type="number"
                      placeholder="0"
                      className="flex-1"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      required
                    />
                    <Select value={formData.unit} onValueChange={(value) => setFormData({ ...formData, unit: value })}>
                      <SelectTrigger className="w-24">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="kg">kg</SelectItem>
                        <SelectItem value="liters">liters</SelectItem>
                        <SelectItem value="units">units</SelectItem>
                        <SelectItem value="portions">portions</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Expiry Date & Time */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiryDate">Expiry Date *</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="expiryDate"
                      type="date"
                      className="pl-10"
                      value={formData.expiryDate}
                      onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="expiryTime">Expiry Time *</Label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="expiryTime"
                      type="time"
                      className="pl-10"
                      value={formData.expiryTime}
                      onChange={(e) => setFormData({ ...formData, expiryTime: e.target.value })}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Pickup Time Window */}
              <div className="space-y-2">
                <Label>Pickup Time Window *</Label>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative">
                    <Clock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      type="time"
                      placeholder="From"
                      className="pl-10"
                      value={formData.pickupStartTime}
                      onChange={(e) => setFormData({ ...formData, pickupStartTime: e.target.value })}
                      required
                    />
                  </div>
                  <div className="relative">
                    <Clock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      type="time"
                      placeholder="To"
                      className="pl-10"
                      value={formData.pickupEndTime}
                      onChange={(e) => setFormData({ ...formData, pickupEndTime: e.target.value })}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Dietary Tags */}
              <div className="space-y-2">
                <Label>Dietary Tags (Optional)</Label>
                <div className="flex flex-wrap gap-2">
                  {dietaryOptions.map((tag) => (
                    <Badge
                      key={tag}
                      variant={dietaryTags.includes(tag) ? 'default' : 'outline'}
                      className="cursor-pointer"
                      style={{
                        backgroundColor: dietaryTags.includes(tag) ? 'var(--foodbridge-green)' : 'transparent',
                        color: dietaryTags.includes(tag) ? 'white' : 'inherit',
                      }}
                      onClick={() => toggleDietaryTag(tag)}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1"
                  onClick={() => navigate('/donor')}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="flex-1"
                  style={{ backgroundColor: 'var(--foodbridge-orange)', color: 'white' }}
                >
                  Create Listing
                </Button>
              </div>
            </CardContent>
          </Card>
        </form>
      </div>
    </Layout>
  );
}
