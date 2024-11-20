import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Overview from "./Overview";
import Specifications from "./Specifications";
import SetupInstructions from "./SetupInstructions";
import Troubleshooting from "./Troubleshooting";
import Maintenance from "./Maintenance";
import Warranty from "./Warranty";
import Footer from "./Footer";
import './index.css';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/overview" element={<Overview />} />
      <Route path="/specifications" element={<Specifications />} />
      <Route path="/setup" element={<SetupInstructions />} />
      <Route path="/troubleshooting" element={<Troubleshooting />} />
      <Route path="/maintenance" element={<Maintenance />} />
      <Route path="/warranty" element={<Warranty />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
