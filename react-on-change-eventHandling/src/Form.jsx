import React, { useState } from 'react';
import StudentCard from './StudentCard';

var attendance = [];

export default function Form() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [date, setDate] = useState('');

  const handleIdChange = (event) => setId(event.target.value);
  const handleNameChange = (event) => setName(event.target.value);
  const handleCourseChange = (event) => setCourse(event.target.value);
  const handleAgeChange = (event) => setAge(event.target.value);
  const handleGenderChange = (event) => setGender(event.target.value);
  const handleDateChange = (event) => setDate(event.target.value);

  function addAttendance() {
    attendance.push({
      id,
      name,
      course,
      age,
      gender,
      date,
    });
    alert('Attendance added!');
    setId(0);
    setName('');
    setCourse('');
    setAge(0);
    setGender('');
    setDate('');
  }

  return (
    <>
      <h4>Student Attendance Information Form:</h4>
      <div className="form-container">
        <label>ID Number:</label>
        <input type="text" value={id} onChange={handleIdChange} /><br />
        <label>Name:</label>
        <input type="text" value={name} onChange={handleNameChange} /><br />
        <label>Course:</label>
        <input type="text" value={course} onChange={handleCourseChange} /><br />
        <label>Age:</label>
        <input type="number" value={age} onChange={handleAgeChange} /><br />
        <label>Gender:</label>
        <div className="radio-group">
          <label><input type="radio" value="Male" checked={gender === 'Male'} onChange={handleGenderChange} /> Male</label>
          <label><input type="radio" value="Female" checked={gender === 'Female'} onChange={handleGenderChange} /> Female</label>
        </div>
        <label>Date:</label>
        <input type="date" value={date} onChange={handleDateChange} /><br />

        <button onClick={addAttendance}>Submit</button>
      </div>

      {attendance.length > 0 ? (
        <StudentCard students={attendance} />
      ) : (
        <p>No students added yet.</p>
      )}
    </>
  );
}
