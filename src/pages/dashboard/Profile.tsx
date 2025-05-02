
import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';

const Profile = () => {
  const { user, logout } = useAuth();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Profile</h1>
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
          <div className="space-y-4">
            {user ? (
              <div className="space-y-2">
                <p><span className="font-medium">Name:</span> {user.name}</p>
                <p><span className="font-medium">Email:</span> {user.email}</p>
              </div>
            ) : (
              <p className="text-gray-600">No user information available.</p>
            )}
          </div>
          <div className="mt-6">
            <Button variant="destructive" onClick={logout}>Log Out</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
