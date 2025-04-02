import React, { useState, useEffect } from 'react';
import { Search, Filter } from 'lucide-react';
import PlayerCard from './PlayerCard';
import { Player } from '../../types';
import Input from '../ui/Input';
import Button from '../ui/Button';

interface PlayersListProps {
  players: Player[];
  isLoading: boolean;
}

const PlayersList: React.FC<PlayersListProps> = ({ players, isLoading }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSport, setSelectedSport] = useState<string>('');
  const [selectedSkillLevel, setSelectedSkillLevel] = useState<string>('');
  const [filteredPlayers, setFilteredPlayers] = useState<Player[]>(players);
  
  // Get unique sports from all players
  const allSports = [...new Set(players.flatMap(player => player.sports))].sort();
  
  // Get unique skill levels from all players
  const skillLevels = [...new Set(players.map(player => player.skillLevel))];
  
  useEffect(() => {
    let result = players;
    
    // Filter by search term
    if (searchTerm) {
      result = result.filter(player => 
        player.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by sport
    if (selectedSport) {
      result = result.filter(player => 
        player.sports.includes(selectedSport)
      );
    }
    
    // Filter by skill level
    if (selectedSkillLevel) {
      result = result.filter(player => 
        player.skillLevel === selectedSkillLevel
      );
    }
    
    setFilteredPlayers(result);
  }, [searchTerm, selectedSport, selectedSkillLevel, players]);
  
  const resetFilters = () => {
    setSearchTerm('');
    setSelectedSport('');
    setSelectedSkillLevel('');
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
              placeholder="Search players..."
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
              Sport
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
          
          <div className="w-full md:w-48">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Skill Level
            </label>
            <select
              value={selectedSkillLevel}
              onChange={(e) => setSelectedSkillLevel(e.target.value)}
              className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">All Levels</option>
              {skillLevels.map((level) => (
                <option key={level} value={level}>
                  {level}
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
            Showing {filteredPlayers.length} of {players.length} players
          </div>
          <div className="flex items-center">
            <Filter size={16} className="mr-1 text-gray-500 dark:text-gray-400" />
            <span className="text-sm text-gray-600 dark:text-gray-400">Filters Applied</span>
          </div>
        </div>
      </div>
      
      {filteredPlayers.length === 0 ? (
        <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">No players found</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Try adjusting your search or filter criteria</p>
          <Button variant="primary" className="mt-4" onClick={resetFilters}>
            Clear Filters
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPlayers.map((player) => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PlayersList;