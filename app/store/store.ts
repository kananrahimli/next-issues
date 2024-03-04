import { configureStore } from '@reduxjs/toolkit';
import issueSlice from './slices/issueSlice';


const store = configureStore({
  reducer:{
        issue:issueSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;