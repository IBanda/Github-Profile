import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';

const repoAdapter = createEntityAdapter();

const initialState = repoAdapter.getInitialState();
export const fetchRepositories = createAsyncThunk(
  'repositories/userRespositpories',
  async (username) => {
    const fetchData = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=4&sort=updated`
    );
    const response = await fetchData.json();
    return response;
  }
);
const repoSlice = createSlice({
  name: 'repositories',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchRepositories.fulfilled]: repoAdapter.setAll,
  },
});

export const { selectAll } = repoAdapter.getSelectors((state) => state.repos);
export default repoSlice.reducer;
