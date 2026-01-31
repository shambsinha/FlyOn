import HotelCard from "../components/hotels/HotelCard";

const dummyHotels = [
  { id: 1, name: "The Grand Hotel", city: "Mumbai", price: 4500, rating: 4.5 },
  { id: 2, name: "Sunset Resort", city: "Mumbai", price: 3800, rating: 4.2 }
];

export default function HotelResults() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Available Hotels</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {dummyHotels.map(hotel => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
}