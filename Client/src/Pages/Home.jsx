import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-100 to-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Plan Your Next Adventure with AI
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            Smart, personalized travel planning — stress-free and simple.
          </p>
          <Link
            to="/dashboard"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition-all duration-300"
          >
            Start Planning
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            Why Use Our Travel Planner?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                AI Itinerary Generator
              </h3>
              <p className="text-gray-600">
                Get day-by-day plans tailored to your interests, time, and budget.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                Real-time Recommendations
              </h3>
              <p className="text-gray-600">
                Discover attractions, food spots, and hidden gems as you travel.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                Smart Collaboration
              </h3>
              <p className="text-gray-600">
                Plan trips with friends or family, assign tasks, and vote on destinations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Explore the World?
          </h2>
          <p className="text-white text-lg mb-6">
            Start planning your dream trip in minutes.
          </p>
          <Link
            to="/signup"
            className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl transition hover:bg-gray-200"
          >
            Sign Up Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
