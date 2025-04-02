import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import playersReducer from './slices/playersSlice';
import eventsReducer from './slices/eventsSlice';
import notificationsReducer from './slices/notificationsSlice';
import themeReducer from './slices/themeSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    players: playersReducer,
    events: eventsReducer,
    notifications: notificationsReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;