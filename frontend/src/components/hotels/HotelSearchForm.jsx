import { useNavigate } from "react-router-dom";

export default function HotelSearchForm() {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <input className="border p-2 rounded" placeholder="City" />
      <input type="date" className="border p-2 rounded" placeholder="Check-in" />
      <input type="date" className="border p-2 rounded" placeholder="Check-out" />

      <button
        onClick={() => navigate("/hotels")}
        className="md:col-span-3 bg-orange-500 text-white py-2 rounded"
      >
        Search Hotels
      </button>
    </div>
  );
}