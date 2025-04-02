import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PlayerCard from '../players/PlayerCard';
import { Player } from '../../types';
import Button from '../ui/Button';

interface FeaturedPlayersProps {
  players: Player[];
  isLoading: boolean;
}

const FeaturedPlayers: React.FC<FeaturedPlayersProps> = ({ players, isLoading }) => {
  // Show only the first 4 players
  const featuredPlayers = players.slice(0, 4);
  
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }
  
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Featured Players</h2>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
              Discover top athletes from various sports
            </p>
          </div>
          <Link to="/players">
            <Button variant="outline" className="hidden sm:flex items-center">
              View All Players
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredPlayers.map((player) => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>
        
        <div className="mt-10 text-center sm:hidden">
          <Link to="/players">
            <Button variant="outline">
              View All Players
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPlayers;