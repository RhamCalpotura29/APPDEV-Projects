import React from 'react';
import Profile from './Profile';
import Footer from './Footer';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="content">
        <Profile />
      </main>
      <Footer />
    </div>
  );
}

export default App;
