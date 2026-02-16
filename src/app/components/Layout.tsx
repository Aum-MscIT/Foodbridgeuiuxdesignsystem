import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router';
import { Heart, Home, Plus, MessageCircle, Bell, User, BarChart, Map, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface LayoutProps {
  children: ReactNode;
  role: 'donor' | 'recipient' | 'volunteer' | 'admin';
}

export function Layout({ children, role }: LayoutProps) {
  const location = useLocation();

  const roleColors = {
    donor: 'var(--foodbridge-green)',
    recipient: 'var(--foodbridge-orange)',
    volunteer: 'var(--foodbridge-blue)',
    admin: '#6B7280',
  };

  const navItems = {
    donor: [
      { path: '/donor', icon: Home, label: 'Home' },
      { path: '/donor/create', icon: Plus, label: 'Create' },
      { path: '/donor/impact', icon: BarChart, label: 'Impact' },
    ],
    recipient: [
      { path: '/recipient', icon: Home, label: 'Browse' },
      { path: '/recipient/map', icon: Map, label: 'Map' },
      { path: '/recipient/claimed', icon: Clock, label: 'Claimed' },
    ],
    volunteer: [
      { path: '/volunteer', icon: Home, label: 'Schedule' },
      { path: '/volunteer/routes', icon: Map, label: 'Routes' },
      { path: '/volunteer/missions', icon: Clock, label: 'Missions' },
    ],
    admin: [
      { path: '/admin', icon: Home, label: 'Dashboard' },
      { path: '/admin/verification', icon: User, label: 'Verify' },
      { path: '/admin/moderation', icon: BarChart, label: 'Moderate' },
    ],
  };

  const currentColor = roleColors[role];
  const items = navItems[role];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white border-b sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: currentColor }}>
                <Heart className="w-6 h-6 text-white" fill="white" />
              </div>
              <span className="text-xl">FoodBridge</span>
            </Link>

            <div className="flex items-center gap-4">
              <Link to="/messages">
                <Button variant="ghost" size="icon" className="relative">
                  <MessageCircle className="h-5 w-5" />
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs" style={{ backgroundColor: currentColor }}>
                    3
                  </Badge>
                </Button>
              </Link>
              <Link to="/notifications">
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs" style={{ backgroundColor: currentColor }}>
                    5
                  </Badge>
                </Button>
              </Link>
              <Link to="/profile">
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pb-20 md:pb-4">
        {children}
      </main>

      {/* Bottom Navigation (Mobile) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t z-40">
        <div className="flex items-center justify-around h-16">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link key={item.path} to={item.path} className="flex-1">
                <button
                  className="flex flex-col items-center justify-center w-full h-full gap-1"
                  style={{ color: isActive ? currentColor : '#6B7280' }}
                >
                  <Icon className="h-5 w-5" />
                  <span className="text-xs">{item.label}</span>
                </button>
              </Link>
            );
          })}
          <Link to="/profile" className="flex-1">
            <button className="flex flex-col items-center justify-center w-full h-full gap-1 text-gray-500">
              <User className="h-5 w-5" />
              <span className="text-xs">Profile</span>
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
}
