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
    sessionStorage.setItem('user', JSON.stringify(userData)); // セッションストレージに保存
  };

  useEffect(() => { // コンポーネントマウント時の副作用
    const storedUser = sessionStorage.getItem('user'); // セッションストレージからユーザーデータを取得
    if (storedUser) {
        setUser(JSON.parse(storedUser)); // ユーザーデータをステートにセット
    } else {
      axios.get('http://localhost:8080/api/session') // セッションAPIにリクエスト
          .then(response => {
              if (response.data.user) { // ユーザーデータが存在する場合
                  setUser(response.data.user); // ユーザーデータをステートにセット
                  sessionStorage.setItem('user', JSON.stringify(response.data.user)); // セッションストレージに保存
              } else {
                  setUser(null); // ユーザーデータが存在しない場合
              }
          })
          .catch(error => {
              console.error('セッション情報取得エラー:', error); // エラーログを出力
              setUser(null); // エラー時にユーザー状態をリセット
          });
    }
  }, []);

  return (
    <Router> 
      <Routes>
        <Route path="/" element={user ? <Navigate replace to="/dashboard" /> : <LoginForm onLogin={handleLoginSuccess} />} /> {/* ルートパスのルート */}
        <Route path="/dashboard" element={user ? <Dashboard user={user} /> : <Navigate replace to="/" />} /> {/* ダッシュボードパスのルート */}
      </Routes>
    </Router>
  );
};

export default App; // Appコンポーネントをエクスポート
