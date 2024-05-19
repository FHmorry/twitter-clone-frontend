import React from 'react';

const Dashboard = ({ user }) => {
  return (
    <div>
      <p>{user ? `${user.username}でログインしています` : 'ログイン情報がありません。'}</p>
    </div>
  );
};

export default Dashboard;
