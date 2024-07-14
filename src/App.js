import React, { useState, useEffect } from 'react';                                  // Reactとそのフックをインポート
import './App.css';                                                                  // アプリケーションのスタイルシートをインポート
import axios from 'axios';                                                           // HTTPクライアントaxiosをインポート
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // ルーティングに必要なコンポーネントをインポート
import LoginForm from './components/Login/LoginForm';                                // ログインフォームコンポーネントをインポート
import Dashboard from './components/Dashboard/LoginUserName';                        // ダッシュボードコンポーネントをインポート

// axiosのデフォルト設定をグローバルに設定
axios.defaults.withCredentials = true;

const App = () => {
  // ユーザー状態を管理するステート
  const [user, setUser] = useState(null);

  // ログイン成功時のハンドラ
  const handleLoginSuccess = (userData) => {
    // ユーザーデータをステートにセット
    setUser(userData);
    // セッションストレージに保存
    sessionStorage.setItem('user', JSON.stringify(userData));
  };

  // ログアウト処理
  const handleLogout = async () => {
    try {
      // バックエンドにログアウトリクエストを送信
      const response = await axios.post('/logout', {}, {
        withCredentials: true
      });
      // レスポンスが成功した場合のみ以下の処理を行う
      if (response.status === 200) {
        console.log('ログアウト成功: セッションストレージをクリアします');
        // セッションストレージをクリア
        sessionStorage.clear();
        console.log('セッションストレージをクリアしました: ユーザー状態をリセットします');
        // ユーザー状態をリセット
        setUser(null);
        console.log('ユーザー状態をリセットしました: ページをリロードします');
        // ページをリロード
        window.location.reload();
      } else {
        console.error('ログアウトに失敗しました:', response.statusText);
      }
    } catch (error) {
      // ログアウトリクエスト失敗時のエラーハンドリ��グ
      console.error('ログアウトエラー:', error);
    }
  };

  // コンポーネントマウント時の副作用
  useEffect(() => {
    // セッションストレージからユーザーデータを取得
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      // ユーザーデータをステートにセット
      setUser(JSON.parse(storedUser));
    } else {
      // セッションAPIにリクエスト
      axios.get('/session')
        .then(response => {
          // ユーザーデータが存在する場合
          if (response.data.user) {
            // ユーザーデータをステートにセット
            setUser(response.data.user);
            // セッションストレージに保存
            sessionStorage.setItem('user', JSON.stringify(response.data.user));
          } else {
            // ユーザーデータが存在しない場合
            setUser(null);
          }
        })
        .catch(error => {
          // エラーログを出力
          console.error('セッション情報取得エラー:', error);
          // エラー時にユーザー状態をリセット
          setUser(null);
        });
    }

  }, []);

  return (
    <Router> 
      <Routes>
        {/* ルートパスのルート */}
        <Route path="/" element={user ? <Navigate replace to="/dashboard" /> : <LoginForm onLogin={handleLoginSuccess} />} />
        {/* ダッシュボードパスのルート */}
        <Route path="/dashboard" element={user ? <Dashboard user={user} onLogout={handleLogout} /> : <Navigate replace to="/" />} />
      </Routes>
    </Router>
  );
};

// Appコンポーネントをエクスポート
export default App;