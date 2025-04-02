import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const sportsImages = [

  {
    url: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521', 
    title: 'Esports' 
  },
  { 
    url: 'https://images.unsplash.com/photo-1626248801379-51a0748a5f96?q=80&w=2070&auto=format&fit=crop', 
    title: 'Football' 
  },
  { 
    url: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090&auto=format&fit=crop', 
    title: 'Basketball' 
  },
  { 
    url: 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d', 
    title: 'Hockey' 
  },
  { 
    url: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg', 
    title: 'Tennis' 
  },
  
  { 
    url: 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d', 
    title: 'Volleyball' 
  }
];


const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-gray-900 to-black min-h-screen flex flex-col justify-center items-center">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="slide"

        autoplay={{ delay: 4000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-screen"
      >
        {sportsImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-screen flex justify-center items-center">
              <img
                src={image.url} 
                alt={image.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-6">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-4xl font-bold text-white mb-4"
                >
                  {image.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-lg text-gray-300"
                >
                  Join the community of {image.title.toLowerCase()} enthusiasts
                </motion.p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl text-center px-4 py-16"
      >
        <h1 className="text-5xl font-extrabold text-white tracking-tight mb-6">
          Connect with Athletes & Sports Enthusiasts
        </h1>
        <p className="text-xl text-gray-300 mb-6">
          Join our community of athletes, showcase your skills, discover events, and connect with players worldwide.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/register">
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold transform hover:scale-105 transition-all duration-300"
            >
              Join Now
            </Button>
          </Link>
          <Link to="/players">
            <Button
              variant="outline"
              size="lg"
              className="font-semibold text-white border-white hover:bg-white/10 transform hover:scale-105 transition-all duration-300"
            >
              Explore Players
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative bg-black/30 backdrop-blur-sm w-full"
      >
        <div className="max-w-6xl mx-auto py-8 px-4 text-center grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '50+', label: 'Active Players' },
            { value: '20+', label: 'Sports' },
            { value: '15+', label: 'Upcoming Events' },
            { value: '1000+', label: 'Community Members' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-emerald-500/10 to-teal-600/10 p-6 rounded-xl"
            >
              <p className="text-4xl font-bold text-emerald-400">{stat.value}</p>
              <p className="text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
