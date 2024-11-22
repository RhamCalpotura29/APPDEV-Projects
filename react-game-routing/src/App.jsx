import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Games from "./components/Games";
import GameDetails from "./components/GameDetails";
import Footer from "./Footer";
import './index.css'

export default function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<h1>Welcome to the Game Reviews App</h1>} />
                <Route path="/games" element={<Games />} />
                <Route path="/games/:gameId" element={<GameDetails />} />
                <Route path="*" element={<h1>Page Not Found</h1>} />
            </Routes>
            <Footer />
        </Router>
    );
}
