import React, { FC } from 'react';  // Reactをインポート

// プロパティの型定義
interface LogoutButtonProps {
    onLogout: () => void;
}

// LogoutButtonコンポーネントの定義、onLogoutプロップを受け取る
const LogoutButton: FC<LogoutButtonProps> = ({ onLogout }) => {
    // ボタンがクリックされたときにonLogout関数を呼び出す
    const handleClick = () => {
        onLogout();
    };

    // ボタンのUIを返す
    return (
        <button onClick={handleClick}>ログアウト</button>
    );
};

export default LogoutButton;  // LogoutButtonコンポーネントをエクスポート