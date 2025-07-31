import axios from "axios";
import React, { useState } from "react";
import signupImg from "../../assets/login.png"; 
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

const navigate = useNavigate();
const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/Login`, {
      email: form.email,
      password: form.password,
    }, {
      headers: {
        "Content-Type": "application/json",
      },
      
    });

    const data = response.data;

    localStorage.setItem("token", data.token); 

    toast.success("Login successful!");

    setTimeout(() => {
      navigate("/dashboard");
    }, 1500);

  } catch (error) {
    console.error("Login error:", error);
    if (error.response && error.response.data) {
      toast.error(error.response.data.message || "Invalid credentials");
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  }
};




  return (
    <div className="h-screen w-screen flex overflow-hidden bg-white">
  
      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-4">Welcome back!</h2>
          <p className="mb-6 text-gray-600">
            Login to continue planning your next great adventure.
          </p>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block font-semibold mb-1">Email</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                className="w-full border-b py-2 focus:outline-none"
                placeholder="you@example.com"
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">Password</label>
              <input
                name="password"
                value={form.password}
                onChange={handleChange}
                type="password"
                className="w-full border-b py-2 focus:outline-none"
                placeholder="••••••••"
              />
            </div>
            <div className="mb-6 flex items-start gap-2">
              <input
                type="checkbox"
                name="remember"
                checked={form.remember}
                onChange={handleChange}
              />
              <label className="text-sm text-gray-600">Remember me</label>
            </div>
           <button
  type="submit"
  className="w-full bg-emerald-600 hover:bg-brand-emerald-dark text-white font-semibold py-2 rounded-full shadow"
>
  Login
</button>
 <div className="text-sm text-center text-gray-600 mt-4">
            Don’t have an account?{" "}
            <button
              type="button"
              className="text-emerald-600 hover:underline"
              onClick={() => navigate("/signup")}
            >
              Create one
            </button>
          </div>
          </form>
        </div>
      </div>

      <div className="hidden md:flex md:w-1/2 h-full items-center justify-center  bg-gray-50">
        <img
          src={signupImg}
          alt="Login Illustration"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default Login;
