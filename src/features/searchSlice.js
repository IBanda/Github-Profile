import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
export const fetchUser = createAsyncThunk(
  'search/githubUser',
  async (username) => {
    const fetchData = await fetch(`https://api.github.com/users/${username}`);
    const response = await fetchData.json();
    return response;
  }
);

const searchSlice = createSlice({
  name: 'search',
  initialState: { user: {}, status: 'idle', message: null },
  reducers: {},
  extraReducers: {
    [fetchUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.message = action.payload.message;

      if (action.payload.message) {
        state.status = 'error';
      } else {
        state.status = 'idle';
      }
    },
  },
});

export default searchSlice.reducer;
