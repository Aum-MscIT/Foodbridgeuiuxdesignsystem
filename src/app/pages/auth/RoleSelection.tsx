import { Link } from 'react-router';
import { Store, Users, Truck, Shield, ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';

export function RoleSelection() {
  const roles = [
    {
      id: 'donor',
      icon: Store,
      title: 'Donor',
      description: 'Restaurants, grocery stores, and caterers listing surplus food',
      color: 'var(--foodbridge-green)',
      route: '/auth/register?role=donor',
    },
    {
      id: 'recipient',
      icon: Users,
      title: 'Recipient',
      description: 'NGOs, shelters, and individuals claiming available food',
      color: 'var(--foodbridge-orange)',
      route: '/auth/register?role=recipient',
    },
    {
      id: 'volunteer',
      icon: Truck,
      title: 'Volunteer',
      description: 'Delivery partners helping with food pickup and delivery',
      color: 'var(--foodbridge-blue)',
      route: '/auth/register?role=volunteer',
    },
    {
      id: 'admin',
      icon: Shield,
      title: 'Admin',
      description: 'System administrators managing the platform',
      color: '#6B7280',
      route: '/auth/register?role=admin',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>
        
        <div className="text-center mb-10">
          <h1 className="text-4xl mb-3">Choose Your Role</h1>
          <p className="text-gray-600 text-lg">Select how you'd like to participate in FoodBridge</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <Link key={role.id} to={role.route}>
                <Card className="h-full border-2 hover:shadow-xl transition-all cursor-pointer hover:scale-105">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: role.color }}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle>{role.title}</CardTitle>
                    <CardDescription className="text-base">{role.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" style={{ backgroundColor: role.color, color: 'white' }}>
                      Continue as {role.title}
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600">
            Already have an account?{' '}
            <Link to="/auth/login" className="font-medium hover:underline" style={{ color: 'var(--foodbridge-green)' }}>
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
