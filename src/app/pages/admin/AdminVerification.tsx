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
import { CheckCircle, XCircle, Clock, Search, Store, Users, Truck, Mail, Phone, MapPin, FileText } from 'lucide-react';
import { toast } from 'sonner';

export function AdminVerification() {
  const [searchQuery, setSearchQuery] = useState('');

  const pendingVerifications = {
    donors: [
      {
        id: 1,
        name: 'Green Market Grocery',
        type: 'Restaurant',
        email: 'contact@greenmarket.com',
        phone: '+1 234-567-8900',
        address: '123 Main St, Downtown',
        registeredAt: '2 hours ago',
        documents: ['Business License', 'Tax ID'],
        status: 'pending',
      },
      {
        id: 2,
        name: 'Fresh Bites Cafe',
        type: 'Cafe',
        email: 'hello@freshbites.com',
        phone: '+1 234-567-8901',
        address: '456 Oak Ave, Midtown',
        registeredAt: '5 hours ago',
        documents: ['Business License', 'Health Certificate'],
        status: 'pending',
      },
    ],
    recipients: [
      {
        id: 3,
        name: 'Hope Shelter',
        type: 'NGO',
        email: 'info@hopeshelter.org',
        phone: '+1 234-567-8902',
        address: '789 Hope Rd, Uptown',
        registeredAt: '1 hour ago',
        documents: ['501(c)(3) Certificate', 'Registration'],
        status: 'pending',
      },
      {
        id: 4,
        name: 'Community Care Center',
        type: 'Shelter',
        email: 'contact@communitycare.org',
        phone: '+1 234-567-8903',
        address: '321 Care St, Southside',
        registeredAt: '3 hours ago',
        documents: ['Registration Certificate'],
        status: 'pending',
      },
    ],
    volunteers: [
      {
        id: 5,
        name: 'John Smith',
        type: 'Individual',
        email: 'john.smith@email.com',
        phone: '+1 234-567-8904',
        address: '555 Volunteer Lane',
        registeredAt: '30 min ago',
        documents: ['Driver License', 'Background Check'],
        status: 'pending',
      },
      {
        id: 6,
        name: 'Sarah Johnson',
        type: 'Individual',
        email: 'sarah.j@email.com',
        phone: '+1 234-567-8905',
        address: '777 Helper Ave',
        registeredAt: '45 min ago',
        documents: ['Driver License', 'Vehicle Insurance'],
        status: 'pending',
      },
    ],
  };

  const handleApprove = (user: any) => {
    toast.success(`${user.name} has been verified and approved!`);
  };

  const handleReject = (user: any) => {
    toast.error(`${user.name} verification has been rejected.`);
  };

  const VerificationCard = ({ user, roleIcon: RoleIcon }: { user: any; roleIcon: any }) => (
    <Card className="border-2">
      <CardContent className="pt-6">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--foodbridge-blue)' + '20' }}>
            <RoleIcon className="h-7 w-7" style={{ color: 'var(--foodbridge-blue)' }} />
          </div>

          <div className="flex-1">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="mb-1">{user.name}</h3>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">{user.type}</Badge>
                  <Badge style={{ backgroundColor: 'var(--foodbridge-yellow)' + '20', color: 'var(--foodbridge-yellow)' }}>
                    <Clock className="h-3 w-3 mr-1" />
                    Pending
                  </Badge>
                </div>
              </div>
              <span className="text-sm text-gray-500">{user.registeredAt}</span>
            </div>

            <div className="space-y-2 text-sm mb-4">
              <div className="flex items-center gap-2 text-gray-600">
                <Mail className="h-4 w-4" />
                <span>{user.email}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Phone className="h-4 w-4" />
                <span>{user.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="h-4 w-4" />
                <span>{user.address}</span>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-2">Submitted Documents:</p>
              <div className="flex flex-wrap gap-2">
                {user.documents.map((doc: string) => (
                  <Badge key={doc} variant="outline" className="gap-1">
                    <FileText className="h-3 w-3" />
                    {doc}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex gap-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="flex-1">
                    View Details
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>{user.name} - Verification Details</DialogTitle>
                    <DialogDescription>Review all submitted information and documents</DialogDescription>
                  </DialogHeader>
                  
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label>Name</Label>
                        <p className="mt-1">{user.name}</p>
                      </div>
                      <div>
                        <Label>Type</Label>
                        <p className="mt-1">{user.type}</p>
                      </div>
                      <div>
                        <Label>Email</Label>
                        <p className="mt-1">{user.email}</p>
                      </div>
                      <div>
                        <Label>Phone</Label>
                        <p className="mt-1">{user.phone}</p>
                      </div>
                      <div className="md:col-span-2">
                        <Label>Address</Label>
                        <p className="mt-1">{user.address}</p>
                      </div>
                    </div>

                    <div>
                      <Label>Documents</Label>
                      <div className="mt-2 space-y-2">
                        {user.documents.map((doc: string) => (
                          <div key={doc} className="flex items-center justify-between p-3 border rounded-lg">
                            <span className="flex items-center gap-2">
                              <FileText className="h-4 w-4" />
                              {doc}
                            </span>
                            <Button size="sm" variant="link">
                              View File
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="admin-notes">Admin Notes (Optional)</Label>
                      <Textarea id="admin-notes" placeholder="Add any notes or comments..." className="mt-1" />
                    </div>
                  </div>

                  <DialogFooter className="gap-2">
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => handleReject(user)}
                    >
                      <XCircle className="h-4 w-4 mr-2" />
                      Reject
                    </Button>
                    <Button
                      className="flex-1"
                      style={{ backgroundColor: 'var(--foodbridge-green)', color: 'white' }}
                      onClick={() => handleApprove(user)}
                    >
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Approve
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <Button
                variant="outline"
                className="gap-1"
                onClick={() => handleReject(user)}
              >
                <XCircle className="h-4 w-4" />
                Reject
              </Button>
              <Button
                style={{ backgroundColor: 'var(--foodbridge-green)', color: 'white' }}
                className="gap-1"
                onClick={() => handleApprove(user)}
              >
                <CheckCircle className="h-4 w-4" />
                Approve
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <Layout role="admin">
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl mb-1">User Verification</h1>
          <p className="text-gray-600">Review and approve pending user verifications</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl mb-1" style={{ color: 'var(--foodbridge-green)' }}>{pendingVerifications.donors.length}</div>
              <div className="text-sm text-gray-600">Pending Donors</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl mb-1" style={{ color: 'var(--foodbridge-orange)' }}>{pendingVerifications.recipients.length}</div>
              <div className="text-sm text-gray-600">Pending Recipients</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl mb-1" style={{ color: 'var(--foodbridge-blue)' }}>{pendingVerifications.volunteers.length}</div>
              <div className="text-sm text-gray-600">Pending Volunteers</div>
            </CardContent>
          </Card>
        </div>

        {/* Search */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search by name, email, or phone..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Verification Lists */}
        <Tabs defaultValue="donors" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="donors">
              Donors ({pendingVerifications.donors.length})
            </TabsTrigger>
            <TabsTrigger value="recipients">
              Recipients ({pendingVerifications.recipients.length})
            </TabsTrigger>
            <TabsTrigger value="volunteers">
              Volunteers ({pendingVerifications.volunteers.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="donors" className="space-y-4">
            {pendingVerifications.donors.map((user) => (
              <VerificationCard key={user.id} user={user} roleIcon={Store} />
            ))}
          </TabsContent>

          <TabsContent value="recipients" className="space-y-4">
            {pendingVerifications.recipients.map((user) => (
              <VerificationCard key={user.id} user={user} roleIcon={Users} />
            ))}
          </TabsContent>

          <TabsContent value="volunteers" className="space-y-4">
            {pendingVerifications.volunteers.map((user) => (
              <VerificationCard key={user.id} user={user} roleIcon={Truck} />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
