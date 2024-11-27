import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MissionVision from './pages/MissionVision';
import Showcase from './pages/Showcase';
import Products from './pages/Products';
import ProductManual from './pages/ProductManual';
import ArtisanKeyboards from './pages/ArtisanKeyboards';
import Reviews from './pages/Reviews';
import CompanyProfile from './pages/CompanyProfile';
import DeveloperPage from './pages/DeveloperPage';
import EmployeeResume from './pages/EmployeeResume';
import './index.css'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mission-vision" element={<MissionVision />} />
                <Route path="/showcase" element={<Showcase />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductManual />} />
                <Route path="/artisan-keyboards" element={<ArtisanKeyboards />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/company-profile" element={<CompanyProfile />} />
                <Route path="/company-profile/:id" element={<EmployeeResume />} />
                <Route path="/developers" element={<DeveloperPage />} />
            </Routes>
        </Router>
    );
};

export default App;
