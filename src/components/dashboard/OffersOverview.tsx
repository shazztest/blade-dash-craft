
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Eye, Edit, Trash2 } from 'lucide-react';

const offers = [
  {
    id: 1,
    title: '20% off Pizza',
    store: 'Pizza Palace',
    claims: 45,
    status: 'active',
    expiry: '2024-07-15'
  },
  {
    id: 2,
    title: 'Free Coffee',
    store: 'Cafe Central',
    claims: 23,
    status: 'active',
    expiry: '2024-07-10'
  },
  {
    id: 3,
    title: 'Buy 2 Get 1 Free',
    store: 'Book Store',
    claims: 67,
    status: 'expired',
    expiry: '2024-06-30'
  },
  {
    id: 4,
    title: '15% off Electronics',
    store: 'Tech Hub',
    claims: 89,
    status: 'active',
    expiry: '2024-08-01'
  },
  {
    id: 5,
    title: 'Summer Sale 30%',
    store: 'Fashion Hub',
    claims: 12,
    status: 'pending',
    expiry: '2024-07-20'
  },
];

const OffersOverview = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Offers</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Offer</TableHead>
              <TableHead>Store</TableHead>
              <TableHead>Claims</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {offers.map((offer) => (
              <TableRow key={offer.id}>
                <TableCell>
                  <div>
                    <p className="font-medium">{offer.title}</p>
                    <p className="text-xs text-muted-foreground">Expires: {offer.expiry}</p>
                  </div>
                </TableCell>
                <TableCell>{offer.store}</TableCell>
                <TableCell>{offer.claims}</TableCell>
                <TableCell>
                  <Badge 
                    variant={
                      offer.status === 'active' ? 'default' : 
                      offer.status === 'expired' ? 'destructive' : 'secondary'
                    }
                  >
                    {offer.status}
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
                    <Button variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
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

export default OffersOverview;
