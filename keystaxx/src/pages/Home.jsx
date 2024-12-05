import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Footer from '../components/Footer';
import { products } from '../data/products';

const Home = () => {
  // Filter out undefined values and ensure we only have valid products
  const filteredProducts = products.filter = [
    products.find(product => product.type === "mechanical"),
    products.find(product => product.type === "regular"),
    products.find(product => product.type === "artisan"),
  ].filter(product => product !== undefined);  // Remove undefined products

  // Selecting 3 featured products manually from the products array
  const featuredProducts = products.slice(0, 3);  // Adjust this based on your data

  return (
    <div className="home-container">
      <h1>Welcome to KeyStaxx</h1>
      <p>Your go-to destination for mechanical and artisan keyboards.</p>

      {/* Featured Products Section */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="featured-grid">
          {featuredProducts.map(product => (
            <div key={product.id} className="featured-product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p> 
              {/* Redirect to product details page */}
              <Link to={`/product/${product.id}`}>
                <button>View Details</button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="about-section">
        <h2>Why Choose KeyStaxx?</h2>
        <p>We provide high-quality, customizable keyboards that suit both professionals and enthusiasts. Whether you're a gamer, office worker, or a keyboard collector, KeyStaxx has the perfect product for you.</p>
        <p>Explore our wide range of options, from mechanical to artisan designs, and enjoy a seamless typing experience.</p>
      </section>

      <section className="mission-vision-section">
        <h2>Our Mission</h2>
        <p>To deliver high-quality, customizable mechanical keyboards to enthusiasts worldwide.</p>
        <h2>Our Vision</h2>
        <p>To be the leading provider of innovative and artisan mechanical keyboards globally.</p>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Home;
