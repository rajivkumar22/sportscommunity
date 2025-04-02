import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import PlayerProfile from '../components/players/PlayerProfile';
import { useAuth } from '../hooks/useAuth';
import { mockPlayers } from '../utils/mockData';

const PlayerProfilePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();
  const player = mockPlayers.find(p => p.id === id);
  const isOwnProfile = user?.id === id;

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <PlayerProfile
          player={player}
          isEditable={isOwnProfile}
          onEdit={() => {/* Handle edit */}}
        />
      </div>
    </Layout>
  );
};

export default PlayerProfilePage;