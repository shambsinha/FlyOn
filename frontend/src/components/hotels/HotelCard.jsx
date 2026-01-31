import { useNavigate } from "react-router-dom";

export default function HotelCard({ hotel }) {
  const navigate = useNavigate();

  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white">
      <h3 className="font-semibold text-lg">{hotel.name}</h3>
      <p className="text-sm text-gray-500 mb-2">{hotel.city}</p>
      
      <div className="flex justify-between items-center">
        <div>
          <p className="text-yellow-500 mb-1">⭐ {hotel.rating}</p>
          <p className="text-lg font-bold">₹{hotel.price}/night</p>
        </div>
        
        <button
          onClick={() => navigate("/booking")}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Book
        </button>
      </div>
    </div>
  );
}
