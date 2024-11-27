import React from 'react';
import { Link } from 'react-router-dom';

const EmployeeCard = ({ id, name, position }) => (
    <div className="employee-card">
        <h3>{name}</h3>
        <p>{position}</p>
        <Link to={`/company-profile/${id}`}>View Profile</Link>
    </div>
);

export default EmployeeCard;
