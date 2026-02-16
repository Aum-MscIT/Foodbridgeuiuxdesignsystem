import { useNavigate } from 'react-router';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Switch } from '../../components/ui/switch';
import { Separator } from '../../components/ui/separator';
import { Avatar, AvatarFallback } from '../../components/ui/avatar';
import { ArrowLeft, Edit, MapPin, Mail, Phone, Calendar, Award, Shield, Bell, Lock, LogOut } from 'lucide-react';

export function Profile() {
  const navigate = useNavigate();

  const userProfile = {
    name: 'Green Market Grocery',
    role: 'Donor',
    email: 'contact@greenmarket.com',
    phone: '+1 234-567-8900',
    address: '123 Main St, Downtown, CA 12345',
    joinedDate: 'November 2025',
    verified: true,
    stats: {
      donations: 156,
      mealsSaved: 2340,
      impactScore: 4.8,
      co2Reduced: '145 kg',
    },
    preferences: {
      emailNotifications: true,
      pushNotifications: true,
      marketingEmails: false,
      weeklyDigest: true,
    },
  };

  const handleEditProfile = () => {
    // Handle edit profile
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="md:hidden bg-white border-b p-4">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl">Profile</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 max-w-4xl">
        {/* Profile Header */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <Avatar className="w-24 h-24">
                <AvatarFallback className="bg-gradient-to-br from-green-400 to-blue-500 text-white text-3xl">
                  GM
                </AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h1 className="text-2xl">{userProfile.name}</h1>
                  {userProfile.verified && (
                    <Badge style={{ backgroundColor: 'var(--foodbridge-green)', color: 'white' }} className="gap-1">
                      <Shield className="h-3 w-3" />
                      Verified
                    </Badge>
                  )}
                </div>
                <Badge variant="outline" className="mb-3">{userProfile.role}</Badge>

                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>{userProfile.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>{userProfile.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{userProfile.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Joined {userProfile.joinedDate}</span>
                  </div>
                </div>
              </div>

              <Button onClick={handleEditProfile} className="gap-2">
                <Edit className="h-4 w-4" />
                Edit Profile
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl mb-1" style={{ color: 'var(--foodbridge-green)' }}>
                {userProfile.stats.donations}
              </div>
              <div className="text-sm text-gray-600">Donations</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl mb-1" style={{ color: 'var(--foodbridge-orange)' }}>
                {userProfile.stats.mealsSaved}
              </div>
              <div className="text-sm text-gray-600">Meals Saved</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl mb-1" style={{ color: 'var(--foodbridge-blue)' }}>
                {userProfile.stats.impactScore}
              </div>
              <div className="text-sm text-gray-600">Rating</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl mb-1" style={{ color: 'var(--foodbridge-green)' }}>
                {userProfile.stats.co2Reduced}
              </div>
              <div className="text-sm text-gray-600">CO₂ Reduced</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Account Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5" />
                Account Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="flex gap-2">
                  <Input
                    id="password"
                    type="password"
                    value="••••••••"
                    disabled
                    className="flex-1"
                  />
                  <Button variant="outline">Change</Button>
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <h4 className="text-sm">Privacy</h4>
                <div className="flex items-center justify-between">
                  <Label htmlFor="profile-visibility" className="text-sm font-normal">
                    Profile visibility
                  </Label>
                  <Switch id="profile-visibility" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="show-stats" className="text-sm font-normal">
                    Show statistics publicly
                  </Label>
                  <Switch id="show-stats" defaultChecked />
                </div>
              </div>

              <Separator />

              <Button variant="outline" className="w-full text-red-600 hover:text-red-700">
                Deactivate Account
              </Button>
            </CardContent>
          </Card>

          {/* Notification Preferences */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="email-notif" className="text-sm font-normal">
                  Email notifications
                </Label>
                <Switch
                  id="email-notif"
                  checked={userProfile.preferences.emailNotifications}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="push-notif" className="text-sm font-normal">
                  Push notifications
                </Label>
                <Switch
                  id="push-notif"
                  checked={userProfile.preferences.pushNotifications}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="marketing" className="text-sm font-normal">
                  Marketing emails
                </Label>
                <Switch
                  id="marketing"
                  checked={userProfile.preferences.marketingEmails}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="digest" className="text-sm font-normal">
                  Weekly digest
                </Label>
                <Switch
                  id="digest"
                  checked={userProfile.preferences.weeklyDigest}
                />
              </div>

              <Separator />

              <div className="space-y-3">
                <h4 className="text-sm">Notification Types</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="claims" defaultChecked />
                    <label htmlFor="claims">New claims on listings</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="deliveries" defaultChecked />
                    <label htmlFor="deliveries">Delivery updates</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="messages" defaultChecked />
                    <label htmlFor="messages">New messages</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="achievements" defaultChecked />
                    <label htmlFor="achievements">Achievements & milestones</label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Achievements */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5" style={{ color: 'var(--foodbridge-yellow)' }} />
              Your Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { title: 'First Donation', emoji: '🎯', unlocked: true },
                { title: 'Eco Warrior', emoji: '🌱', unlocked: true },
                { title: 'Century Club', emoji: '💯', unlocked: true },
                { title: 'Consistency Star', emoji: '⭐', unlocked: true },
                { title: 'Community Hero', emoji: '🦸', unlocked: false },
                { title: 'Platinum Donor', emoji: '👑', unlocked: false },
              ].map((achievement) => (
                <div
                  key={achievement.title}
                  className={`p-4 border-2 rounded-lg text-center ${
                    achievement.unlocked ? 'border-green-300 bg-green-50' : 'border-gray-200 bg-gray-50 opacity-60'
                  }`}
                >
                  <div className="text-4xl mb-2">{achievement.emoji}</div>
                  <p className="text-sm">{achievement.title}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Logout */}
        <Card className="mt-6">
          <CardContent className="pt-6">
            <Button
              variant="outline"
              className="w-full gap-2 text-gray-700 hover:text-gray-900"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
