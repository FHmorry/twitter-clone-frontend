import React, { FC } from 'react';

// ErrorMessageコンポーネントのプロパティの型定義
interface ErrorMessageProps {
  message: string;
}

// ErrorMessageコンポーネントの定義
const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => {
  // エラーメッセージのUIを返す
  return (
    <div className="error-message">
      {message}
    </div>
  );
};

export default ErrorMessage;