
import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import { useAuth } from '@/hooks/useAuth';
import { toast } from '@/components/ui/use-toast';
import { PanelLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DashboardLayout = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication required",
        description: "Please log in to access this area.",
        variant: "destructive"
      });
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen w-full">
        <DashboardSidebar />
        <main className="flex-1 bg-gray-50 p-6">
          <div className="max-w-5xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
