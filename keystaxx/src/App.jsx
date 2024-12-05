import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Showcase from './pages/Showcase';
import Home from './pages/Home';
import ProductManual from './pages/ProductManual';
import CompanyProfile from './pages/CompanyProfile';
import DeveloperPage from './pages/DeveloperPage';
import Products from './pages/Products';
import Reviews from './pages/Reviews';
import EmployeeResume from './pages/EmployeeResume';
import './index.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/showcase" element={<Showcase />} />
          <Route path="/product/:id" element={<ProductManual />} />
          <Route path="/company-profile" element={<CompanyProfile />} />
          <Route path="/developer-page" element={<DeveloperPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/employee/:id" element={<EmployeeResume />} />
          <Route path="*" element={<div>404 Page Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
