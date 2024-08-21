import React, { FC } from 'react';
import LogoutButton from '../Auth/LogoutButton'; // LogoutButtonコンポーネントをインポート

interface DashboardProps {
  username: string;
  onLogout: () => Promise<void>;
}

const Dashboard: FC<DashboardProps> = ({ username, onLogout }) => {
  return (
    <div>
      <p>{username ? `${username}でログインしています` : 'ログイン情報がありません。'}</p>
      {username && <LogoutButton onLogout={onLogout} />} {/* ユーザーがログインしている場合にログアウトボタンを表示 */}
    </div>
  );
};

export default Dashboard;