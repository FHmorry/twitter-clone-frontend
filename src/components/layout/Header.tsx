import React, { FC } from 'react';

interface HeaderProps {
  username?: string;
}

const Header: FC<HeaderProps> = ({ username }) => {
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