
import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

const Profile = () => {
  const { user, logout } = useAuth();

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">My Profile</h1>
      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Personal Information</h2>
        </CardHeader>
        <CardContent>
          {user ? (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-medium w-24">Name:</span>
                <span>{user.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium w-24">Email:</span>
                <span>{user.email}</span>
              </div>
              <div className="mt-6">
                <Button variant="destructive" onClick={logout}>Log Out</Button>
              </div>
            </div>
          ) : (
            <p className="text-gray-600">No user information available.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
