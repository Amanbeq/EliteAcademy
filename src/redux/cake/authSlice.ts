import { AppDispatch } from '@redux/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

interface User {
  email: string;
  name: string;
  avatar: string;
  role: string;
  password: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem('user');
    },
    loadUserFromStorage(state) {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        state.user = JSON.parse(storedUser);
        state.isAuthenticated = true;
      }
    },
  },
});

export const { loginSuccess, logout, loadUserFromStorage } = authSlice.actions;
export default authSlice.reducer;

export const login = (email: string, password: string) => async (dispatch: AppDispatch) => {
  const response = await fetch('https://7c967791f6073f31.mokky.dev/admin');
  const users = await response.json();

  const user = users.find((u: User) => u.email === email && u.password === password && u.role === 'admin');

  if (user) {
    dispatch(loginSuccess(user));
    localStorage.setItem('user', JSON.stringify(user));
  } else {
    toast.error("Неверный логин или пароль");
    throw new Error('Неверный логин или пароль');
  }
};
