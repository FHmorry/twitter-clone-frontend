import React, { FC } from 'react';
import LogoutButton from '../Logout/LogoutButton'; // LogoutButtonコンポーネントをインポート

interface DashboardProps {
  user: { username: string } | null;
  onLogout: () => void;
}

const Dashboard: FC<DashboardProps> = ({ user, onLogout }) => {
  return (
    <div>
      <p>{user ? `${user.username}でログインしています` : 'ログイン情報がありません。'}</p>
      {user && <LogoutButton onLogout={onLogout} />} {/* ユーザーがログインしている場合にログアウトボタンを表示 */}
    </div>
  );
};

export default Dashboard;
