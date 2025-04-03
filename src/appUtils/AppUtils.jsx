export const NavBtn = () => {
    return (
        <a href="#_" className="relative inline-flex items-center px-12 py-2 overflow-hidden text-lg font-medium text-[#6970E4] border-2 border-[#6970E4] rounded hover:text-white group">
            <span className="absolute left-0 block w-full h-0 transition-all bg-[#6970E4] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span className="absolute right-0 flex items-center justify-start w-10 h-8 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span className="relative">Github</span>
        </a>
    )
}