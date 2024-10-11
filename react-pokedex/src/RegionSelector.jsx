import React from 'react';
import './index.css'; // CSS for styling the dropdown

const regions = [
  { name: 'kanto', icon: 'kanto-icon.png' },
  { name: 'johto', icon: 'johto-icon.png' },
  { name: 'hoenn', icon: 'hoenn-icon.png' },
  { name: 'sinnoh', icon: 'sinnoh-icon.png' }
];

const RegionSelector = ({ selectedRegion, onSelectRegion }) => {
  return (
    <select
      className="region-selector"
      value={selectedRegion}
      onChange={(e) => onSelectRegion(e.target.value)}
    >
      {regions.map((region) => (
        <option key={region.name} value={region.name}>
          {region.name.charAt(0).toUpperCase() + region.name.slice(1)} 
          {/* You can render icons here if desired */}
        </option>
      ))}
    </select>
  );
};

export default RegionSelector;
