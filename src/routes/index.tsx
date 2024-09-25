// routes/index.tsx
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { Login } from '../pages/auth/Login';
import { AdminPage } from '@pages/admin/Main';
import Home from '@pages/home';
import { useEffect } from 'react';
import { loadUserFromStorage } from '@redux/cake/authSlice';

export const AppRouter = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    dispatch(loadUserFromStorage());
  }, [dispatch]);
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={isAuthenticated && user?.role === 'admin' ? <AdminPage /> : <Navigate to="/login" />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};
