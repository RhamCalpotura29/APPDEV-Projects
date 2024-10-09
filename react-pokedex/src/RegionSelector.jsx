import React from 'react';


const regions = [
  { value: 'kanto', label: 'Kanto' },
  { value: 'johto', label: 'Johto' },
  { value: 'hoenn', label: 'Hoenn' },
  { value: 'sinnoh', label: 'Sinnoh' },
  { value: 'unova', label: 'Unova' },
  { value: 'kalos', label: 'Kalos' },
];

const RegionSelector = ({ selectedRegion, onRegionChange }) => {
  return (
    <Select value={selectedRegion} onValueChange={onRegionChange}>
      <SelectTrigger className="w-full sm:w-[180px]">
        <SelectValue placeholder="Select a region" />
      </SelectTrigger>
      <SelectContent>
        {regions.map((region) => (
          <SelectItem key={region.value} value={region.value}>
            {region.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default RegionSelector;