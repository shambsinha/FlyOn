import BookingSummary from "../components/bookings/BookingSummary";

export default function Booking() {
  return (
    <div className="p-6 max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
      <div className="md:col-span-2 bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Traveler Details</h2>
        <input className="border p-2 w-full rounded mb-3" placeholder="Full Name" />
        <input className="border p-2 w-full rounded" placeholder="Email" />
      </div>

      <BookingSummary total={6200} />
    </div>
  );
}
