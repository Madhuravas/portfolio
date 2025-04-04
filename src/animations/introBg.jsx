import { useEffect, useState } from 'react';
import './introBg.css'

const IntroBg = () => {
    const [text, setText] = useState('');
    const fullText = 'Welcome to My Portfolio';

    useEffect(() => {
        let i = 0;
        const intervalId = setInterval(() => {
            setText((prev) => prev + fullText.charAt(i));
            i += 1;
            if (i === fullText.length) {
                clearInterval(intervalId); // Stop the typing effect after the full text is typed
            }
        }, 150); // Typing speed (150ms per character)
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="relative w-full h-[500px] overflow-hidden bg-gradient-to-r from-[#1d0847] dark:from-[#020006] via-[#090979] to-[#00d4ff] dark:to-[#004756] px-4">
            <div className="text-center h-full flex flex-col items-center justify-center">
                <h1 className="text-5xl font-bold fade-in text-shadow text-transparent bg-clip-text bg-gradient-to-r from-purple-300 dark:from-purple-100 to-pink-600 dark:to-pink-400">Hi, I'm Madhuravas</h1>
                <p className="mt-4 text-lg fade-in delay-200 typing text-yellow-300 break-words">I'm a Web Developer passionate about creating amazing digital experiences.</p>
                <a href="#projects" className="mt-6 inline-block bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-2 px-4 rounded fade-in delay-100 hover:scale-110 transition-transform">
                    View My Work
                </a>
            </div>
            <div className="box">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default IntroBg;
