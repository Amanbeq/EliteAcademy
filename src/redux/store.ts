import { configureStore } from '@reduxjs/toolkit';
import sliderReducer from './cake/sliderSlice';
import authReducer from './cake/authSlice';
import studentsReducer from './cake/studentsSlice';

export const store = configureStore({
  reducer: {
    slider: sliderReducer,
    auth: authReducer,
    students: studentsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
