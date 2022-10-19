/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const messagesAPI = 'http://127.0.0.1:3000/api/v1/messages/';

const INITIAL_STATE = {
  loading: true,
  message: null,
};

export const fetchMessage = createAsyncThunk('messages/getMessage', async () => {
  const res = await fetch(messagesAPI);

  return res.data.greeting;
});

const messagesSlice = createSlice({
  name: 'messages',
  initialState: INITIAL_STATE,

  extraReducers: {
    [fetchMessage.fulfilled]: (state, action) => {
      state.message = action.payload;
      state.loading = false;
    },

    [fetchMessage.pending]: (state) => {
      state.loading = true;
    },

    [fetchMessage.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default messagesSlice.reducer;
