import { useState } from "react";
import FlightSearchForm from "../components/flights/FlightSearchForm";
import HotelSearchForm from "../components/hotels/HotelSearchForm";

export default function Home() {
  const [tab, setTab] = useState("flights");

  return (
    <div className="p-6">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow">
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setTab("flights")}
            className={`flex-1 py-2 rounded ${
              tab === "flights"
                ? "bg-blue-600 text-white"
                : "bg-gray-200"
            }`}
          >
            Flights
          </button>

          <button
            onClick={() => setTab("hotels")}
            className={`flex-1 py-2 rounded ${
              tab === "hotels"
                ? "bg-blue-600 text-white"
                : "bg-gray-200"
            }`}
          >
            Hotels
          </button>
        </div>

        {tab === "flights" ? <FlightSearchForm /> : <HotelSearchForm />}
      </div>
    </div>
  );
}
