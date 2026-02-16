import { useState } from 'react';
import { Layout } from '../../components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Input } from '../../components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '../../components/ui/dialog';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { AlertTriangle, Search, Flag, Package, MessageCircle, CheckCircle, XCircle, Eye } from 'lucide-react';
import { toast } from 'sonner';

export function AdminModeration() {
  const [searchQuery, setSearchQuery] = useState('');

  const flaggedContent = {
    listings: [
      {
        id: 1,
        title: 'Fresh Vegetables Mix',
        donor: 'Green Grocery',
        flaggedBy: 'John Doe',
        reason: 'Misleading quantity information',
        description: 'The listing claims 15kg but photos show much less',
        reportedAt: '1 hour ago',
        status: 'pending',
        severity: 'medium',
        image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=200&h=150&fit=crop',
      },
      {
        id: 2,
        title: 'Prepared Sandwiches',
        donor: 'Sunrise Cafe',
        flaggedBy: 'Jane Smith',
        reason: 'Quality concerns',
        description: 'Food appears to be past expiry date in the photo',
        reportedAt: '3 hours ago',
        status: 'pending',
        severity: 'high',
        image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=200&h=150&fit=crop',
      },
    ],
    users: [
      {
        id: 3,
        name: 'Suspicious Donor',
        role: 'Donor',
        flaggedBy: 'System Auto-Detection',
        reason: 'Multiple failed deliveries',
        description: '5 consecutive no-shows for scheduled pickups',
        reportedAt: '2 hours ago',
        status: 'pending',
        severity: 'high',
      },
      {
        id: 4,
        name: 'Bob Wilson',
        role: 'Volunteer',
        flaggedBy: 'Multiple Recipients',
        reason: 'Inappropriate behavior',
        description: 'Reports of unprofessional conduct during deliveries',
        reportedAt: '5 hours ago',
        status: 'pending',
        severity: 'high',
      },
    ],
    messages: [
      {
        id: 5,
        from: 'User123',
        to: 'User456',
        flaggedBy: 'User456',
        reason: 'Spam content',
        preview: 'This is clearly spam promoting external services...',
        reportedAt: '30 min ago',
        status: 'pending',
        severity: 'low',
      },
    ],
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'var(--foodbridge-red)';
      case 'medium': return 'var(--foodbridge-yellow)';
      case 'low': return 'var(--foodbridge-blue)';
      default: return '#6B7280';
    }
  };

  const handleApprove = (item: any) => {
    toast.success('Report dismissed - No action taken');
  };

  const handleAction = (item: any, action: string) => {
    toast.success(`Action taken: ${action}`);
  };

  return (
    <Layout role="admin">
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl mb-1">Content Moderation</h1>
          <p className="text-gray-600">Review and manage flagged content and user reports</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl mb-1" style={{ color: 'var(--foodbridge-red)' }}>
                {flaggedContent.listings.length + flaggedContent.users.length + flaggedContent.messages.length}
              </div>
              <div className="text-sm text-gray-600">Total Reports</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl mb-1" style={{ color: 'var(--foodbridge-orange)' }}>{flaggedContent.listings.length}</div>
              <div className="text-sm text-gray-600">Flagged Listings</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl mb-1" style={{ color: 'var(--foodbridge-blue)' }}>{flaggedContent.users.length}</div>
              <div className="text-sm text-gray-600">Flagged Users</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl mb-1" style={{ color: 'var(--foodbridge-yellow)' }}>{flaggedContent.messages.length}</div>
              <div className="text-sm text-gray-600">Flagged Messages</div>
            </CardContent>
          </Card>
        </div>

        {/* Search & Filter */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search reports..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Severity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Severity</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Flagged Content Tabs */}
        <Tabs defaultValue="listings" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="listings">
              Listings ({flaggedContent.listings.length})
            </TabsTrigger>
            <TabsTrigger value="users">
              Users ({flaggedContent.users.length})
            </TabsTrigger>
            <TabsTrigger value="messages">
              Messages ({flaggedContent.messages.length})
            </TabsTrigger>
          </TabsList>

          {/* Flagged Listings */}
          <TabsContent value="listings" className="space-y-4">
            {flaggedContent.listings.map((listing) => (
              <Card key={listing.id} className="border-2">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <img
                      src={listing.image}
                      alt={listing.title}
                      className="w-32 h-24 object-cover rounded-lg flex-shrink-0"
                    />

                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3>{listing.title}</h3>
                            <Badge style={{ backgroundColor: getSeverityColor(listing.severity) + '20', color: getSeverityColor(listing.severity) }}>
                              <AlertTriangle className="h-3 w-3 mr-1" />
                              {listing.severity}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600">by {listing.donor}</p>
                        </div>
                        <span className="text-sm text-gray-500">{listing.reportedAt}</span>
                      </div>

                      <div className="bg-red-50 p-3 rounded-lg border border-red-200 mb-4">
                        <div className="flex items-start gap-2">
                          <Flag className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-sm mb-1">
                              <strong>Reported by:</strong> {listing.flaggedBy}
                            </p>
                            <p className="text-sm mb-1">
                              <strong>Reason:</strong> {listing.reason}
                            </p>
                            <p className="text-sm text-gray-700">{listing.description}</p>
                          </div>
                        </div>
                      </div>

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" className="gap-1 mb-4">
                            <Eye className="h-4 w-4" />
                            View Full Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>Review Flagged Listing</DialogTitle>
                            <DialogDescription>Take appropriate action on this reported content</DialogDescription>
                          </DialogHeader>
                          
                          <div className="space-y-4">
                            <img src={listing.image} alt={listing.title} className="w-full h-64 object-cover rounded-lg" />
                            
                            <div>
                              <Label>Listing Information</Label>
                              <div className="mt-2 p-4 bg-gray-50 rounded-lg space-y-2">
                                <p><strong>Title:</strong> {listing.title}</p>
                                <p><strong>Donor:</strong> {listing.donor}</p>
                                <p><strong>Reported By:</strong> {listing.flaggedBy}</p>
                                <p><strong>Reason:</strong> {listing.reason}</p>
                                <p><strong>Description:</strong> {listing.description}</p>
                              </div>
                            </div>

                            <div>
                              <Label htmlFor="action">Action to Take</Label>
                              <Select defaultValue="">
                                <SelectTrigger className="mt-1">
                                  <SelectValue placeholder="Select action" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="dismiss">Dismiss Report</SelectItem>
                                  <SelectItem value="warn">Warn User</SelectItem>
                                  <SelectItem value="remove">Remove Listing</SelectItem>
                                  <SelectItem value="suspend">Suspend User</SelectItem>
                                  <SelectItem value="ban">Ban User</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>

                            <div>
                              <Label htmlFor="notes">Admin Notes</Label>
                              <Textarea id="notes" placeholder="Add notes about your decision..." className="mt-1" />
                            </div>
                          </div>

                          <DialogFooter className="gap-2">
                            <Button variant="outline" className="flex-1" onClick={() => handleApprove(listing)}>
                              <CheckCircle className="h-4 w-4 mr-2" />
                              Dismiss Report
                            </Button>
                            <Button className="flex-1" style={{ backgroundColor: 'var(--foodbridge-red)', color: 'white' }} onClick={() => handleAction(listing, 'Remove')}>
                              <XCircle className="h-4 w-4 mr-2" />
                              Take Action
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>

                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" onClick={() => handleApprove(listing)}>
                          Dismiss
                        </Button>
                        <Button size="sm" variant="outline">
                          Warn User
                        </Button>
                        <Button size="sm" style={{ backgroundColor: 'var(--foodbridge-red)', color: 'white' }}>
                          Remove Listing
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Flagged Users */}
          <TabsContent value="users" className="space-y-4">
            {flaggedContent.users.map((user) => (
              <Card key={user.id} className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3>{user.name}</h3>
                        <Badge variant="outline">{user.role}</Badge>
                        <Badge style={{ backgroundColor: getSeverityColor(user.severity) + '20', color: getSeverityColor(user.severity) }}>
                          <AlertTriangle className="h-3 w-3 mr-1" />
                          {user.severity}
                        </Badge>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{user.reportedAt}</span>
                  </div>

                  <div className="bg-red-50 p-3 rounded-lg border border-red-200 mb-4">
                    <div className="flex items-start gap-2">
                      <Flag className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm mb-1">
                          <strong>Reported by:</strong> {user.flaggedBy}
                        </p>
                        <p className="text-sm mb-1">
                          <strong>Reason:</strong> {user.reason}
                        </p>
                        <p className="text-sm text-gray-700">{user.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" onClick={() => handleApprove(user)}>
                      Dismiss
                    </Button>
                    <Button size="sm" variant="outline">
                      View User Profile
                    </Button>
                    <Button size="sm" variant="outline" style={{ color: 'var(--foodbridge-yellow)' }}>
                      Suspend Account
                    </Button>
                    <Button size="sm" style={{ backgroundColor: 'var(--foodbridge-red)', color: 'white' }}>
                      Ban User
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Flagged Messages */}
          <TabsContent value="messages" className="space-y-4">
            {flaggedContent.messages.map((message) => (
              <Card key={message.id} className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-sm">Message from {message.from} to {message.to}</h3>
                        <Badge style={{ backgroundColor: getSeverityColor(message.severity) + '20', color: getSeverityColor(message.severity) }}>
                          {message.severity}
                        </Badge>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{message.reportedAt}</span>
                  </div>

                  <div className="bg-red-50 p-3 rounded-lg border border-red-200 mb-4">
                    <div className="flex items-start gap-2">
                      <Flag className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm mb-1">
                          <strong>Reported by:</strong> {message.flaggedBy}
                        </p>
                        <p className="text-sm mb-1">
                          <strong>Reason:</strong> {message.reason}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 rounded-lg border mb-4">
                    <p className="text-sm text-gray-700">{message.preview}</p>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" onClick={() => handleApprove(message)}>
                      Dismiss
                    </Button>
                    <Button size="sm" variant="outline">
                      View Full Conversation
                    </Button>
                    <Button size="sm" style={{ backgroundColor: 'var(--foodbridge-red)', color: 'white' }}>
                      Delete Message
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
