
import React from 'react';

const Welcome: React.FC = () => {
  return (
    <div className="text-center p-8 bg-white/5 border border-gray-800 rounded-lg backdrop-blur-sm">
      <h2 className="text-2xl font-bold text-gray-200">Welcome to the Prompt Refiner!</h2>
      <p className="mt-2 text-gray-400">
        Enter a prompt in the text area above and click "Refine" to see the magic happen.
      </p>
      <div className="mt-6 text-left max-w-lg mx-auto space-y-2 text-gray-400">
          <p><strong className="font-semibold text-gray-300">For example, try turning:</strong></p>
          <p className="pl-4 italic">"pictures of cats"</p>
          <p><strong className="font-semibold text-gray-300">Into something more powerful like:</strong></p>
          <p className="pl-4 italic">"Create a photorealistic, cinematic-style image of a majestic fluffy cat with striking blue eyes, sitting on a velvet cushion in a sunlit library. The lighting should be soft and warm, highlighting its fur texture."</p>
      </div>
    </div>
  );
};

export default Welcome;
