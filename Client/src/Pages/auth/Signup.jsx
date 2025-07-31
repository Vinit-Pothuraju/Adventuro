import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import signupImg from "../../assets/siginup.png"; 

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/signup`, form);
      toast.success("Signup successful!");
      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="h-screen w-screen flex overflow-hidden bg-white">
      
      <div className="hidden md:flex md:w-1/2 h-full items-center justify-center bg-gray-50">
        <img
          src={signupImg}
          alt="Signup Illustration"
          className="w-full h-full object-cover"
        />
      </div>

     
      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-4 text-[#12A277]">Create your account</h2>
          <p className="mb-6 text-gray-600">Join us and start exploring today!</p>

          <form onSubmit={handleSignup}>
            <div className="mb-4">
              <label className="block font-semibold mb-1">Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                className="w-full border-b py-2 focus:outline-none"
                placeholder="Your name"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block font-semibold mb-1">Email</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                className="w-full border-b py-2 focus:outline-none"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block font-semibold mb-1">Password</label>
              <input
                name="password"
                value={form.password}
                onChange={handleChange}
                type="password"
                className="w-full border-b py-2 focus:outline-none"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#12A277] hover:bg-[#0F8260] text-white font-semibold py-2 rounded-full shadow"
            >
              Sign Up
            </button>

            <div className="text-sm text-center text-gray-600 mt-4">
              Already have an account?{" "}
              <button
                type="button"
                className="text-[#12A277] hover:underline"
                onClick={() => navigate("/login")}
              >
                Login here
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
