
import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { History, Search, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { user } = useAuth();
  
  const dashboardCards = [
    {
      title: 'Search History',
      description: 'View your recent searches and search again.',
      icon: History,
      link: '/dashboard/search-history'
    },
    {
      title: 'Profile',
      description: 'View and edit your profile information.',
      icon: User,
      link: '/dashboard/profile'
    }
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Welcome, {user?.name || 'User'}!</h1>
        <p className="text-gray-500 mt-2">What would you like to do today?</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {dashboardCards.map((card) => (
          <Link to={card.link} key={card.title} className="block hover:no-underline">
            <Card className="transition-all hover:shadow-md hover:border-primary/50">
              <CardHeader className="flex flex-row items-center gap-4">
                <card.icon className="w-8 h-8 text-primary" />
                <div>
                  <CardTitle>{card.title}</CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-end">
                  <span className="text-sm text-primary">View →</span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
        
        <Card className="border-dashed border-2 hover:border-primary/50 transition-all">
          <Link to="/" className="block h-full p-6 flex flex-col items-center justify-center text-center hover:no-underline">
            <Search className="w-12 h-12 text-gray-400 mb-4" />
            <CardTitle className="text-xl mb-2">New Search</CardTitle>
            <CardDescription>Start a new search from the homepage</CardDescription>
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
