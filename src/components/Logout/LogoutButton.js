import React from 'react';  // Reactをインポート

// LogoutButtonコンポーネントの定義、onLogoutプロップを受け取る
const LogoutButton = ({ onLogout }) => {
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