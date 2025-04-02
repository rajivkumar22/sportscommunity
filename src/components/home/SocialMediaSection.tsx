import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import Button from '../ui/Button';

const SocialMediaSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Connect With Us</h2>
          <p className="mt-4 text-lg text-blue-100 max-w-3xl mx-auto">
            Follow us on social media to stay updated with the latest news, events, and community highlights.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center transition-transform duration-300 hover:scale-105">
            <div className="h-16 w-16 mx-auto bg-blue-500 rounded-full flex items-center justify-center mb-4">
              <Facebook size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Facebook</h3>
            <p className="text-blue-100 mb-6">
              Join our Facebook community for daily updates and connect with fellow sports enthusiasts.
            </p>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-white text-white hover:bg-white/20">
                Follow on Facebook
              </Button>
            </a>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center transition-transform duration-300 hover:scale-105">
            <div className="h-16 w-16 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4">
              <Instagram size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Instagram</h3>
            <p className="text-blue-100 mb-6">
              Follow our Instagram for exciting photos, stories, and highlights from events and players.
            </p>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-white text-white hover:bg-white/20">
                Follow on Instagram
              </Button>
            </a>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center transition-transform duration-300 hover:scale-105">
            <div className="h-16 w-16 mx-auto bg-red-600 rounded-full flex items-center justify-center mb-4">
              <Youtube size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">YouTube</h3>
            <p className="text-blue-100 mb-6">
              Subscribe to our YouTube channel for tutorials, event highlights, and player interviews.
            </p>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-white text-white hover:bg-white/20">
                Subscribe on YouTube
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;