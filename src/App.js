import React, { useState, useEffect } from 'react'; // Reactとそのフックをインポート
import './App.css'; // アプリケーションのスタイルシートをインポート
import axios from 'axios'; // HTTPクライアントaxiosをインポート
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // ルーティングに必要なコンポーネントをインポート
import LoginForm from './components/Login/LoginForm'; // ログインフォームコンポーネントをインポート
import Dashboard from './components/Dashboard/LoginUserName'; // ダッシュボードコンポーネントをインポート

const App = () => {
  const [user, setUser] = useState(null); // ユーザー状態を管理するステート

  const handleLoginSuccess = (userData) => { // ログイン成功時のハンドラ
    setUser(userData); // ユーザーデータをステートにセット
  };

  useEffect(() => { // コンポーネントマウント時の副作用
    axios.get('http://localhost:8080/api/user') // ユーザーデータをAPIから取得
      .then(response => {
        setUser(response.data); // レスポンスデータをユーザーステートにセット
      })
      .catch(error => console.error('ユーザーデータ取得エラー:', error)); // エラー処理
  }, []);
  
  return (
    <Router> 
      <Routes>
        <Route path="/" element={user ? <Navigate replace to="/dashboard" /> : <LoginForm onLogin={handleLoginSuccess} />} />
        <Route path="/dashboard" element={<Dashboard user={user} />} />
      </Routes>
    </Router>
  );
};

export default App; // Appコンポーネントをエクスポート
