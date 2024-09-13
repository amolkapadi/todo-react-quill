import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
import './App.css';

const App = () => {
  const [value, setValue] = useState(''); 
  const [notes, setNotes] = useState([]); 
  const handleSubmit = (e) => {
    e.preventDefault();
    setNotes([...notes, value]);
    setValue('');
  };
  return (
    <div className="conatiner">
      <h2>React Quill Notes Application</h2>
      <ReactQuill 
        theme="snow" 
        value={value} 
        onChange={setValue} 
        className="custom-editor" 
      />
      <button onClick={handleSubmit} className='add-btn' disabled={!value.trim()}>
        Add Note
      </button>
      <div style={{ marginTop: '20px' }}>
        <h3>Your Notes:</h3>
        {notes.length === 0 && <p>No notes yet.</p>}
        <ul>
          {notes.map((note, index) => (
            <li key={index} style={{ marginBottom: '20px'}}>
              <div dangerouslySetInnerHTML={{ __html: note }} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
