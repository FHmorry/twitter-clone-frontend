import React, { FC } from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

interface TestProps {
  // プロパティの型定義（必要に応じて追加）
}

const TestComponent: FC<TestProps> = (props) => {
  return (
    <div>
      <App />
    </div>
  );
};

test('renders learn react link', () => {
  render(<TestComponent />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
