import { useEffect, useState } from "react";
import { MdLightMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";


const Header = () => {
    const [currectTheme, setSelectedTheme] = useState(window.matchMedia("(prefers-color-scheme: dark)") ? 'dark' : 'light')
    
    const changeTheme = () =>{
        const userSelectedTheme = currectTheme === 'dark' ? 'light' : 'dark'
        setSelectedTheme(userSelectedTheme)
        localStorage.currentTheme = userSelectedTheme;
        document.documentElement.setAttribute("data-theme", userSelectedTheme);
    }

    return (
        <nav className="bg-[#ffffff] flex justify-between items-center px-12 py-5 shadow-sm dark:bg-[#1f1f1f]">
            <div>
                <button onClick={changeTheme} className="cursor-pointer"><MdLightMode size={30} style={{ fill: currectTheme === 'dark' ? 'white' : 'black'}}/></button>
            </div>
            <div className="space-x-6 text-lg">
                <button className="border-b-2 pb-2 text-[#6970E4] font-[600] dark:text-[#ffffff]">About Me</button>
                <button className="text-[#212121] pb-2">Experience</button>
                <button className="text-[#212121] pb-2">Projects</button>
                <button className="text-[#212121] pb-2">Contact</button>
            </div>
            <div className="space-x-6 text-lg">
                <a href="#_" className="relative inline-flex items-center px-12 py-2 overflow-hidden text-lg font-medium text-[#6970E4] border-2 border-[#6970E4] rounded hover:text-white group hover:bg-gray-50">
                    <span className="absolute left-0 block w-full h-0 transition-all bg-[#6970E4] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                    <span className="absolute right-0 flex items-center justify-start w-10 h-8 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="relative">Github</span>
                </a>
                <a href="#_" className="relative inline-flex items-center px-12 py-2 overflow-hidden text-lg font-medium text-[#ffffff] hover:border-2 bg-[#6970E4] hover:border-[#6970E4] rounded hover:text-[#6970E4] group hover:bg-[#fffff]">
                    <span className="absolute left-0 block w-full h-0 transition-all bg-[#ffffff] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                    <span className="absolute right-0 flex items-center justify-start w-10 h-8 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
                        </svg>                    </span>
                    <span className="relative">Resume</span>
                </a>
            </div>
        </nav>
    )
}

export default Header