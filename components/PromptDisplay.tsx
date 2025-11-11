
import React, { useState } from 'react';
import ClipboardIcon from './icons/ClipboardIcon';
import CheckIcon from './icons/CheckIcon';

interface PromptDisplayProps {
  originalPrompt: string;
  refinedPrompt: string;
}

const PromptCard: React.FC<{ title: string; prompt: string; isRefined?: boolean }> = ({ title, prompt, isRefined = false }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`flex-1 p-6 rounded-xl ${isRefined ? 'bg-gradient-to-br from-purple-900/50 to-indigo-900/50 border-purple-600' : 'bg-gray-800/80 border-gray-700'} border backdrop-blur-sm`}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-200">{title}</h3>
        {isRefined && (
          <button 
            onClick={handleCopy}
            className="p-2 rounded-md hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
            aria-label="Copy refined prompt"
          >
            {copied ? <CheckIcon className="w-5 h-5 text-green-400" /> : <ClipboardIcon className="w-5 h-5 text-gray-400" />}
          </button>
        )}
      </div>
      <p className="text-gray-300 whitespace-pre-wrap font-mono text-sm leading-relaxed">{prompt}</p>
    </div>
  );
};


const PromptDisplay: React.FC<PromptDisplayProps> = ({ originalPrompt, refinedPrompt }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 animate-fade-in">
      <PromptCard title="Original Prompt" prompt={originalPrompt} />
      <PromptCard title="Refined Prompt" prompt={refinedPrompt} isRefined />
    </div>
  );
};

export default PromptDisplay;
