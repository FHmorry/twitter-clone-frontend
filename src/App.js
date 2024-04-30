import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import './App.css';

const App = () => {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    // バックエンドからユーザー情報を取得するロジックをここに記述
    // 例: setUsername('ユーザー名');
  }, []);

  return (
    <div className="App">
      <Header username={username} />
      {/* その他のコンテンツ */}
    </div>
  );
};

export default App;