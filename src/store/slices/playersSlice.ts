import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Player } from '../../types';

interface PlayersState {
  players: Player[];
  isLoading: boolean;
  error: string | null;
}

const initialState: PlayersState = {
  players: [],
  isLoading: false,
  error: null,
};

export const fetchPlayers = createAsyncThunk('players/fetchPlayers', async (_, { rejectWithValue }) => {
  try {
    // This will be replaced with actual API call
    const response = await axios.get('/api/players');
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return rejectWithValue(error.response.data.message);
    }
    return rejectWithValue('An error occurred while fetching players');
  }
});

const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    setPlayers: (state, action: PayloadAction<Player[]>) => {
      state.players = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlayers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPlayers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.players = action.payload;
      })
      .addCase(fetchPlayers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setPlayers } = playersSlice.actions;
export default playersSlice.reducer;