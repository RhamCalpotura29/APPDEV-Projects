const Home = () => (
    <div>
      <header className="hero-section">
        <h1>Welcome to the KB-X1000 Store</h1>
        <p>Explore premium keyboards designed for performance and comfort.</p>
        <button className="cta-button">Shop Now</button>
      </header>
      <div className="product-container">
        <div className="product-image">
          <img src="https://m.media-amazon.com/images/I/61jfaUCa3wL._AC_SL1500_.jpg" alt="KB-X1000" />
        </div>
        <div className="product-details">
          <h2>KB-X1000 Mechanical Keyboard</h2>
          <p>High-performance RGB keyboard for gamers and professionals.</p>
          <ul className="specifications">
            <li>Switch Type: Cherry MX Red</li>
            <li>Backlighting: Customizable RGB</li>
            <li>Connectivity: Wired (USB 2.0)</li>
          </ul>
          <div className="price">$129.99</div>
          <a href="/specifications" className="buy-now">View Details</a>
        </div>
      </div>
    </div>
  );
  
  export default Home;
  