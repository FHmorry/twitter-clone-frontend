import React, { FC, useState } from 'react';
import axios from 'axios';
import ErrorMessage from '../common/ErrorMessage'; // ErrorMessageコンポーネントをインポート

interface RegisterFormProps {
  onRegisterSuccess: () => void;
}

// RegisterFormコンポーネント
const RegisterForm: FC<RegisterFormProps> = ({ onRegisterSuccess }) => {
  // ユーザー名の状態を管理
  const [username, setUsername] = useState('');
  // パスワードの状態を管理
  const [password, setPassword] = useState('');
  // メールアドレスの状態を管理
  const [email, setEmail] = useState('');
  // エラーメッセージの状態を管理
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // フォーム送信時のハンドラ
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!username || !password || !email) {
      setErrorMessage('すべての項目を入力してください。');
      return;
    }
    try {
      // 登録リクエストを送信
      const response = await axios.post('/register', { username, password, email });
      if (response.status === 200) {
        // 登録成功時の処理
        onRegisterSuccess();
      }
    } catch (error) {
      // 登録エラー時の処理
      console.error('登録エラー:', error);
      if (axios.isAxiosError(error)) {
        setErrorMessage(error.response?.data || '登録に失敗しました。もう一度お試しください。');
      } else {
        setErrorMessage('登録に失敗しました。もう一度お試しください。');
      }
    }
  };

  // フォームのUIを返す
  return (
    <form onSubmit={handleSubmit}>
      <h2>ユーザー登録</h2>
      {errorMessage && <ErrorMessage message={errorMessage} />}
      <div>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='ユーザー名を入力してください'/>
      </div>
      <div>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='パスワードを入力してください'/>
      </div>
      <div>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='メールアドレスを入力してください'/>
      </div>
      <button type="submit" disabled={!username || !password || !email}>登録</button>
    </form>
  );
};

export default RegisterForm;