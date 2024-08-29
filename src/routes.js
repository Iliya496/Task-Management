// src/routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Board from './components/TaskBoard/Board';
import SignUp from './components/Auth/SignUp';
import Login from './components/Auth/Login';
import { auth } from './firebase';

const PrivateRoute = ({ element }) => (
  auth.currentUser ? element : <Navigate to="/login" />
);

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/board" element={<PrivateRoute element={<Board />} />} />
    </Routes>
  </Router>
);

export default AppRoutes;
