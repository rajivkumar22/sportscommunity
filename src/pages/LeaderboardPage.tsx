import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import { Trophy, Medal, Award, Star } from 'lucide-react';
import { mockPlayers } from '../utils/mockData';

const LeaderboardPage: React.FC = () => {
  // Sort players by skill level and activity
  const rankedPlayers = [...mockPlayers].sort((a, b) => {
    const skillOrder = { 'Professional': 4, 'Advanced': 3, 'Intermediate': 2, 'Beginner': 1 };
    return skillOrder[b.skillLevel] - skillOrder[a.skillLevel];
  });

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
              Sports Leaderboard
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Top athletes ranked by skill level and achievements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[2, 0, 1].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`relative ${index === 1 ? 'md:-mt-8' : ''}`}
              >
                <div className="bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-xl p-6 text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    {index === 1 && <Trophy size={48} className="text-yellow-400" />}
                    {index === 0 && <Medal size={48} className="text-gray-400" />}
                    {index === 2 && <Award size={48} className="text-orange-400" />}
                  </div>
                  <div className="mt-8">
                    <img
                      src={rankedPlayers[index].profilePicture}
                      alt={rankedPlayers[index].name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white dark:border-gray-800 shadow-lg"
                    />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {rankedPlayers[index].name}
                    </h3>
                    <p className="text-emerald-600 dark:text-emerald-400 font-medium">
                      {rankedPlayers[index].skillLevel}
                    </p>
                    <div className="mt-2 flex justify-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={`${
                            i < 5 - index
                              ? 'text-yellow-400'
                              : 'text-gray-300 dark:text-gray-600'
                          }`}
                          fill="currentColor"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                All Players Ranking
              </h2>
              <div className="space-y-4">
                {rankedPlayers.slice(3).map((player, index) => (
                  <motion.div
                    key={player.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <span className="text-2xl font-bold text-gray-400 dark:text-gray-500 w-12">
                      #{index + 4}
                    </span>
                    <img
                      src={player.profilePicture}
                      alt={player.name}
                      className="w-12 h-12 rounded-full mx-4"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 dark:text-white">
                        {player.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {player.skillLevel}
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(3)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className="text-yellow-400"
                          fill="currentColor"
                        />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default LeaderboardPage;