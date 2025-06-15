import React, { useState } from 'react';
import StudentForm from './StudentForm';
import StudentList from './StudentList';

const App = () => {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const deleteStudent = (index) => {
    const updated = students.filter((_, i) => i !== index);
    setStudents(updated);
  };

  return (
    <div className="container">
      <h2>Student List App</h2>
      <StudentForm onAdd={addStudent} />
      <StudentList students={students} onDelete={deleteStudent} />
    </div>
  );
};

export default App;
