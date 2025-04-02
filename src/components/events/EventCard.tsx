import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import Card, { CardContent } from '../ui/Card';
import { Event } from '../../types';
import Button from '../ui/Button';

interface EventCardProps {
  event: Event;
}

const eventImages: { [key: string]: string } = {
  "Soccer Friendly Match": "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg",
  "Baseball Game": "https://images.pexels.com/photos/209959/pexels-photo-209959.jpeg",
  "Tennis Open Championship": "https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg",
  "Basketball Tournament": "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090&auto=format&fit=crop",
  "Marathon Run": "https://source.unsplash.com/800x600/?marathon,running",
};

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(date);
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }).format(date);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <Card className="h-full overflow-hidden bg-white dark:bg-gray-800 shadow-xl">
        {/* IMAGE SECTION */}
        <div className="relative">
          <img
            className="w-full h-48 object-cover"
            src={eventImages[event.title] || "https://source.unsplash.com/800x600/?sports"}
            alt={event.title}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = "https://source.unsplash.com/800x600/?sports";
            }}
          />
        </div>

        {/* EVENT DETAILS */}
        <CardContent>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{event.title}</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{event.description}</p>

          <div className="space-y-2 text-gray-700 dark:text-gray-300">
            <div className="flex items-center">
              <Calendar size={16} className="mr-2 text-emerald-600" />
              <span>{formatDate(event.date)}</span>
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-2 text-emerald-600" />
              <span>{formatTime(event.date)}</span>
            </div>
            <div className="flex items-center">
              <MapPin size={16} className="mr-2 text-emerald-600" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center">
              <Users size={16} className="mr-2 text-emerald-600" />
              <span>Participants: 24/50</span>
            </div>
          </div>

          <div className="mt-4 flex justify-between items-center">
            <span className="text-xs text-gray-500 dark:text-gray-400">Organized by: {event.organizer}</span>
            <Link to={`/events/${event.id}`}>
              <Button className="bg-emerald-600 text-white">View Details</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default EventCard;