import React, { useEffect, useState } from "react";

const DashboardHome = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // Fetch username from localStorage
    const storedUser = localStorage.getItem("username");
    if (storedUser) {
      setUserName(storedUser);
    } else {
      setUserName("Traveler"); // fallback if no username
    }
  }, []);

  return (
    <div className="p-6">
      {/* Welcome Section */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-6">
        <h1 className="text-3xl font-bold text-zinc-800">
          Welcome back,{" "}
          <span className="text-emerald-600">
            {userName}!
          </span>
        </h1>
        <p className="text-zinc-600 mt-2">
          Ready to plan your next adventure? Let’s explore amazing destinations and create your perfect trip.
        </p>
      </div>

      {/* Explore Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl p-6 cursor-pointer hover:scale-105 transition-all">
          <h2 className="text-xl font-semibold mb-2">Plan a New Trip</h2>
          <p className="text-sm">
            Start from scratch and build your dream itinerary.
          </p>
        </div>

        <div className="bg-zinc-500 hover:bg-zinc-600 text-white rounded-xl p-6 cursor-pointer hover:scale-105 transition-all">
          <h2 className="text-xl font-semibold mb-2">Explore Destinations</h2>
          <p className="text-sm">
            Find top-rated places, hotels, and activities.
          </p>
        </div>

        <div className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl p-6 cursor-pointer hover:scale-105 transition-all">
          <h2 className="text-xl font-semibold mb-2">View Saved Trips</h2>
          <p className="text-sm">
            Access your previous itineraries and bookings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
