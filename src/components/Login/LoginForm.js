import React, { useState } from 'react';  // ReactとuseStateフックをインポート
import axios from 'axios';  // axiosライブラリをインポート

// LoginFormコンポーネントの定義、onLoginプロップを受け取る
const LoginForm = ({ onLogin }) => {
    const [username, setUsername] = useState('');  // ユーザー名の状態を管理
    const [password, setPassword] = useState('');  // パスワードの状態を管理

    // ログイン処理を行う非同期関数
    const handleLogin = async (event) => {
        event.preventDefault();  // フォームのデフォルトの送信を防止
        try {
            const response = await axios.post('/login', { username, password });  // ログインAPIにPOSTリクエストを送信
            if (response.data) {
                onLogin(response.data);  // レスポンスデータがあれば親コンポーネントのコールバック関数を呼び出す
            }
        } catch (error) {
            console.error('Login error:', error);  // エラーが発生した場合、コンソールにエラーを出力
        }
    };

    // フォームのUIを返す
    return (
        <form onSubmit={handleLogin}>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="ユーザー名を入力" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="パスワードを入力" />
            <button type="submit">ログイン</button>
        </form>
    );
};

export default LoginForm;  // LoginFormコンポーネントをエクスポート
