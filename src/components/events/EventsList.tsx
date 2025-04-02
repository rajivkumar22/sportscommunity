import React, { useState, useEffect } from 'react';
import { Search, Filter, Calendar } from 'lucide-react';
import EventCard from './EventCard';
import { Event } from '../../types';
import Input from '../ui/Input';
import Button from '../ui/Button';

interface EventsListProps {
  events: Event[];
  isLoading: boolean;
}

const EventsList: React.FC<EventsListProps> = ({ events, isLoading }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSport, setSelectedSport] = useState<string>('');
  const [filteredEvents, setFilteredEvents] = useState<Event[]>(events);
  
  // Get unique sports from all events
  const allSports = [...new Set(events.map(event => event.sportType))].sort();
  
  useEffect(() => {
    let result = events;
    
    // Filter by search term
    if (searchTerm) {
      result = result.filter(event => 
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by sport
    if (selectedSport) {
      result = result.filter(event => 
        event.sportType === selectedSport
      );
    }
    
    // Sort by date (newest first)
    result = [...result].sort((a, b) => 
      new Date(a.date).getTime() - new Date(b.date).getTime()
    );
    
    setFilteredEvents(result);
  }, [searchTerm, selectedSport, events]);
  
  const resetFilters = () => {
    setSearchTerm('');
    setSelectedSport('');
  };
  
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }
  
  return (
    <div>
      <div className="mb-8 bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
        <div className="flex flex-col md:flex-row md:items-end gap-4">
          <div className="flex-1">
            <Input
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              fullWidth
              className="dark:bg-gray-700"
              label="Search"
              icon={<Search size={18} />}
            />
          </div>
          
          <div className="w-full md:w-48">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Sport Type
            </label>
            <select
              value={selectedSport}
              onChange={(e) => setSelectedSport(e.target.value)}
              className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">All Sports</option>
              {allSports.map((sport) => (
                <option key={sport} value={sport}>
                  {sport}
                </option>
              ))}
            </select>
          </div>
          
          <Button
            variant="outline"
            onClick={resetFilters}
            className="mt-2 md:mt-0"
          >
            Reset Filters
          </Button>
        </div>
        
        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Showing {filteredEvents.length} of {events.length} events
          </div>
          <div className="flex items-center">
            <Calendar size={16} className="mr-1 text-gray-500 dark:text-gray-400" />
            <span className="text-sm text-gray-600 dark:text-gray-400">Upcoming Events</span>
          </div>
        </div>
      </div>
      
      {filteredEvents.length === 0 ? (
        <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">No events found</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Try adjusting your search or filter criteria</p>
          <Button variant="primary" className="mt-4" onClick={resetFilters}>
            Clear Filters
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
};

export default EventsList;