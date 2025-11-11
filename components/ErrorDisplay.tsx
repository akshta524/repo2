
import React from 'react';

interface ErrorDisplayProps {
  message: string;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ message }) => {
  return (
    <div className="mt-4 p-4 bg-red-900/50 border border-red-500 text-red-300 rounded-lg text-center animate-fade-in" role="alert">
      <p className="font-semibold">An Error Occurred</p>
      <p>{message}</p>
    </div>
  );
};

export default ErrorDisplay;
