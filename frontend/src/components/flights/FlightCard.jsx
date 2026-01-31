import { useNavigate } from "react-router-dom";

export default function FlightCard({ flight }) {
  const navigate = useNavigate();

  return (
    <div className="border rounded-lg p-4 flex justify-between items-center shadow-sm">
      <div>
        <h3 className="font-semibold">{flight.airline}</h3>
        <p className="text-sm text-gray-500">
          {flight.from} → {flight.to}
        </p>
      </div>

      <div className="text-right">
        <p className="text-lg font-bold">₹{flight.price}</p>
        <button
          onClick={() => navigate("/booking")}
          className="mt-2 bg-blue-600 text-white px-4 py-1 rounded"
        >
          Book
        </button>
      </div>
    </div>
  );
}
