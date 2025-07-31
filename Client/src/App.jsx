// src/App.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Layouts
import AuthLayout from './layouts/AuthLayout';
import MainLayout from './layouts/MainLayout';
import DashboardLayout from './layouts/DashboardLayout';

// Pages

import Home from './Pages/Home';
import Destinations from './pages/Destinations';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';

// Dashboard Pages
import PlanTrip from './pages/dashboard/PlanTrip';
import DashboardHome from './Pages/Dashboard/DashboardHome';

// Simple auth guard (replace with real auth logic)
const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" replace />;
};

function App() {
  return (
    <>
      <ToastContainer position="top-right" />

      <Routes>
        {/* Public site */}
         <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="destinations" element={<Destinations />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
      </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
    

        {/* Dashboard (protected) */}
       <Route
  path="/dashboard"
  element={
    <PrivateRoute>
      <DashboardLayout />
    </PrivateRoute>
  }
>
  {/* Default Dashboard Page */}
  <Route index element={<DashboardHome />} />

  {/* Nested Pages */}
  <Route path="plan" element={<PlanTrip />} />
  <Route path="history" element={<History />} />
  {/* <Route path="profile" element={<Profile />} /> */}
</Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
