import { Link } from 'react-router';
import { ArrowRight, Heart, Users, TrendingDown, Award, MapPin, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--foodbridge-green)' }}>
              <Heart className="w-6 h-6 text-white" fill="white" />
            </div>
            <span className="text-2xl font-bold">FoodBridge</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/auth/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link to="/auth/role">
              <Button style={{ backgroundColor: 'var(--foodbridge-orange)', color: 'white' }} className="hover:opacity-90">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl mb-6">
            Connect Surplus Food with <span style={{ color: 'var(--foodbridge-green)' }}>Those in Need</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Join FoodBridge to reduce food waste, combat hunger, and build a sustainable community. 
            Connect donors, recipients, and volunteers in one powerful platform.
          </p>
          <Link to="/auth/role">
            <Button 
              size="lg" 
              style={{ backgroundColor: 'var(--foodbridge-orange)', color: 'white' }}
              className="text-lg px-8 py-6 hover:opacity-90"
            >
              Join FoodBridge <ArrowRight className="ml-2" />
            </Button>
          </Link>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-4xl mb-2" style={{ color: 'var(--foodbridge-green)' }}>50K+</div>
                <div className="text-gray-600">Meals Saved</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-4xl mb-2" style={{ color: 'var(--foodbridge-green)' }}>15K+</div>
                <div className="text-gray-600">Active Users</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-4xl mb-2" style={{ color: 'var(--foodbridge-green)' }}>25 Tons</div>
                <div className="text-gray-600">CO₂ Reduced</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center mb-12">How FoodBridge Works</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: 'var(--foodbridge-green)' }}>
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-2">1. Donors List Food</h3>
              <p className="text-gray-600">Restaurants and stores list surplus food with photos, quantities, and pickup times.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: 'var(--foodbridge-orange)' }}>
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-2">2. Recipients Claim</h3>
              <p className="text-gray-600">NGOs, shelters, and individuals browse and claim food that meets their needs.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: 'var(--foodbridge-blue)' }}>
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-2">3. Volunteers Deliver</h3>
              <p className="text-gray-600">Verified volunteers pick up and deliver food with optimized routes and real-time tracking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl text-center mb-12">Platform Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <TrendingDown className="w-10 h-10 mb-3" style={{ color: 'var(--foodbridge-green)' }} />
              <h3 className="mb-2">Reduce Waste</h3>
              <p className="text-sm text-gray-600">Track and minimize food waste with real-time analytics and impact reports.</p>
            </CardContent>
          </Card>
          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <MapPin className="w-10 h-10 mb-3" style={{ color: 'var(--foodbridge-orange)' }} />
              <h3 className="mb-2">Smart Routing</h3>
              <p className="text-sm text-gray-600">AI-optimized delivery routes for efficient food rescue operations.</p>
            </CardContent>
          </Card>
          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Award className="w-10 h-10 mb-3" style={{ color: 'var(--foodbridge-blue)' }} />
              <h3 className="mb-2">Verified Users</h3>
              <p className="text-sm text-gray-600">Trust and safety with verified badges for all platform participants.</p>
            </CardContent>
          </Card>
          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Heart className="w-10 h-10 mb-3" style={{ color: 'var(--foodbridge-green)' }} />
              <h3 className="mb-2">Impact Tracking</h3>
              <p className="text-sm text-gray-600">Visualize your contribution with meals saved, CO₂ reduced, and more.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--foodbridge-green)' }}>
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of donors, recipients, and volunteers in the fight against food waste and hunger.</p>
          <Link to="/auth/role">
            <Button size="lg" className="bg-white hover:bg-gray-100" style={{ color: 'var(--foodbridge-green)' }}>
              Join FoodBridge Today <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--foodbridge-green)' }}>
              <Heart className="w-5 h-5 text-white" fill="white" />
            </div>
            <span className="text-xl">FoodBridge</span>
          </div>
          <p className="text-gray-400">Connecting communities to reduce food waste and combat hunger</p>
          <p className="text-gray-500 text-sm mt-4">© 2026 FoodBridge. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
