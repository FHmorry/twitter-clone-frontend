import React, { useState, useEffect, FC } from 'react';                                  // Reactとそのフックをインポート
import './App.css';                                                                  // アプリケーションのスタイルシートをインポート
import axios from 'axios';                                                           // HTTPクライアントaxiosをインポート
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom'; // ルーティングに必要なコンポーネントをインポート
import LoginForm from './components/Auth/LoginForm';                                // ログインフォームコンポーネントをインポート
import Dashboard from './components/Dashboard/LoginUserName';                        // ダッシュボードコンポーネントをインポート
import RegisterForm from './components/Auth/RegisterForm'; // 新規登録フォームコンポーネントをインポート

// axiosのデフォルト設定をグローバルに設定
axios.defaults.withCredentials = true;

// Appコンポーネントのプロパティの型定義
interface AppProps {}

// Appコンポーネントの定義
const App: FC<AppProps> = (props) => {
  // ユーザー状態を管理するステート
  const [user, setUser] = useState<string | null>(null);
  // ログイン成功時のハンドラ
  const handleLoginSuccess = (username: string) => {
    // ユーザー名をステートにセット
    setUser(username);
    // セッションストレージに保存
    sessionStorage.setItem('user', username);
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
        // セッションストレージをクリア
        sessionStorage.clear();
        // ユーザー状態をリセット
        setUser(null);
        // ページをリロード
        window.location.reload();
      }
    } catch (error) {
      // ログアウトリクエスト失敗時のエラーハンドリング
    }
  };

  const handleRegisterSuccess = () => {
    clearLocalSession();
    // ログインページにリダイレクト
    window.location.href = '/';
  };

  const clearLocalSession = () => {
    sessionStorage.clear();
    setUser(null);
  };

  // コンポーネントマウント時の副作用
  useEffect(() => {
    // セッションストレージからユーザー名を取得
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      // ユーザー名をステートにセット
      setUser(storedUser);
    } else {
      // セッションAPIにリクエスト
      axios.get('/session')
        .then(response => {
          // ユーザー名が存在する場合
          if (response.data.username) {
            // ユーザー名をステートにセット
            setUser(response.data.username);
            // セッションストレージに保存
            sessionStorage.setItem('user', response.data.username);
          } else {
            // ユーザー名が存在しない場合
            setUser(null);
          }
        })
        .catch(error => {
          // エラー時にユーザー状態をリセット
          setUser(null);
        });
    }

  }, []);

  return (
    <Router> 
      <Routes>
        {/* ルートパスのルート */}
        <Route path="/" element={user ? <Navigate replace to="/dashboard" /> : 
          <>
            <LoginForm onLogin={handleLoginSuccess} />
            <Link to="/register">新規登録</Link>
          </>
        } />
        {/* ダッシュボードパスのルート */}
        <Route path="/dashboard" element={user ? <Dashboard username={user} onLogout={handleLogout} /> : <Navigate replace to="/" />} />
        <Route path="/register" element={user ? <Navigate replace to="/dashboard" /> : <RegisterForm onRegisterSuccess={handleRegisterSuccess} />} />
      </Routes>
    </Router>
  );
};

// Appコンポーネントをエクスポート
export default App;