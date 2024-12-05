import React from 'react';
import { useParams } from 'react-router-dom';
import { employees } from '../data/employee';

const EmployeeResume = () => {
  const { id } = useParams();
  const employee = employees.find((emp) => emp.id === parseInt(id));

  if (!employee) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Employee not found</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto glass-card p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">{employee.name}'s Resume</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Position</h3>
            <p className="text-gray-600">{employee.position}</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Experience</h3>
            <p className="text-gray-600">{employee.experience}</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {employee.skills.map((skill, index) => (
                <span 
                  key={index}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeResume;
