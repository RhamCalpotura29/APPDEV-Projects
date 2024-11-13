export default function StudentCard(props) {
    const listOfstudents = props.students;
    const student = listOfstudents.map((student) => (
      <div key={student.id} className="student-entry">
        <h4>Student ID Number: {student.id}</h4>
        <p>Name: {student.name}</p>
        <p>Course: {student.course}</p>
        <p>Age: {student.age}</p>
        <p>Gender: {student.gender}</p>
        <p>Date: {student.date}</p>
      </div>
    ));
  
    return <div className="student-card">{student}</div>;
  }
  