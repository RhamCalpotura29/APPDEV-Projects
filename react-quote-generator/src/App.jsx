// src/App.jsx
import React from 'react';
import QuoteGenerator from './QuoteGenerator';
import './index.css';
import Header from './Header'; 
import Footer from './Footer'; 

const App = () => {
  return (
    <div className="app-container">
      <Header />    
      <QuoteGenerator />
      <Footer />    
    </div>
  );
};

export default App;
