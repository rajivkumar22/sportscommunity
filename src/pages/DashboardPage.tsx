import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import Layout from '../components/layout/Layout';
import { useAuth } from '../hooks/useAuth';

// Mock data for initial development
import { mockEvents, mockNotifications } from '../utils/mockData';

const DashboardPage: React.FC = () => {
  const { isAuthenticated, user } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  // Get upcoming events (next 3)
  const upcomingEvents = mockEvents
    .filter(event => new Date(event.date) > new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 3);
  
  // Get recent notifications (last 5)
  const recentNotifications = [...mockNotifications]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 5);
  
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Welcome back, {user?.name || 'Athlete'}!
          </h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            Here's what's happening in your sports community
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Stats */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Your Stats</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">12</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Events Attended</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold text-green-600 dark:text-green-400">5</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Connections</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">3</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Sports</p>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">85%</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Profile Completion</p>
                </div>
              </div>
            </div>
            
            {/* Upcoming Events */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Upcoming Events</h2>
              {upcomingEvents.length > 0 ? (
                <div className="space-y-4">
                  {upcomingEvents.map(event => (
                    <div key={event.id} className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-0 last:pb-0">
                      <h3 className="font-medium text-gray-900 dark:text-white">{event.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{event.description}</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {new Date(event.date).toLocaleDateString()} at {new Date(event.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                        <span className="text-xs font-medium text-blue-600 dark:text-blue-400">{event.location}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600 dark:text-gray-400">No upcoming events.</p>
              )}
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-8">
            {/* Profile Summary */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex items-center">
                <img
                  className="h-16 w-16 rounded-full"
                  src={user?.profilePicture || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
                  alt={user?.name || "User"}
                />
                <div className="ml-4">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{user?.name || 'Athlete'}</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{user?.email}</p>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">Quick Links</h3>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a href="/profile" className="text-blue-600 hover:text-blue-500 dark:text-blue-400 text-sm">
                      Edit Profile
                    </a>
                  </li>
                  <li>
                    <a href="/events/create" className="text-blue-600 hover:text-blue-500 dark:text-blue-400 text-sm">
                      Create Event
                    </a>
                  </li>
                  <li>
                    <a href="/players" className="text-blue-600 hover:text-blue-500 dark:text-blue-400 text-sm">
                      Find Players
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Recent Notifications */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Recent Notifications</h2>
              {recentNotifications.length > 0 ? (
                <div className="space-y-4">
                  {recentNotifications.map(notification => (
                    <div key={notification.id} className="flex items-start">
                      <div className={`w-2 h-2 mt-1.5 rounded-full ${notification.read ? 'bg-gray-300 dark:bg-gray-600' : 'bg-blue-500'}`}></div>
                      <div className="ml-3">
                        <p className="text-sm text-gray-800 dark:text-gray-200">{notification.message}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          {new Date(notification.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  ))}
                  <a href="/notifications" className="block text-center text-sm text-blue-600 hover:text-blue-500 dark:text-blue-400 mt-4">
                    View all notifications
                  </a>
                </div>
              ) : (
                <p className="text-gray-600 dark:text-gray-400">No recent notifications.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardPage;