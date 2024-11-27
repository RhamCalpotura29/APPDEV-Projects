import React from 'react';
import Header from '../components/Header';
import EmployeeCard from '../components/EmployeeCard';

const CompanyProfile = () => {
    const employees = [
        { id: 1, name: 'Alice Johnson', position: 'CEO' },
        { id: 2, name: 'Bob Smith', position: 'Lead Designer' },
        // Add more employees here
    ];

    return (
        <>
            <Header />
            <main>
                <h2>Company Profile</h2>
                <div className="employee-list">
                    {employees.map((employee) => (
                        <EmployeeCard key={employee.id} {...employee} />
                    ))}
                </div>
            </main>
        </>
    );
};

export default CompanyProfile;
