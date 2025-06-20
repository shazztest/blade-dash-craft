
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  CheckCircle, 
  XCircle, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar,
  Star,
  Gift,
  Target
} from 'lucide-react';

interface Store {
  id: number;
  name: string;
  email: string;
  phone: string;
  category: string;
  offers: number;
  totalClaims: number;
  status: string;
  joinDate: string;
  address: string;
  rating: number;
}

interface StoreDetailsModalProps {
  store: Store | null;
  isOpen: boolean;
  onClose: () => void;
  onApprove: (storeId: number) => void;
  onReject: (storeId: number) => void;
}

const StoreDetailsModal: React.FC<StoreDetailsModalProps> = ({
  store,
  isOpen,
  onClose,
  onApprove,
  onReject
}) => {
  if (!store) return null;

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

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>Store Details</span>
            {getStatusBadge(store.status)}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold">{store.name}</h3>
                <Badge variant="outline" className="mt-2">{store.category}</Badge>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{store.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{store.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{store.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Joined: {new Date(store.joinDate).toLocaleDateString()}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Performance Metrics */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Performance Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Gift className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Active Offers</p>
                    <p className="text-2xl font-bold">{store.offers}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Target className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total Claims</p>
                    <p className="text-2xl font-bold">{store.totalClaims}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <Star className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Rating</p>
                    <p className="text-2xl font-bold">
                      {store.rating > 0 ? store.rating : 'N/A'}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          {store.status === 'pending' && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Approval Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Button 
                    onClick={() => onApprove(store.id)}
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
                  >
                    <CheckCircle className="h-4 w-4" />
                    Approve Store
                  </Button>
                  <Button 
                    onClick={() => onReject(store.id)}
                    variant="destructive"
                    className="flex items-center gap-2"
                  >
                    <XCircle className="h-4 w-4" />
                    Reject Store
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StoreDetailsModal;
