import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../components/layout/Layout';
import NotificationsList from '../components/notifications/NotificationsList';
import { RootState, AppDispatch } from '../store';
import { fetchNotifications, markAsRead, markNotificationAsRead } from '../store/slices/notificationsSlice';

// Mock data for initial development
import { mockNotifications } from '../utils/mockData';

const NotificationsPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { notifications, isLoading } = useSelector((state: RootState) => state.notifications);
  
  useEffect(() => {
    // In a real app, we would fetch data from the API
    // dispatch(fetchNotifications());
    
    // For now, we'll use mock data
  }, [dispatch]);
  
  const handleMarkAsRead = (id: string) => {
    // In a real app, we would dispatch the API action
    // dispatch(markAsRead(id));
    
    // For now, we'll just update the local state
    dispatch(markNotificationAsRead(id));
  };
  
  const handleMarkAllAsRead = () => {
    // In a real app, we would make an API call
    // For now, we'll just update all notifications in our mock data
    mockNotifications.forEach(notification => {
      if (!notification.read) {
        dispatch(markNotificationAsRead(notification.id));
      }
    });
  };
  
  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Notifications</h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            Stay updated with the latest events and activities
          </p>
        </div>
        
        <NotificationsList 
          notifications={mockNotifications} 
          isLoading={isLoading}
          onMarkAsRead={handleMarkAsRead}
          onMarkAllAsRead={handleMarkAllAsRead}
        />
      </div>
    </Layout>
  );
};

export default NotificationsPage;