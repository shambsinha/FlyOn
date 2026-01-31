export default function BookingSummary({ total }) {
  return (
    <div className="bg-gray-50 p-4 rounded shadow">
      <h3 className="font-semibold mb-2">Fare Summary</h3>
      <p className="text-lg font-bold">₹{total}</p>

      <button className="w-full mt-4 bg-orange-500 text-white py-2 rounded">
        Pay Now
      </button>
    </div>
  );
}
