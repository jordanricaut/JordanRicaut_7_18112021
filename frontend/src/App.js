import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

function App() {

  useEffect(() => {
    document.title = "Groupomania"
  }, [])

  return (
    <h1>Groupomania</h1>
  );
}

export default App;
