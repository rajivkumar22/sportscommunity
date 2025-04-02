import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../components/layout/Layout';
import PlayersList from '../components/players/PlayersList';
import { RootState, AppDispatch } from '../store';
import { fetchPlayers } from '../store/slices/playersSlice';

// Mock data for initial development
import { mockPlayers } from '../utils/mockData';

const PlayersPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { players, isLoading } = useSelector((state: RootState) => state.players);
  
  useEffect(() => {
    // In a real app, we would fetch data from the API
    // dispatch(fetchPlayers());
    
    // For now, we'll use mock data
  }, [dispatch]);
  
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Players Directory</h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            Discover athletes from various sports and connect with them
          </p>
        </div>
        
        <PlayersList players={mockPlayers} isLoading={isLoading} />
      </div>
    </Layout>
  );
};

export default PlayersPage;