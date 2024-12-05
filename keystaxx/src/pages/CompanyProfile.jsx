import React from 'react';
import { Link } from 'react-router-dom';
import { employees } from '../data/employee';

const CompanyProfile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {employees.map((employee) => (
            <div key={employee.id} className="glass-card p-6 hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{employee.name}</h3>
              <p className="text-lg text-gray-600 mb-2">Position: {employee.position}</p>
              <p className="text-gray-600 mb-4">Experience: {employee.experience}</p>
              <Link 
                to={`/employee/${employee.id}`}
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                View Resume
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
