import React, { useEffect, useState } from "react";

const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("tripHistory");
    if (stored) {
      setHistory(JSON.parse(stored));
    }
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-6 p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Trip History</h2>

      {history.length === 0 ? (
        <p className="text-gray-500">No previous plans found.</p>
      ) : (
        <ul className="space-y-3">
          {history.map((trip, i) => (
            <li key={i} className="border p-3 rounded">
              <p><strong>Destination:</strong> {trip.destination}</p>
              <p><strong>Travel Mode:</strong> {trip.travelMode}</p>
              <p><strong>Hotel:</strong> {trip.hotel}</p>
              <p><strong>Days:</strong> {trip.days}</p>
              <p><strong>Planned on:</strong> {trip.timestamp}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default History;
