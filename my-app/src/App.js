import React, { useState } from "react";
import axios from "axios";

function App() {

  const [paragraph, setParagraph] = useState('');
  const [count, setCount] = useState('');

  const handleReset = () => {
    setParagraph('');
    setCount(0)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/count', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ paragraph }),
      })
      const data = await response.json();
      setCount(data.count);
    } catch(error) {
      console.error(error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value = {paragraph}
          onChange={(e) => setParagraph(e.target.value)}
          placeholder= "Enter your paragraph here"
          rows= "5"
          cols= "40"
        />
        <br />
        <button type = "submit"> Count Characters </button>
        <button type = "reset" onClick = {handleReset}> Clear Paragraph </button>
      </form>
      <br />
      <textarea
        value = {count}
        readOnly
        placeholder= "Character Count"
        rows="2"
        cols="10"
      />
    </div>
  );
}

export default App;
