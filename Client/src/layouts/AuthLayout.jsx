// src/layouts/AuthLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-white overflow-x-hidden overflow-y-auto">
      <div className="w-full max-w-md px-4">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
