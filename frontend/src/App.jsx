import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FlightResults from "./pages/FlightResults";
import HotelResults from "./pages/HotelResults";
import Booking from "./pages/Booking";
import Confirmation from "./pages/Confirmation";
import MyTrips from "./pages/MyTrips";
import Navbar from "./components/common/NavBar";

export default function App() {
  return (
    <div className="min-h-screen bg-sky-50">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flights" element={<FlightResults />} />
        <Route path="/hotels" element={<HotelResults />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/my-trips" element={<MyTrips />} />
      </Routes>
    </div>
  );
}
