import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import './App.css';
import axios from 'axios';

const App = () => {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/api/user')
      .then(response => {
        setUsername(response.data);
      })
      .catch(error => console.error('Error fetching user data:', error));
  }, []);

  return (
    <div className="App">
      <Header username={username} />
      {/* その他のコンテンツ */}
    </div>
  );
};

export default App;