import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-600">
        MakeMyTrip
      </Link>

      <div className="flex gap-6 text-sm font-medium">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/my-trips" className="hover:text-blue-600">My Trips</Link>
      </div>
    </nav>
  );
}
