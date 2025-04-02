import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import { Send, Smile, Image as ImageIcon } from 'lucide-react';
import { mockPlayers } from '../utils/mockData';

const ChatPage: React.FC = () => {
  const [message, setMessage] = useState('');

  // Mock messages for demonstration
  const messages = [
    {
      id: 1,
      user: mockPlayers[0],
      message: "Hey everyone! Anyone up for a basketball game this weekend?",
      timestamp: new Date(Date.now() - 3600000).toISOString(),
    },
    {
      id: 2,
      user: mockPlayers[1],
      message: "I'm in! What time are you thinking?", // Fixed issue with apostrophe
      timestamp: new Date(Date.now() - 3000000).toISOString(),
    },
    {
      id: 3,
      user: mockPlayers[2],
      message: "Count me in too! The weather should be perfect.",
      timestamp: new Date(Date.now() - 2400000).toISOString(),
    },
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // Handle sending message (currently only clearing input)
      setMessage('');
    }
  };

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden h-[calc(100vh-12rem)]">
          <div className="grid grid-cols-12 h-full">
            {/* Sidebar */}
            <div className="col-span-3 border-r border-gray-200 dark:border-gray-700">
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Community Chat</h2>
              </div>
              <div className="overflow-y-auto h-[calc(100%-4rem)]">
                <div className="p-4 space-y-4">
                  {mockPlayers.slice(0, 5).map((player) => (
                    <motion.div
                      key={player.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                    >
                      <img
                        src={player.profilePicture}
                        alt={player.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{player.name}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Online</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Chat Area */}
            <div className="col-span-9 flex flex-col">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start space-x-3"
                  >
                    <img
                      src={msg.user.profilePicture}
                      alt={msg.user.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <div className="flex items-center space-x-2">
                        <p className="font-medium text-gray-900 dark:text-white">{msg.user.name}</p>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {new Date(msg.timestamp).toLocaleTimeString()}
                        </span>
                      </div>
                      <p className="mt-1 text-gray-800 dark:text-gray-200">{msg.message}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
                  <button
                    type="button"
                    className="p-2 text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                  >
                    <Smile size={20} />
                  </button>
                  <button
                    type="button"
                    className="p-2 text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                  >
                    <ImageIcon size={20} />
                  </button>
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <button
                    type="submit"
                    className="p-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
                  >
                    <Send size={20} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ChatPage;
