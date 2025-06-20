
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Eye, Edit, CheckCircle, XCircle, Search, Filter, Plus, MoreHorizontal } from 'lucide-react';
import StoreDetailsModal from './StoreDetailsModal';

const stores = [
  {
    id: 1,
    name: 'Pizza Palace',
    email: 'contact@pizzapalace.com',
    phone: '+1 234 567 8901',
    category: 'Restaurant',
    offers: 5,
    totalClaims: 125,
    status: 'approved',
    joinDate: '2024-01-15',
    address: '123 Main St, City',
    rating: 4.5
  },
  {
    id: 2,
    name: 'Cafe Central',
    email: 'info@cafecentral.com',
    phone: '+1 234 567 8902',
    category: 'Cafe',
    offers: 3,
    totalClaims: 89,
    status: 'approved',
    joinDate: '2024-02-20',
    address: '456 Oak Ave, City',
    rating: 4.2
  },
  {
    id: 3,
    name: 'Fashion Hub',
    email: 'hello@fashionhub.com',
    phone: '+1 234 567 8903',
    category: 'Retail',
    offers: 1,
    totalClaims: 12,
    status: 'pending',
    joinDate: '2024-06-10',
    address: '789 Style Blvd, City',
    rating: 0
  },
  {
    id: 4,
    name: 'Tech Hub',
    email: 'support@techhub.com',
    phone: '+1 234 567 8904',
    category: 'Electronics',
    offers: 8,
    totalClaims: 234,
    status: 'approved',
    joinDate: '2024-03-05',
    address: '321 Tech St, City',
    rating: 4.8
  },
  {
    id: 5,
    name: 'Book Store',
    email: 'info@bookstore.com',
    phone: '+1 234 567 8905',
    category: 'Books',
    offers: 2,
    totalClaims: 45,
    status: 'suspended',
    joinDate: '2024-04-12',
    address: '654 Reading Ave, City',
    rating: 3.9
  },
  {
    id: 6,
    name: 'Fitness Center',
    email: 'contact@fitnesscenter.com',
    phone: '+1 234 567 8906',
    category: 'Health',
    offers: 4,
    totalClaims: 78,
    status: 'approved',
    joinDate: '2024-05-18',
    address: '987 Workout Way, City',
    rating: 4.6
  }
];

const StoresPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedStore, setSelectedStore] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [storesList, setStoresList] = useState(stores);

  const filteredStores = storesList.filter(store => {
    const matchesSearch = store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         store.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         store.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || store.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return <Badge variant="default" className="bg-green-100 text-green-800">Approved</Badge>;
      case 'pending':
        return <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      case 'suspended':
        return <Badge variant="destructive">Suspended</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const handleViewStore = (store) => {
    setSelectedStore(store);
    setIsModalOpen(true);
  };

  const handleApproveStore = (storeId: number) => {
    setStoresList(prev => prev.map(store => 
      store.id === storeId ? { ...store, status: 'approved' } : store
    ));
    console.log(`Store ${storeId} approved`);
    setIsModalOpen(false);
  };

  const handleRejectStore = (storeId: number) => {
    setStoresList(prev => prev.map(store => 
      store.id === storeId ? { ...store, status: 'suspended' } : store
    ));
    console.log(`Store ${storeId} rejected`);
    setIsModalOpen(false);
  };

  const handleQuickApprove = (storeId: number) => {
    setStoresList(prev => prev.map(store => 
      store.id === storeId ? { ...store, status: 'approved' } : store
    ));
    console.log(`Store ${storeId} quick approved`);
  };

  const handleQuickReject = (storeId: number) => {
    setStoresList(prev => prev.map(store => 
      store.id === storeId ? { ...store, status: 'suspended' } : store
    ));
    console.log(`Store ${storeId} quick rejected`);
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Store Management</h1>
        <p className="text-muted-foreground mt-2">Manage and monitor all registered stores on your platform.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Stores</p>
                <p className="text-3xl font-bold">{storesList.length}</p>
              </div>
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <div className="h-6 w-6 bg-blue-500 rounded"></div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Approved</p>
                <p className="text-3xl font-bold text-green-600">{storesList.filter(s => s.status === 'approved').length}</p>
              </div>
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Pending</p>
                <p className="text-3xl font-bold text-yellow-600">{storesList.filter(s => s.status === 'pending').length}</p>
              </div>
              <div className="h-12 w-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <div className="h-6 w-6 bg-yellow-500 rounded"></div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Suspended</p>
                <p className="text-3xl font-bold text-red-600">{storesList.filter(s => s.status === 'suspended').length}</p>
              </div>
              <div className="h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center">
                <XCircle className="h-6 w-6 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search stores..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2 border rounded-md bg-background"
              >
                <option value="all">All Status</option>
                <option value="approved">Approved</option>
                <option value="pending">Pending</option>
                <option value="suspended">Suspended</option>
              </select>
            </div>
            
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Add Store
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Stores Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Stores ({filteredStores.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Store Details</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Offers</TableHead>
                <TableHead>Claims</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Join Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStores.map((store) => (
                <TableRow key={store.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{store.name}</p>
                      <p className="text-xs text-muted-foreground">{store.email}</p>
                      <p className="text-xs text-muted-foreground">{store.phone}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{store.category}</Badge>
                  </TableCell>
                  <TableCell>{store.offers}</TableCell>
                  <TableCell>{store.totalClaims}</TableCell>
                  <TableCell>
                    {store.rating > 0 ? (
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500">★</span>
                        <span>{store.rating}</span>
                      </div>
                    ) : (
                      <span className="text-muted-foreground">No rating</span>
                    )}
                  </TableCell>
                  <TableCell>
                    {getStatusBadge(store.status)}
                  </TableCell>
                  <TableCell>{new Date(store.joinDate).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <div className="flex space-x-1">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleViewStore(store)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      {store.status === 'pending' && (
                        <>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-green-600"
                            onClick={() => handleQuickApprove(store.id)}
                          >
                            <CheckCircle className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-red-600"
                            onClick={() => handleQuickReject(store.id)}
                          >
                            <XCircle className="h-4 w-4" />
                          </Button>
                        </>
                      )}
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <StoreDetailsModal
        store={selectedStore}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onApprove={handleApproveStore}
        onReject={handleRejectStore}
      />
    </div>
  );
};

export default StoresPage;
