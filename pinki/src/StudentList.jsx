import React from 'react';

const StudentList = ({ students, onDelete }) => {
  return (
    <ul>
      {students.map((student, index) => (
        <li key={index}>
          {student.name} - {student.course}
          <button onClick={() => onDelete(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default StudentList;
