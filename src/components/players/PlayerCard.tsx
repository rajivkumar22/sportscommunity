import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Medal } from 'lucide-react';
import { motion } from 'framer-motion';
import Card, { CardContent } from '../ui/Card';
import { Player } from '../../types';
import Button from '../ui/Button';

interface PlayerCardProps {
  player: Player;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => {
  const getSkillLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-gradient-to-r from-green-400 to-emerald-500 text-white';
      case 'Intermediate':
        return 'bg-gradient-to-r from-blue-400 to-indigo-500 text-white';
      case 'Advanced':
        return 'bg-gradient-to-r from-purple-400 to-pink-500 text-white';
      case 'Professional':
        return 'bg-gradient-to-r from-red-400 to-rose-500 text-white';
      default:
        return 'bg-gradient-to-r from-gray-400 to-gray-500 text-white';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <Card hoverable className="h-full bg-white dark:bg-gray-800 shadow-xl overflow-hidden">
        <div className="relative pb-48">
          <img
            className="absolute h-full w-full object-cover transform hover:scale-110 transition-transform duration-700"
            src={`${player.profilePicture}&random=${player.id}`}
            alt={player.name}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        </div>
        
        <CardContent>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{player.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">Age: {player.age}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getSkillLevelColor(player.skillLevel)}`}>
                {player.skillLevel}
              </span>
            </div>
            
            <div className="mt-4">
              <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100">Sports</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {player.sports.map((sport, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-full text-xs font-medium text-emerald-600 dark:text-emerald-400"
                  >
                    {sport}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mt-4 flex justify-between items-center">
              <div className="flex space-x-3">
                {player.socialMedia?.facebook && (
                  <motion.a 
                    whileHover={{ scale: 1.2 }}
                    href={player.socialMedia.facebook} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  >
                    <Facebook size={18} />
                  </motion.a>
                )}
                {player.socialMedia?.instagram && (
                  <motion.a 
                    whileHover={{ scale: 1.2 }}
                    href={player.socialMedia.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-400"
                  >
                    <Instagram size={18} />
                  </motion.a>
                )}
                {player.socialMedia?.youtube && (
                  <motion.a 
                    whileHover={{ scale: 1.2 }}
                    href={player.socialMedia.youtube} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400"
                  >
                    <Youtube size={18} />
                  </motion.a>
                )}
              </div>
              <Link to={`/players/${player.id}`}>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white transform hover:scale-105 transition-all duration-300"
                >
                  View Profile
                </Button>
              </Link>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PlayerCard;