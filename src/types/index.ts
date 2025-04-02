export interface User {
  id: string;
  name: string;
  email: string;
  profilePicture?: string;
}

export interface Player {
  id: string;
  name: string;
  age: number;
  sports: string[];
  skillLevel: 'Beginner' | 'Intermediate' | 'Advanced' | 'Professional';
  profilePicture: string;
  socialMedia?: {
    youtube?: string;
    facebook?: string;
    instagram?: string;
  };
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  sportType: string;
  createdAt: string;
  organizer: string;
}

export interface Notification {
  id: string;
  message: string;
  type: 'event' | 'system' | 'social';
  read: boolean;
  createdAt: string;
  relatedId?: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}