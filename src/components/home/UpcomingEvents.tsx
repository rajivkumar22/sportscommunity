import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import EventCard from '../events/EventCard';
import { Event } from '../../types';
import Button from '../ui/Button';

interface UpcomingEventsProps {
  events: Event[];
  isLoading: boolean;
}

const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ events, isLoading }) => {
  // Show only the first 3 upcoming events
  const upcomingEvents = events
    .filter(event => new Date(event.date) > new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 3);
  
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }
  
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Upcoming Events</h2>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
              Don't miss out on these exciting sports events
            </p>
          </div>
          <Link to="/events">
            <Button variant="outline" className="hidden sm:flex items-center">
              View All Events
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        
        <div className="mt-10 text-center sm:hidden">
          <Link to="/events">
            <Button variant="outline">
              View All Events
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;