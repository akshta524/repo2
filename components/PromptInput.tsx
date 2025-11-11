
import React, { useState } from 'react';
import MagicWandIcon from './icons/MagicWandIcon';

interface PromptInputProps {
  onRefine: (prompt: string) => void;
  isLoading: boolean;
}

const PromptInput: React.FC<PromptInputProps> = ({ onRefine, isLoading }) => {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onRefine(prompt);
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your prompt here... e.g., 'a logo for a coffee shop'"
        className="w-full h-32 p-4 pr-12 text-base text-gray-200 bg-gray-800 border-2 border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all duration-300 resize-none"
        disabled={isLoading}
      />
      <button
        type="submit"
        disabled={isLoading || !prompt}
        className="absolute top-1/2 -translate-y-1/2 right-4 flex items-center justify-center h-10 w-28 px-4 font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg shadow-lg hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 group"
      >
        {isLoading ? (
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        ) : (
          <>
            <MagicWandIcon className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:rotate-12" />
            Refine
          </>
        )}
      </button>
    </form>
  );
};

export default PromptInput;
