import React, { useEffect, useState } from "react";

const Itinerary = () => {
  const [plan, setPlan] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("itinerary");
    if (stored) {
      setPlan(JSON.parse(stored));
    }
  }, []);

  if (!plan) {
    return <p className="text-center mt-10 text-gray-500">No itinerary found. Please generate a plan.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto mt-6 p-4 bg-white rounded shadow space-y-4">
      <h2 className="text-2xl font-bold text-blue-600">Your Travel Itinerary</h2>

      <div className="space-y-2">
        <h3 className="font-semibold text-lg">Destination: {plan.destination}</h3>
        <p>Travel Mode: {plan.travelMode}</p>
        <p>Hotel: {plan.hotel}</p>
        <p>Days: {plan.days}</p>
        <p>Interests: {plan.interests}</p>
      </div>

      <div className="mt-4">
        <h4 className="font-semibold text-lg mb-2">Plan by Day</h4>
        <ul className="list-disc list-inside space-y-1">
          {plan.daysPlan?.map((item, i) => (
            <li key={i}>
              <strong>Day {i + 1}:</strong> {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Itinerary;
