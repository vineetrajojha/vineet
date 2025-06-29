"use client"
import Image from "next/image";
import React, { useState, useEffect } from "react";

// Add a custom class for the liquid glass button
const glassButtonClass =
  "relative text-white px-6 py-2 rounded-2xl bg-transparent backdrop-blur-[2px] saturate-[1.8] shadow-[0_8px_32px_rgba(31,38,135,0.2),_inset_0_4px_20px_rgba(255,255,255,0.3)] transition-all duration-300 ease-in-out overflow-hidden btn-liquid-glass";

export default function Home() {
  const [theme, setTheme] = useState("night");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) setTheme(saved);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const isNight = theme === "night";

  // Theme colors
  const bgColor = isNight ? "#020617" : "#f7fafc";
  const textColor = isNight ? "text-white" : "text-gray-900";
  const glassBg = isNight ? "bg-transparent" : "bg-white/40";
  const glassText = isNight ? "text-white" : "text-gray-900";
  const glassShadow = isNight
    ? "shadow-[0_8px_32px_rgba(31,38,135,0.2),_inset_0_4px_20px_rgba(255,255,255,0.3)]"
    : "shadow-[0_8px_32px_rgba(200,200,255,0.08),_inset_0_4px_20px_rgba(0,0,0,0.08)]";

  // Glass button class with theme
  const themedGlassButton =
    `relative px-6 py-2 rounded-2xl ${glassBg} ${glassText} ${glassShadow} backdrop-blur-[2px] saturate-[1.8] transition-all duration-300 ease-in-out overflow-hidden btn-liquid-glass`;

  const linkColor = isNight ? "text-purple-400" : "text-sky-600";

  return (
    <div
      className={`min-h-screen w-full relative flex flex-col justify-end`}
      style={{ background: bgColor }}
    >
      {/* Theme Toggle Button */}
      <div className="absolute top-6 right-6 z-50">
        <button
          className={themedGlassButton + " w-12 h-12 flex items-center justify-center"}
          aria-label="Toggle theme"
          onClick={() => setTheme(isNight ? "day" : "night")}
        >
          {isNight ? (
            <i className="bi bi-brightness-high text-2xl"></i>
          ) : (
            <i className="bi bi-moon-stars text-2xl"></i>
          )}
        </button>
      </div>
      {/* Dark Sphere Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={
          isNight
            ? {
                background: "#020617",
                backgroundImage: `
                  linear-gradient(to right, rgba(71,85,105,0.12) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(71,85,105,0.12) 1px, transparent 1px),
                  radial-gradient(circle at 50% 50%, rgba(139,92,246,0.15) 0%, transparent 70%)
                `,
                backgroundSize: "32px 32px, 32px 32px, 100% 100%",
              }
            : {
                background: "#fff",
                backgroundImage: `
                  linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px),
                  radial-gradient(circle 500px at 20% 100%, rgba(139,92,246,0.3), transparent),
                  radial-gradient(circle 500px at 100% 80%, rgba(59,130,246,0.3), transparent)
                `,
                backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
              }
        }
      />
      {/* Purple Radial Glow Background - Responsive */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            isNight
              ? `radial-gradient(circle 350px at 50% 80px, rgba(139,92,246,0.4), transparent)`
              : `radial-gradient(circle 350px at 50% 80px, rgba(139,92,246,0.13), transparent)`,
        }}
      />
      <div className="relative z-10 flex items-center justify-center min-h-[40vh] p-8 sm:p-20">
        <main className="max-w-2xl w-full mx-auto flex flex-col justify-center min-h-[300px]">
          <div className={`${textColor} text-sm sm:text-base leading-relaxed font-mono text-left w-full`}>
            hi, this is vineet and i <a href="#" className={`underline ${linkColor}`}>design</a> / <a href="#" className={`underline ${linkColor}`}>develop websites</a>, i'm currently focused on artificial intelligence and machine learning. i barely <a href="twitter.com/vineetcres" target="_blank" className={`underline ${linkColor}`}>tweet</a> but it's there if you're curious, you can also check out <a href="#" className={`underline ${linkColor}`}>my playlist</a>. and yes, my (occasionally unbearable) <a href="#" className={`underline ${linkColor}`}>blogs</a> and of course, <a href="#" className={`underline ${linkColor}`}>my resume</a>.<br></br> connect with me on <a href="https://linkedin.com/in/vineetcres" target="_blank" className={`underline ${linkColor}`}>linkedin</a>, <a href="https://twitter.com/vineetcres" target="_blank" className={`underline ${linkColor}`}>twitter</a>, or drop me an <a href="mailto:vineetcres@gmail.com" target="_blank" rel="noopener noreferrer" className={`underline ${linkColor}`}>email</a>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <button className={themedGlassButton + " h-12 px-6 flex items-center justify-center"}>
              <i className="bi bi-medium text-2xl"></i>
            </button>
            <button className={themedGlassButton + " h-12 px-6 flex items-center justify-center text-base"} style={{ fontFamily: 'Inconsolata, monospace' }}>
              @cofoundly
            </button>
            <button className={themedGlassButton + " p-2 w-8 h-8 flex items-center justify-center"} aria-label="Star">
              <i className="bi bi-star-fill text-lg"></i>
            </button>
          </div>
        </main>
      </div>
      {/* Custom style for the liquid glass button after pseudo-element */}
      <style jsx>{`
        .btn-liquid-glass::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, ${isNight ? "0.12" : "0.18"});
          border-radius: 1rem;
          backdrop-filter: blur(2px);
          box-shadow: inset -10px -8px 0px -11px rgba(255,255,255,1),
            inset 0px -9px 0px -8px rgba(255,255,255,1);
          opacity: 0.7;
          z-index: 0;
          filter: blur(1.5px) drop-shadow(10px 4px 6px black) brightness(1.18);
          pointer-events: none;
        }
        .btn-liquid-glass {
          z-index: 1;
        }
        .btn-liquid-glass:hover {
          background: transparent;
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
}
