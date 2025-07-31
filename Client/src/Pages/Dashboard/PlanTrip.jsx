import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const PlanTrip = () => {
  const [form, setForm] = useState({
    source: "",
    destination: "",
    days: "",
    budget: "",
    people: "",
  });

  const sourceRef = useRef(null);
  const destRef = useRef(null);
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_BACKEND_URL;
  const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

  // Load Google Maps API only once
  useEffect(() => {
    if (!window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places`;
      script.async = true;
      script.onload = initAutocomplete;
      document.head.appendChild(script);
    } else {
      initAutocomplete();
    }
  }, []);

  const initAutocomplete = () => {
    const autocompleteSrc = new window.google.maps.places.Autocomplete(sourceRef.current);
    autocompleteSrc.addListener("place_changed", () => {
      const place = autocompleteSrc.getPlace();
      setForm((prev) => ({
        ...prev,
        source: place?.formatted_address || sourceRef.current.value,
      }));
    });

    const autocompleteDst = new window.google.maps.places.Autocomplete(destRef.current);
    autocompleteDst.addListener("place_changed", () => {
      const place = autocompleteDst.getPlace();
      setForm((prev) => ({
        ...prev,
        destination: place?.formatted_address || destRef.current.value,
      }));
    });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleOptionClick = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    const { source, destination, days, budget, people } = form;
    if (!source || !destination || !days || !budget || !people) {
      toast.warn("Please fill all fields");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(`${API_URL}/trip/generate`, form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      localStorage.setItem("itinerary", JSON.stringify(response.data.plan));
      toast.success("Trip plan generated!");
      navigate("/dashboard/itinerary");
    } catch (error) {
      toast.error("Failed to generate plan");
    }
  };

  return (
    <div className="w-full h-full bg-neutral-800/10 rounded-3xl py-6">
      <div className="max-w-5xl mx-auto px-6 py-2 text-white">
        <h1 className="text-4xl font-medium mb-2">Tell us your travel preferences 🏝️</h1>
        <p className="mb-8">Just provide some basic information and we’ll generate a trip plan for you.</p>

        <div className="space-y-6">
          {/* Source */}
          <div>
            <label className="font-semibold block">Where are you starting your journey from?</label>
            <input
              ref={sourceRef}
              type="text"
              name="source"
              placeholder="Ex: Hyderabad"
              className="w-full border border-emerald-300 px-4 py-2 rounded mt-1 text-white"
            />
          </div>

          {/* Destination */}
          <div>
            <label className="font-semibold block">What is your destination of choice?</label>
            <input
              ref={destRef}
              type="text"
              name="destination"
              placeholder="Ex: Goa"
              className="w-full border border-emerald-300 px-4 py-2 rounded mt-1 text-white"
            />
          </div>

          {/* Days */}
          <div>
            <label className="font-semibold block">How many days are you planning your trip?</label>
            <input
              type="number"
              name="days"
              placeholder="Ex: 5"
              value={form.days}
              onChange={handleChange}
              className="w-full border border-emerald-300 px-4 py-2 rounded mt-1 text-white"
            />
          </div>
        </div>

        {/* Budget Options */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-3">What is your Budget?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {["cheap", "moderate", "luxury"].map((level, idx) => {
              const emojis = ["💸", "🪙", "💳"];
              const descriptions = [
                "Stay conscious of costs",
                "Balanced spending",
                "Don't worry about cost",
              ];
              return (
                <div
                  key={level}
                  onClick={() => handleOptionClick("budget", level)}
                  className={`p-4 border rounded cursor-pointer transition ${
                    form.budget === level
                      ? "border-emerald-500 bg-emerald-600"
                      : "border-emerald-300 hover:border-emerald-500 text-emerald-700"
                  }`}
                >
                  <p className="text-xl">
                    {emojis[idx]} <strong>{level[0].toUpperCase() + level.slice(1)}</strong>
                  </p>
                  <p className="text-sm">{descriptions[idx]}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* People Options */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-3">Who are you traveling with?</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {["solo", "couple", "friends", "family"].map((group, idx) => {
              const emojis = ["✈️", "🥂", "⛵", "🏡"];
              const descriptions = ["A solo traveler", "Romantic trip", "Fun with buddies", "With your family"];
              return (
                <div
                  key={group}
                  onClick={() => handleOptionClick("people", group)}
                  className={`p-4 border rounded cursor-pointer transition ${
                    form.people === group
                      ? "border-emerald-500 bg-emerald-600"
                      : "border-emerald-300 hover:border-emerald-500 text-emerald-700"
                  }`}
                >
                  <p className="text-xl">
                    {emojis[idx]} <strong>{group[0].toUpperCase() + group.slice(1)}</strong>
                  </p>
                  <p className="text-sm">{descriptions[idx]}</p>
                </div>
              );
            })}
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="mt-10 bg-emerald-600 text-white px-6 py-3 rounded hover:bg-emerald-700 transition"
        >
          Generate Plan
        </button>
      </div>
    </div>
  );
};

export default PlanTrip;
