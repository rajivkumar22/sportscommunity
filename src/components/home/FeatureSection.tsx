import React from 'react';
import { Users, Calendar, Award, MessageSquare } from 'lucide-react';

const features = [
  {
    name: 'Player Profiles',
    description: 'Create your profile, showcase your skills, and connect with other athletes.',
    icon: Users,
  },
  {
    name: 'Event Notifications',
    description: 'Stay updated with upcoming sports events and never miss an opportunity.',
    icon: Calendar,
  },
  {
    name: 'Leaderboard System',
    description: 'Compete with others and climb the ranks based on your performance.',
    icon: Award,
  },
  {
    name: 'Community Chat',
    description: 'Communicate with other players, share tips, and build connections.',
    icon: MessageSquare,
  },
];

const FeatureSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Everything You Need in One Platform
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Our sports community platform offers a comprehensive set of features designed to enhance your sporting experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.name} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105">
              <div className="h-12 w-12 rounded-md bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300 mb-4">
                <feature.icon size={24} />
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">{feature.name}</h3>
              <p className="mt-2 text-base text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;