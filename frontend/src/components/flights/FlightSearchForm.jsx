import { useNavigate } from "react-router-dom";

export default function FlightSearchForm() {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <input className="border p-2 rounded" placeholder="From (DEL)" />
      <input className="border p-2 rounded" placeholder="To (BOM)" />
      <input type="date" className="border p-2 rounded" />

      <button
        onClick={() => navigate("/flights")}
        className="md:col-span-3 bg-orange-500 text-white py-2 rounded"
      >
        Search Flights
      </button>
    </div>
  );
}
