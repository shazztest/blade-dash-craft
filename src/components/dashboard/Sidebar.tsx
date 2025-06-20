
import React from 'react';
import { cn } from '@/lib/utils';
import { 
  Home, 
  Users, 
  Store, 
  Gift, 
  BarChart3, 
  Settings, 
  FileText, 
  Target,
  MessageSquare,
  Calendar,
  X,
  UserCheck
} from 'lucide-react';
import PlatformStats from './PlatformStats';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  currentPage: string;
  onPageChange: (page: string) => void;
}

const navigation = [
  { name: 'Dashboard', icon: Home, href: 'dashboard', current: false },
  { name: 'Stores', icon: Store, href: 'stores', current: false },
  { name: 'Offers', icon: Gift, href: 'offers', current: false },
  { name: 'Users', icon: Users, href: 'users', current: false },
  { name: 'Claims', icon: Target, href: 'claims', current: false },
  { name: 'Analytics', icon: BarChart3, href: 'analytics', current: false },
  { name: 'Approvals', icon: UserCheck, href: 'approvals', current: false },
  { name: 'Messages', icon: MessageSquare, href: 'messages', current: false },
  { name: 'Calendar', icon: Calendar, href: 'calendar', current: false },
  { name: 'Reports', icon: FileText, href: 'reports', current: false },
  { name: 'Settings', icon: Settings, href: 'settings', current: false },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, currentPage, onPageChange }) => {
  const handleNavigation = (href: string) => {
    onPageChange(href);
    if (window.innerWidth < 1024) {
      onClose();
    }
  };

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
          <h1 className="text-xl font-bold text-foreground">Offers Admin</h1>
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
                <button
                  onClick={() => handleNavigation(item.href)}
                  className={cn(
                    "w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                    currentPage === item.href
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  )}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="absolute bottom-6 left-3 right-3">
          <PlatformStats />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
