
import React from 'react';

const MagicWandIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="M15 4V2" />
    <path d="M15 10V8" />
    <path d="M12.5 6.5L14 5" />
    <path d="M6 20l4-4" />
    <path d="M17.5 8.5L19 7" />
    <path d="M22 2l-3 3" />
    <path d="M2 22l3-3" />
    <path d="M7 17l-5 5" />
    <path d="M10.1 13.9a2.5 2.5 0 0 0-3.5-3.5l-8 8a2.5 2.5 0 0 0 3.5 3.5l8-8z" />
  </svg>
);

export default MagicWandIcon;
