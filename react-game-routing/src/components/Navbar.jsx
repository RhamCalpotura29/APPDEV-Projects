import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav style={{ padding: "1rem", background: "#f8f9fa" }}>
            <h2>Game Reviews</h2>
            <ul style={{ listStyle: "none", display: "flex", gap: "1rem" }}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/games">Games</Link></li>
            </ul>
        </nav>
    );
}
