import { useEffect, useState } from "react";

export default function PortfolioIntro() {
  const [text, setText] = useState("");
  const fullText = "Your Name"; // Change to your name
  const typingSpeed = 150; // Speed for typing effect

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, typingSpeed);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden text-white">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient animate-gradient"></div>

      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold opacity-0 animate-fade-in-up">
          Hi, I'm{" "}
          <span className="text-yellow-300 border-r-4 border-transparent">
            {text}
          </span>
        </h1>
        <p className="mt-4 text-lg md:text-xl opacity-0 animate-fade-in">
          A Passionate Developer 🚀
        </p>
      </div>
    </div>
  );
}
