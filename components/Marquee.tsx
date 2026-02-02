import React from 'react';

export default function Marquee({ text }: { text: string }) {
  return (
    <div className="relative flex overflow-x-hidden bg-white/10 backdrop-blur-sm py-4 border-y border-white/20">
      <div className="py-12 animate-marquee whitespace-nowrap">
        <span className="text-4xl md:text-6xl font-bold mx-4 text-transparent bg-clip-text bg-gradient-to-r from-salma-purple to-salma-blue uppercase tracking-widest">
          {text} • {text} • {text} • {text} •
        </span>
      </div>
      <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
        <span className="text-4xl md:text-6xl font-bold mx-4 text-transparent bg-clip-text bg-gradient-to-r from-salma-purple to-salma-blue uppercase tracking-widest">
          {text} • {text} • {text} • {text} •
        </span>
      </div>
    </div>
  );
}