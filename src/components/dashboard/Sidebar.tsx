
import React from 'react';
import { cn } from '@/lib/utils';
import { 
  Home, 
  Users, 
  Package, 
  BarChart3, 
  Settings, 
  FileText, 
  ShoppingCart,
  MessageSquare,
  Calendar,
  X
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigation = [
  { name: 'Dashboard', icon: Home, href: '#', current: true },
  { name: 'Users', icon: Users, href: '#', current: false },
  { name: 'Products', icon: Package, href: '#', current: false },
  { name: 'Orders', icon: ShoppingCart, href: '#', current: false },
  { name: 'Analytics', icon: BarChart3, href: '#', current: false },
  { name: 'Messages', icon: MessageSquare, href: '#', current: false },
  { name: 'Calendar', icon: Calendar, href: '#', current: false },
  { name: 'Reports', icon: FileText, href: '#', current: false },
  { name: 'Settings', icon: Settings, href: '#', current: false },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-card border-r border-border transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:inset-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-border">
          <h1 className="text-xl font-bold text-foreground">AdminPro</h1>
          <button
            onClick={onClose}
            className="lg:hidden p-2 rounded-md text-muted-foreground hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <nav className="mt-6 px-3">
          <ul className="space-y-2">
            {navigation.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={cn(
                    "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                    item.current
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  )}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="absolute bottom-6 left-3 right-3">
          <div className="bg-accent rounded-lg p-4">
            <h3 className="text-sm font-medium text-foreground">Upgrade to Pro</h3>
            <p className="text-xs text-muted-foreground mt-1">
              Get access to advanced features and unlimited projects.
            </p>
            <button className="mt-3 w-full bg-primary text-primary-foreground text-xs py-2 px-3 rounded-md hover:bg-primary/90 transition-colors">
              Upgrade Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
