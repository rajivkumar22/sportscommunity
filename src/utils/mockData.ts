import { Player, Event, Notification } from '../types';

// Get stored user from localStorage
const storedUser = localStorage.getItem('user');
let loggedInUser = null;
try {
  if (storedUser) {
    loggedInUser = JSON.parse(storedUser);
  }
} catch (error) {
  console.error('Error parsing stored user:', error);
}

// Mock Players Data
export const mockPlayers: Player[] = [
  ...(loggedInUser ? [{
    id: loggedInUser.id,
    name: loggedInUser.name,
    age: 25, // Default age for new users
    sports: ['Basketball', 'Tennis'], // Default sports
    skillLevel: 'Beginner',
    profilePicture: loggedInUser.profilePicture,
    socialMedia: {
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com'
    }
  }] : []),
  {
    id: '1',
    name: 'John Smith',
    age: 28,
    sports: ['Basketball', 'Tennis'],
    skillLevel: 'Advanced',
    profilePicture: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    socialMedia: {
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      youtube: 'https://youtube.com'
    }
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    age: 24,
    sports: ['Soccer', 'Volleyball'],
    skillLevel: 'Professional',
    profilePicture: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    socialMedia: {
      instagram: 'https://instagram.com'
    }
  },
  {
    id: '3',
    name: 'Michael Chen',
    age: 32,
    sports: ['Tennis', 'Golf'],
    skillLevel: 'Intermediate',
    profilePicture: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    socialMedia: {
      facebook: 'https://facebook.com',
      youtube: 'https://youtube.com'
    }
  },
  {
    id: '4',
    name: 'Emily Rodriguez',
    age: 26,
    sports: ['Swimming', 'Running'],
    skillLevel: 'Advanced',
    profilePicture: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    socialMedia: {
      instagram: 'https://instagram.com'
    }
  },
  {
    id: '5',
    name: 'David Kim',
    age: 30,
    sports: ['Basketball', 'Baseball'],
    skillLevel: 'Intermediate',
    profilePicture: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '6',
    name: 'Jessica Martinez',
    age: 22,
    sports: ['Volleyball', 'Soccer'],
    skillLevel: 'Beginner',
    profilePicture: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    socialMedia: {
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com'
    }
  },
  {
    id: '7',
    name: 'Robert Wilson',
    age: 35,
    sports: ['Golf', 'Tennis'],
    skillLevel: 'Professional',
    profilePicture: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    socialMedia: {
      youtube: 'https://youtube.com'
    }
  },
  {
    id: '8',
    name: 'Amanda Lee',
    age: 27,
    sports: ['Running', 'Cycling'],
    skillLevel: 'Advanced',
    profilePicture: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    socialMedia: {
      instagram: 'https://instagram.com'
    }
  },
  {
    id: '9',
    name: 'Thomas Brown',
    age: 29,
    sports: ['Soccer', 'Basketball'],
    skillLevel: 'Intermediate',
    profilePicture: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    socialMedia: {
      facebook: 'https://facebook.com'
    }
  },
  {
    id: '10',
    name: 'Olivia Garcia',
    age: 23,
    sports: ['Swimming', 'Volleyball'],
    skillLevel: 'Beginner',
    profilePicture: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    socialMedia: {
      instagram: 'https://instagram.com',
      youtube: 'https://youtube.com'
    }
  },
  {
    id: '11',
    name: 'James Taylor',
    age: 31,
    sports: ['Baseball', 'Football'],
    skillLevel: 'Advanced',
    profilePicture: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '12',
    name: 'Sophia Nguyen',
    age: 25,
    sports: ['Tennis', 'Badminton'],
    skillLevel: 'Intermediate',
    profilePicture: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    socialMedia: {
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com'
    }
  }
];

// Mock Events Data
export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Summer Basketball Tournament',
    description: 'Join our annual summer basketball tournament. Teams of 3-5 players compete for the championship title.',
    date: '2025-07-15T14:00:00Z',
    location: 'Central Park Courts, New York',
    sportType: 'Basketball',
    createdAt: '2025-05-01T10:30:00Z',
    organizer: 'NYC Sports Association'
  },
  {
    id: '2',
    title: 'Tennis Open Championship',
    description: 'Annual tennis championship open to players of all skill levels. Singles and doubles categories available.',
    date: '2025-06-20T09:00:00Z',
    location: 'Westside Tennis Club, Los Angeles',
    sportType: 'Tennis',
    createdAt: '2025-04-15T08:45:00Z',
    organizer: 'LA Tennis Federation'
  },
  {
    id: '3',
    title: 'Soccer Friendly Match',
    description: 'Friendly soccer match between local teams. Come join us for a fun afternoon of soccer and networking.',
    date: '2025-05-30T16:30:00Z',
    location: 'Riverside Fields, Chicago',
    sportType: 'Soccer',
    createdAt: '2025-05-10T14:20:00Z',
    organizer: 'Chicago Sports Club'
  },
  {
    id: '4',
    title: 'Swimming Competition',
    description: 'Annual swimming competition with various categories including freestyle, backstroke, and relay races.',
    date: '2025-08-05T10:00:00Z',
    location: 'Aquatic Center, Miami',
    sportType: 'Swimming',
    createdAt: '2025-06-20T11:15:00Z',
    organizer: 'Miami Swimming Association'
  },
  {
    id: '5',
    title: 'Golf Tournament',
    description: 'Charity golf tournament to raise funds for local youth sports programs. All skill levels welcome.',
    date: '2025-09-12T08:00:00Z',
    location: 'Greenview Golf Course, Phoenix',
    sportType: 'Golf',
    createdAt: '2025-07-30T09:30:00Z',
    organizer: 'Phoenix Golf Club'
  },
  {
    id: '6',
    title: 'Volleyball Beach Tournament',
    description: 'Beach volleyball tournament with teams of 2-4 players. Prizes for winners and runners-up.',
    date: '2025-07-25T11:00:00Z',
    location: 'Oceanside Beach, San Diego',
    sportType: 'Volleyball',
    createdAt: '2025-06-15T16:45:00Z',
    organizer: 'San Diego Beach Sports'
  },
  {
    id: '7',
    title: 'Running Marathon',
    description: 'Annual city marathon with 5K, 10K, half-marathon, and full marathon options. Registration required.',
    date: '2025-10-10T07:00:00Z',
    location: 'Downtown, Boston',
    sportType: 'Running',
    createdAt: '2025-08-01T13:20:00Z',
    organizer: 'Boston Marathon Association'
  },
  {
    id: '8',
    title: 'Baseball Game',
    description: 'Local baseball game between community teams. Spectators welcome, refreshments available.',
    date: '2025-06-05T18:00:00Z',
    location: 'Community Field, Houston',
    sportType: 'Baseball',
    createdAt: '2025-05-20T10:10:00Z',
    organizer: 'Houston Baseball League'
  }
];

// Mock Notifications Data
export const mockNotifications: Notification[] = [
  {
    id: '1',
    message: 'New event: Summer Basketball Tournament has been announced',
    type: 'event',
    read: false,
    createdAt: '2025-05-01T10:35:00Z',
    relatedId: '1'
  },
  {
    id: '2',
    message: 'John Smith has connected with you',
    type: 'social',
    read: true,
    createdAt: '2025-05-02T14:20:00Z',
    relatedId: '1'
  },
  {
    id: '3',
    message: 'Your profile has been viewed 15 times this week',
    type: 'system',
    read: false,
    createdAt: '2025-05-03T09:45:00Z'
  },
  {
    id: '4',
    message: 'New event: Tennis Open Championship registration is now open',
    type: 'event',
    read: false,
    createdAt: '2025-04-15T08:50:00Z',
    relatedId: '2'
  },
  {
    id: '5',
    message: 'Sarah Johnson has commented on your profile',
    type: 'social',
    read: true,
    createdAt: '2025-05-04T16:30:00Z',
    relatedId: '2'
  },
  {
    id: '6',
    message: 'Reminder: Soccer Friendly Match is tomorrow',
    type: 'event',
    read: false,
    createdAt: '2025-05-29T12:00:00Z',
    relatedId: '3'
  },
  {
    id: '7',
    message: 'Your skill level has been updated to Advanced',
    type: 'system',
    read: true,
    createdAt: '2025-05-05T11:15:00Z'
  },
  {
    id: '8',
    message: 'Michael Chen has invited you to join a training session',
    type: 'social',
    read: false,
    createdAt: '2025-05-06T15:40:00Z',
    relatedId: '3'
  }
];