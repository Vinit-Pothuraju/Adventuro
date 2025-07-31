import { NavLink } from 'react-router-dom';
import {
  FaHome,
  FaClipboardList,
  FaUser,
  FaSignOutAlt,
  FaTimes,
} from 'react-icons/fa';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const user = {
    email: "vinit@example.com",
    profileImg: "https://i.pravatar.cc/100",
  };

  // Reusable classes for links with active state handling
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors
    ${isActive
      ? "bg-emerald-500 text-white" // Active link
      : "text-zinc-700 hover:bg-zinc-100 hover:text-emerald-600"}`; // Inactive link

  return (
    <aside
      className={`fixed md:static top-0 left-0 z-40 h-full md:h-screen w-64 bg-white shadow-lg p-5 flex flex-col transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0`}
    >
      {/* Mobile Close Button */}
      <div className="md:hidden flex justify-end mb-4">
        <button onClick={toggleSidebar} className="text-gray-700 text-xl">
          <FaTimes />
        </button>
      </div>

      {/* Wrapper for scrollable content */}
      <div className="flex flex-col justify-between h-full">
        {/* Top Section */}
        <div>
          {/* Logo */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-emerald-600">Adventuro</h1>
          </div>

          {/* Profile */}
          <div className="bg-zinc-100 p-4 rounded-xl flex items-center gap-4 mb-8">
            <img
              src={user.profileImg}
              alt="Profile"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="truncate">
              <p className="text-sm text-zinc-700 font-semibold">Welcome</p>
              <p className="text-sm text-zinc-500 truncate">{user.email}</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-2">
            <NavLink to="/dashboard" end className={linkClass}>
              <FaHome /> Dashboard
            </NavLink>
            <NavLink to="/dashboard/plan" className={linkClass}>
              <FaClipboardList /> Plan Trip
            </NavLink>
            <NavLink to="/dashboard/history" className={linkClass}>
              <FaClipboardList /> History
            </NavLink>
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-2 mt-6">
          <NavLink to="/dashboard/profile" className={linkClass}>
            <FaUser /> Profile
          </NavLink>
          <button
            className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-red-600 hover:bg-red-100 transition"
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/login";
            }}
          >
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
