// SortDropdown.jsx
import React from 'react';

const SortDropdown = ({ sortOrder, onSortChange }) => {
  return (
    <div className="sort-container">
      <label htmlFor="sort">Sort by: </label>
      <select 
        id="sort" 
        value={sortOrder} 
        onChange={(e) => onSortChange(e.target.value)} 
        className="sort-dropdown"
      >
        <option value="name">Sort by Name</option>
        <option value="id">Sort by ID</option>
      </select>
    </div>
  );
};

export default SortDropdown;
