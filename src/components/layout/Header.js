import React from 'react';

const Header = ({ username }) => {
  return (
    <header>
      <h1>Twitter Clone</h1>
      <div>
        {username ? `ようこそ、${username}さん` : 'ようこそ、ゲストさん'}
      </div>
    </header>
  );
};

export default Header;