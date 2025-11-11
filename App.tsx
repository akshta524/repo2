
import React, { useState, useCallback } from 'react';
import { refinePrompt } from './services/geminiService';
import Header from './components/Header';
import PromptInput from './components/PromptInput';
import PromptDisplay from './components/PromptDisplay';
import Loader from './components/Loader';
import Welcome from './components/Welcome';
import ErrorDisplay from './components/ErrorDisplay';

const App: React.FC = () => {
  const [originalPrompt, setOriginalPrompt] = useState<string>('');
  const [refinedPrompt, setRefinedPrompt] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleRefine = useCallback(async (prompt: string) => {
    if (!prompt.trim()) {
      setError('Prompt cannot be empty.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setRefinedPrompt('');
    setOriginalPrompt(prompt);

    try {
      const result = await refinePrompt(prompt);
      setRefinedPrompt(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 font-sans antialiased">
      <div className="relative isolate min-h-screen">
        <div 
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" 
          aria-hidden="true">
          <div 
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" 
            style={{
              clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
            }}
          />
        </div>

        <main className="container mx-auto px-4 py-8 md:py-12">
          <Header />
          <div className="mt-8 max-w-4xl mx-auto">
            <PromptInput onRefine={handleRefine} isLoading={isLoading} />
            {error && <ErrorDisplay message={error} />}
            
            <div className="mt-8">
              {isLoading ? (
                <div className="flex flex-col items-center justify-center p-8 rounded-lg bg-white/5">
                  <Loader />
                  <p className="mt-4 text-lg text-gray-300">Refining your prompt...</p>
                </div>
              ) : refinedPrompt ? (
                <PromptDisplay originalPrompt={originalPrompt} refinedPrompt={refinedPrompt} />
              ) : (
                !error && <Welcome />
              )}
            </div>
          </div>
        </main>
        
        <div 
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" 
          aria-hidden="true">
          <div 
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" 
            style={{
              clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
