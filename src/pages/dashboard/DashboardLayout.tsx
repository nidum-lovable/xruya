
import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import { useAuth } from '@/hooks/useAuth';
import { toast } from '@/components/ui/use-toast';
import { SidebarTrigger } from '@/components/ui/sidebar';

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
        <main className="flex-1 bg-gray-50">
          <div className="flex items-center p-4 border-b">
            <SidebarTrigger className="mr-2" />
            <h1 className="text-xl font-semibold">Dashboard</h1>
          </div>
          <div className="p-4">
            <Outlet />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
