import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const products = [
    {
        id: 1,
        name: 'KeyStaxx Elite MK100',
        materials: 'Aluminum, PBT Plastic',
        keySwitch: 'Cherry MX Red',
        keycaps: 'Double-shot PBT',
        connection: 'Wired (USB-C)',
        description: 'A premium mechanical keyboard for gamers and typists with smooth switches and durable build.',
    },
    {
        id: 2,
        name: 'KeyStaxx Compact K65',
        materials: 'Plastic, Aluminum Top Plate',
        keySwitch: 'Gateron Brown',
        keycaps: 'ABS Plastic',
        connection: 'Wireless (Bluetooth, 2.4GHz)',
        description: 'Compact 65% layout keyboard perfect for space-saving setups and productivity.',
    },
    {
        id: 3,
        name: 'KeyStaxx Artisan Pro',
        materials: 'Wooden Frame, Resin',
        keySwitch: 'Kailh Box White',
        keycaps: 'Handcrafted Resin Artisan',
        connection: 'Wired (USB-C)',
        description: 'A handcrafted artisan keyboard designed for enthusiasts and collectors.',
    },
    {
        id: 4,
        name: 'KeyStaxx RGB Gamer X300',
        materials: 'Plastic, Steel Frame',
        keySwitch: 'Razer Green',
        keycaps: 'Pudding-style ABS',
        connection: 'Wired (USB-A)',
        description: 'High-performance gaming keyboard with customizable RGB lighting and tactile switches.',
    },
    {
        id: 5,
        name: 'KeyStaxx Wireless Wonder',
        materials: 'Plastic, Aluminum Base',
        keySwitch: 'Cherry MX Silent Red',
        keycaps: 'PBT Plastic',
        connection: 'Wireless (Bluetooth)',
        description: 'A quiet and reliable keyboard perfect for office environments with wireless connectivity.',
    },
    {
        id: 6,
        name: 'KeyStaxx Ergonomic Pro',
        materials: 'Plastic, Memory Foam',
        keySwitch: 'Logitech GX Brown',
        keycaps: 'Double-shot ABS',
        connection: 'Wired (USB-C)',
        description: 'An ergonomic keyboard with a split layout to provide maximum comfort for long typing sessions.',
    },
    {
        id: 7,
        name: 'KeyStaxx Silent Writer',
        materials: 'Plastic',
        keySwitch: 'Membrane',
        keycaps: 'Laser-etched ABS',
        connection: 'Wired (USB)',
        description: 'A silent membrane keyboard for writers who need a distraction-free typing experience.',
    },
    {
        id: 8,
        name: 'KeyStaxx Minimalist 60%',
        materials: 'Aluminum',
        keySwitch: 'Gateron Yellow',
        keycaps: 'Double-shot PBT',
        connection: 'Wired (USB-C)',
        description: 'Minimalist 60% layout with smooth linear switches for a sleek and compact typing setup.',
    },
    {
        id: 9,
        name: 'KeyStaxx Wireless Combo',
        materials: 'Plastic',
        keySwitch: 'Mechanical Hybrid',
        keycaps: 'ABS',
        connection: 'Wireless (Bluetooth, 2.4GHz)',
        description: 'A versatile wireless combo with ergonomic design and customizable features.',
    },
    {
        id: 10,
        name: 'KeyStaxx Pro Type S',
        materials: 'Steel Frame, Plastic',
        keySwitch: 'Topre Electro-Capacitive',
        keycaps: 'PBT Dye-sub',
        connection: 'Wired (USB-C)',
        description: 'Premium keyboard with electro-capacitive switches and quiet operation for professionals.',
    },
];

const ProductListing = () => (
    <>
        <Header />
        <main>
            <h2>Product Listing</h2>
            <div className="product-list">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <h3>{product.name}</h3>
                        <p><strong>Materials:</strong> {product.materials}</p>
                        <p><strong>Key Switch:</strong> {product.keySwitch}</p>
                        <p><strong>Keycaps:</strong> {product.keycaps}</p>
                        <p><strong>Connection:</strong> {product.connection}</p>
                        <p>{product.description}</p>
                        <Link to={`/products/${product.id}`}>
                            <button>View Manual</button>
                        </Link>
                    </div>
                ))}
            </div>
        </main>
    </>
);

export default ProductListing;
