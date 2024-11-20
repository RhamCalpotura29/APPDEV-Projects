import { Link } from "react-router-dom";

const Navbar = () => (
  <nav>
    <div className="logo">KB-X1000 Store</div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/overview">Overview</Link></li>
      <li><Link to="/specifications">Specifications</Link></li>
      <li><Link to="/setup">Setup</Link></li>
      <li><Link to="/troubleshooting">Support</Link></li>
      <li><Link to="/warranty">Warranty</Link></li>
    </ul>
    <input type="text" className="search-bar" placeholder="Search keyboards..." />
  </nav>
);

export default Navbar;
