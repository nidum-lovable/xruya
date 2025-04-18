
import React from 'react';

const Profile = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Profile</h1>
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
          <div className="space-y-4">
            <p className="text-gray-600">This is the profile section where user information will be displayed.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
