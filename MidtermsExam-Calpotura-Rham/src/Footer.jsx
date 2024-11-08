import React from 'react';

function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const formattedDate = currentDate.toLocaleDateString();

  return (
    <footer>
      <h5>Rham Calpotura: {formattedDate}, {currentYear}</h5>
    </footer>
  );
}

export default Footer;
