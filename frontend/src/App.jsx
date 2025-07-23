import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Careers from "./pages/Careers.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Aerostructures from "./pages/Aerostructures.jsx";
import Defence from "./pages/Defence.jsx";
import LandMobility from "./pages/LandMobility.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/aerostructures" element={<Aerostructures />} />
        <Route path="/defence" element={<Defence />} />
        <Route path="/landmobility" element={<LandMobility />} />
      </Routes>
    </Router>
  );
}
  

