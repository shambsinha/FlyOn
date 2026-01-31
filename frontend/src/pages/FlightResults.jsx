import FlightCard from "../components/flights/FlightCard";

const dummyFlights = [
  { id: 1, airline: "IndiGo", from: "DEL", to: "BOM", price: 5200 },
  { id: 2, airline: "Air India", from: "DEL", to: "BOM", price: 6100 }
];

export default function FlightResults() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Available Flights</h2>

      <div className="space-y-4">
        {dummyFlights.map(f => (
          <FlightCard key={f.id} flight={f} />
        ))}
      </div>
    </div>
  );
}
