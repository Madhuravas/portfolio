const Header = () =>{
    return(
        <nav className="flex justify-between px-12 pt-8 pb-1 shadow-sm">
            <div className="space-x-6 text-lg">
                <button className="border-b-2 pb-2 text-[#6970E4] font-[600]">About Me</button>
                <button className="text-[#212121] pb-2">Experience</button>
                <button className="text-[#212121] pb-2">Projects</button>
                <button className="text-[#212121] pb-2">Contact</button>
            </div>
            <div className="space-x-6 text-lg">
                <button className="border border-[#6970E4] w-36 h-10 rounded text-[#6970E4]">Github</button>
                <button className="border w-36 h-10 rounded text-[#ffffff] bg-[#6970E4]">Resume</button>
            </div>
        </nav>
    )
}

export default Header