
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
        <span className="bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">
          AI Prompt Refiner
        </span>
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
        Transform your ideas into powerful, precise prompts. Let Gemini enhance your input for superior AI results.
      </p>
    </header>
  );
};

export default Header;
