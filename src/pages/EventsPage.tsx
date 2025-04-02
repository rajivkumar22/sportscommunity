import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../components/layout/Layout';
import EventsList from '../components/events/EventsList';
import { RootState, AppDispatch } from '../store';
import { fetchEvents } from '../store/slices/eventsSlice';

// Mock data for initial development
import { mockEvents } from '../utils/mockData';

const EventsPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { events, isLoading } = useSelector((state: RootState) => state.events);
  
  useEffect(() => {
    // In a real app, we would fetch data from the API
    // dispatch(fetchEvents());
    
    // For now, we'll use mock data
  }, [dispatch]);
  
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Upcoming Events</h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            Discover and participate in sports events near you
          </p>
        </div>
        
        <EventsList events={mockEvents} isLoading={isLoading} />
      </div>
    </Layout>
  );
};

export default EventsPage;