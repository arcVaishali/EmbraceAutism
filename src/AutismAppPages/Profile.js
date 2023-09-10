import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();

    if (!isAuthenticated) {
        // Handle the case when the user is not authenticated
        return (
            <div className="bg-gradient-to-r from-[#12E0B7] to-[#07F76B]">
                <div className="max-w-2xl mx-auto py-8">
                    <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                        User Profile
                    </h1>
                    <div className="mt-6">
                        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                            <p className="text-2xl font-semibold text-gray-900">
                                Please log in to view your profile.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gradient-to-r from-[#12E0B7] to-[#07F76B]">
            <div className="max-w-2xl mx-auto py-8">
                <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                    User Profile
                </h1>
                <div className="mt-6">
                    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                        <p className="text-2xl font-semibold text-gray-900">
                            Welcome, {user.name}!
                        </p>
                        <p className="mt-4 text-lg text-gray-600">
                            Email: {user.email}
                        </p>
                        <p className="mt-4 text-lg text-gray-600">
                            User ID: {user.sub}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
