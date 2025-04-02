import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Mail, MapPin, Calendar, Award } from 'lucide-react';
import Button from '../ui/Button';
import { Player } from '../../types';

interface PlayerProfileProps {
  player?: Player;
  isEditable?: boolean;
  onEdit?: () => void;
}

const PlayerProfile: React.FC<PlayerProfileProps> = ({ player, isEditable, onEdit }) => {
  if (!player) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Player not found</h2>
        <Link to="/players" className="mt-4 text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
          Back to Players
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
      {/* Cover Image */}
      <div className="h-60 overflow-hidden relative">
        <img
          src={`https://source.unsplash.com/1600x400/?${player.sports[0].toLowerCase()},sport`}
          alt="Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      {/* Profile Section */}
      <div className="relative px-6 py-8">
        {/* Profile Picture */}
        <div className="absolute -top-20 left-6">
          <div className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 overflow-hidden shadow-lg">
            <img
              src={player.profilePicture}
              alt={player.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end mb-4">
          {isEditable ? (
            <Button onClick={onEdit} className="bg-gradient-to-r from-indigo-600 to-purple-600">
              Edit Profile
            </Button>
          ) : (
            <Button className="bg-gradient-to-r from-indigo-600 to-purple-600">
              Connect
            </Button>
          )}
        </div>

        {/* Basic Info */}
        <div className="mt-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{player.name}</h1>
          <div className="mt-2 flex items-center text-gray-600 dark:text-gray-400">
            <MapPin size={18} className="mr-2" />
            <span>New York, USA</span>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{player.age}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Age</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{player.sports.length}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Sports</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{player.skillLevel}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Level</div>
          </div>
        </div>

        {/* Sports */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Sports</h2>
          <div className="flex flex-wrap gap-2">
            {player.sports.map((sport, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 dark:from-indigo-900 dark:to-purple-900 dark:text-indigo-200"
              >
                {sport}
              </span>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Connect</h2>
          <div className="flex space-x-4">
            {player.socialMedia?.facebook && (
              <a
                href={player.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              >
                <Facebook size={24} />
              </a>
            )}
            {player.socialMedia?.instagram && (
              <a
                href={player.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-400 transition-colors"
              >
                <Instagram size={24} />
              </a>
            )}
            {player.socialMedia?.youtube && (
              <a
                href={player.socialMedia.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 transition-colors"
              >
                <Youtube size={24} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerProfile;