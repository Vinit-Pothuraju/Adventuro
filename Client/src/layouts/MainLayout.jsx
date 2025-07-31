// src/layouts/MainLayout.jsx
import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow px-4 md:px-8 py-6 w-full max-w-screen-xl mx-auto">
        <Outlet />
      </main>

      {/* Optional Footer */}
      {/* <footer className="text-center text-sm text-gray-500 py-4">
        © {new Date().getFullYear()} Adventuro. All rights reserved.
      </footer> */}
    </div>
  );
};

export default MainLayout;
