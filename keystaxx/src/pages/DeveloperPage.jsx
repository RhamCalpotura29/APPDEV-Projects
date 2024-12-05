import React, { useState } from 'react';

const DeveloperPage = () => {
  const [vouches, setVouches] = useState(0);

  return (
    <div className="developer-page flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-xl w-11/12 max-w-2xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Developer Profile</h2>
        <p className="text-xl text-gray-700 mb-2">
          <strong>Name:</strong> Rham Benedict C. Calpotura
        </p>
        <p className="text-lg text-gray-600 mb-4">
          <strong>Role:</strong> Frontend Developer & Web Enthusiast
        </p>
        <p className="text-md text-gray-600 mb-6">
          I am a passionate computer science student with a focus on web development. 
          I specialize in building responsive and dynamic web applications using 
          modern technologies like React, JavaScript, and CSS. I'm constantly improving 
          my skills and striving to create engaging user experiences.
        </p>

        <button
          onClick={() => setVouches(vouches + 1)}
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none"
        >
          Vouch ({vouches})
        </button>
      </div>
    </div>
  );
};

export default DeveloperPage;
