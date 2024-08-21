import React, { useState, FC } from 'react';  // React、useStateフック、FCをインポート
import axios from 'axios';  // axiosライブラリをインポート

// LoginFormコンポーネントのプロパティの型定義
interface LoginFormProps {
    onLogin: (username: string) => void; // dataをusernameに変更
}

// LoginFormコンポーネントの定義、onLoginプロップを受け取る
const LoginForm: FC<LoginFormProps> = ({ onLogin }) => {
    const [username, setUsername] = useState('');  // ユーザー名の状態を管理
    const [password, setPassword] = useState('');  // パスワードの状態を管理

    // ログイン処理を行う非同期関数
    const handleLogin = async (event: React.FormEvent) => {  // 'event'の型を明示的に指定
        // フォームのデフォルトの送信を防止
        event.preventDefault();  
        try {
            // ログインAPIにPOSTリクエストを送信
            const response = await axios.post('/login', { username, password }, { withCredentials: true });  
            if (response.data) {
                
                // レスポンスデータがあれば親コンポーネントのコールバック関数を呼び出す
                onLogin(response.data.username);  
            }
        } catch (error: unknown) {  // 'error'の型をunknownに指定
            // axiosエラーかどうかをチェック
            if (axios.isAxiosError(error)) {  
                if (error.response) {
                    // エラーレスポンスを出力
                    console.log('Error response:', error.response);  
                } else if (error.request) {
                    // エラーレクエストを出力
                    console.log('Error request:', error.request);  
                } else {
                    // エラーメッセージを出力
                    console.log('Error message:', error.message);  
                }
            } else {
                // 予期しないエラーを出力
                console.log('Unexpected error:', error);  
            }
        }
    };

    // フォームのUIを返す
    return (
        <form onSubmit={handleLogin}>
            <h2>ログイン</h2>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="ユーザー名を入力" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="パスワードを入力" />
            <button type="submit">ログイン</button>
        </form>
    );
};

export default LoginForm;  // LoginFormコンポーネントをエクスポート