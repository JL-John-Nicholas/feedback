import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [rollNo, setRollNo] = useState('');
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('Math');
  const [rating, setRating] = useState('5');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { rollNo, name, subject, rating };
    try {
      await axios.post('https://p03vpwxgk2.execute-api.us-east-1.amazonaws.com/prod/feedback', data);
      alert('Feedback submitted!');
    } catch (error) {
      console.error(error);
      alert('Submission failed.');
    }
  };

  return (
    <div className="App">
      <h1>Feedback Form</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="Roll No" value={rollNo} onChange={(e) => setRollNo(e.target.value)} required /><br /><br />
        <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required /><br /><br />
        <select value={subject} onChange={(e) => setSubject(e.target.value)}>
          <option value="Math">Math</option>
          <option value="Science">Science</option>
          <option value="English">English</option>
        </select><br /><br />
        <select value={rating} onChange={(e) => setRating(e.target.value)}>
          {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n}</option>)}
        </select><br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default App;
