import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';

const EmployeeResume = () => {
    const { id } = useParams();
    const employeeDetails = {
        1: { name: 'Alice Johnson', qualifications: 'MBA, 15 years of experience in tech leadership.' },
        2: { name: 'Bob Smith', qualifications: 'BA in Design, 10 years of experience in UX/UI.' },
        // Add more details for other employees
    };

    const employee = employeeDetails[id];

    return (
        <>
            <Header />
            <main>
                <h2>{employee?.name}</h2>
                <p>{employee?.qualifications}</p>
            </main>
        </>
    );
};

export default EmployeeResume;
