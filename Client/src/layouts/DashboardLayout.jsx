import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { FaBars } from "react-icons/fa";
import { Outlet } from "react-router-dom"; // ⬅️ Import Outlet

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="h-screen flex bg-zinc-900 overflow-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex flex-col flex-grow h-screen overflow-y-auto">
        {/* Mobile Toggle Button */}
        {!isSidebarOpen && (
          <div className="md:hidden fixed top-4 left-4 z-50">
            <button
              onClick={toggleSidebar}
              className="text-2xl text-gray-700 bg-white shadow-md rounded p-2"
            >
              <FaBars />
            </button>
          </div>
        )}

        {/* Outlet will render nested routes */}
        <main className="p-6 flex-grow">
          <Outlet /> 
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
