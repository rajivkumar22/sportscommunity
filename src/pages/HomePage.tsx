import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/home/HeroSection';
import FeaturedPlayers from '../components/home/FeaturedPlayers';
import UpcomingEvents from '../components/home/UpcomingEvents';
import FeatureSection from '../components/home/FeatureSection';
import SocialMediaSection from '../components/home/SocialMediaSection';
import TestimonialSection from '../components/home/TestimonialSection';
import { RootState, AppDispatch } from '../store';
import { fetchPlayers } from '../store/slices/playersSlice';
import { fetchEvents } from '../store/slices/eventsSlice';

// Mock data for initial development
import { mockPlayers } from '../utils/mockData';
import { mockEvents } from '../utils/mockData';

const HomePage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { players, isLoading: playersLoading } = useSelector((state: RootState) => state.players);
  const { events, isLoading: eventsLoading } = useSelector((state: RootState) => state.events);
  
  useEffect(() => {
    // In a real app, we would fetch data from the API
    // dispatch(fetchPlayers());
    // dispatch(fetchEvents());
    
    // For now, we'll use mock data
  }, [dispatch]);
  
  return (
    <Layout>
      <HeroSection />
      <FeatureSection />
      <FeaturedPlayers players={mockPlayers} isLoading={playersLoading} />
      <UpcomingEvents events={mockEvents} isLoading={eventsLoading} />
      <TestimonialSection />
      <SocialMediaSection />
    </Layout>
  );
};

export default HomePage;