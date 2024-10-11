import React from 'react';

const SortDropdown = ({ onSortChange }) => {
  return (
    <div className="sort-container">
      <label htmlFor="sort">Sort by: </label>
      <select id="sort" className="sort-dropdown" onChange={(e) => onSortChange(e.target.value)}>
        <option value="name">Name</option>
        <option value="id">ID</option>
        <option value="type">Type</option>
      </select>
    </div>
  );
};

export default SortDropdown;
