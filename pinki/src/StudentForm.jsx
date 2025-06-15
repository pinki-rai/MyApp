import React, { useState } from 'react';

const StudentForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !course) return;
    onAdd({ name, course });
    setName('');
    setCourse('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default StudentForm;
