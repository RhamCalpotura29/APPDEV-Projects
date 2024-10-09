import React from 'react';

const RegionSelector = ({ regions, onSelectRegion }) => {
  return (
    <select onChange={(e) => onSelectRegion(e.target.value)}>
      <option value="">Select a Region</option>
      {regions.map((region) => (
        <option key={region} value={region}>
          {region}
        </option>
      ))}
    </select>
  );
};

export default RegionSelector;

