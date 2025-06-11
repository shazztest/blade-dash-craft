
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Eye, Edit, CheckCircle, XCircle } from 'lucide-react';

const stores = [
  {
    id: 1,
    name: 'Pizza Palace',
    email: 'contact@pizzapalace.com',
    offers: 5,
    status: 'approved',
    joinDate: '2024-01-15'
  },
  {
    id: 2,
    name: 'Cafe Central',
    email: 'info@cafecentral.com',
    offers: 3,
    status: 'approved',
    joinDate: '2024-02-20'
  },
  {
    id: 3,
    name: 'Fashion Hub',
    email: 'hello@fashionhub.com',
    offers: 1,
    status: 'pending',
    joinDate: '2024-06-10'
  },
  {
    id: 4,
    name: 'Tech Hub',
    email: 'support@techhub.com',
    offers: 8,
    status: 'approved',
    joinDate: '2024-03-05'
  },
  {
    id: 5,
    name: 'Book Store',
    email: 'info@bookstore.com',
    offers: 2,
    status: 'suspended',
    joinDate: '2024-04-12'
  },
];

const StoreManagement = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Store Management</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Store</TableHead>
              <TableHead>Offers</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {stores.map((store) => (
              <TableRow key={store.id}>
                <TableCell>
                  <div>
                    <p className="font-medium">{store.name}</p>
                    <p className="text-xs text-muted-foreground">{store.email}</p>
                  </div>
                </TableCell>
                <TableCell>{store.offers}</TableCell>
                <TableCell>
                  <Badge 
                    variant={
                      store.status === 'approved' ? 'default' : 
                      store.status === 'suspended' ? 'destructive' : 'secondary'
                    }
                  >
                    {store.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-1">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    {store.status === 'pending' && (
                      <>
                        <Button variant="ghost" size="sm" className="text-green-600">
                          <CheckCircle className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-600">
                          <XCircle className="h-4 w-4" />
                        </Button>
                      </>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default StoreManagement;
