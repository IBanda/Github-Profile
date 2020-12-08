import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './features/searchSlice';
import repositoriesReducer from './features/repositoriesSlice';

const store = configureStore({
  reducer: {
    user: searchReducer,
    repos: repositoriesReducer,
  },
});
export default store;
