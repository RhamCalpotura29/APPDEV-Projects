import React from 'react';
import './index.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVLXtNGWGeP9w92SZhQ60zAUQOhC1jKeIq1A&s" alt="profile-icon" />
      <h1>Rham Benedict C. Calpotura</h1>
      
      <section>
      <h2>Education</h2>
      <div>
        <h3>Elementary Education</h3>
        <p>Manuel L. Quezon Elementary School, Baguio City, Benguet 2009 – 2015.</p>
      </div>
      <div>
        <h3>Secondary Level Education</h3>
        <p>Baguio City High School, Baguio City, Benguet 2015 – 2019</p>
      </div>
      <div>
        <h3>Upper Secondary Level Education</h3>
        <p>Baguio College of Technology, Baguio City, Benguet ICT Programming 2019 – 2021.</p>
      </div>
      <div>
        <h3>Tertiary Level Education</h3>
        <p>University of Baguio, Baguio City, Benguet Bachelor of Science in Computer Science 2021 – Present</p>
      </div>
      <div>
        <h3>Awards and Qualifications</h3>
        <ol>
          <li>Introduction to Cybersecurity Certificate University of Baguio (2023) CISCO Networking Academy</li> <br/>
          <li>Introduction to Packet Tracer Certificate University of Baguio (2022) CISCO Networking Academy</li>
        </ol>
      </div>
    </section>
      <section>
        <h3>Likes</h3>
        <ul>
          <li>Coding</li>
          <li>Reading Tech Blogs</li>
          <li>Playing Chess</li>
        </ul>
      
        <h3>Dislikes</h3>
        <ul>
          <li>Procrastination</li>
          <li>Unorganized Code</li>
          <li>Slow Internet</li>
        </ul>

        <h3>Hobbies</h3>
        <ul>
          <li>Playing basketball</li>
          <li>Computer Games</li>
          <li>Driving</li>
          <li>Puzzle-Solving</li>
        </ul>

        <h3>Personal Motto:</h3>
        <ul>
          <li>“Passion is energy. Feel the power that comes from focusing on what excites you.”</li>
        </ul>
      </section>
    </div>
  );
};

export default Profile;

