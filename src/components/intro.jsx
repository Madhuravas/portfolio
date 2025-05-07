import { useEffect, useRef, useState } from "react";
import IntroBg from "../animations/introBg";
import html from '../assets/skills/angular.webp'

export default function Intro() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const skillsDetails = [
    { skillName: "HTML", logo: "src/assets/skills/html.webp" },
    { skillName: "CSS", logo: "src/assets/skills/css.webp" },
    { skillName: "Javascript", logo: "src/assets/skills/javascript.webp" },
    { skillName: "Typescript", logo: "src/assets/skills/typescript.webp" },
    { skillName: "React", logo: "src/assets/skills/react.webp" },
    { skillName: "Angular", logo: "src/assets/skills/angular.webp" },
    { skillName: "NodeJs", logo: "src/assets/skills/node.webp" },
    { skillName: "Express", logo: "src/assets/skills/expressjs.webp" },
    { skillName: "MonogDB", logo: "src/assets/skills/mongoDB.webp" },
    { skillName: "Mongoose", logo: "src/assets/skills/mongoose.webp" },
    { skillName: "Redux", logo: "src/assets/skills/redux.webp" },
    { skillName: "AWS", logo: "src/assets/skills/aws.webp" },
    { skillName: "nginx", logo: "src/assets/skills/nginx.webp" },
    { skillName: "GitHub", logo: "src/assets/skills/github.webp" }
  ];


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Delay reveal
          setTimeout(() => setVisible(true), 300);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <IntroBg />
      <div className="px-20 py-10 flex max-[1050px]:px-6 max-[770px]:flex-col">
        <div ref={ref} className={`text-[#475467] dark:text-[#ffffff] pr-10 max-[1050px]:px-2 rounded py-6 w-[50%] max-[770px]:py-12 max-[770px]:w-full mr-5 transition-all duration-700 ease-in-out transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
          <h2 className="text-3xl font-bold">Madhuravas</h2>
          <h4 className="text-xl font-[500] mb-3 mt-1">MERN Stack Developer</h4>
          <p className="text-lg mb-3 mt-4">As a MERN Stack Developer, I specialize in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. I’m passionate about creating clean, scalable, and user-focused solutions that deliver real value.</p>
          <ul className="list-disc ml-3">
            <li>Build responsive, dynamic UIs with React.js, using tools like Hooks, Context API, and Tailwind CSS or Material UI</li>
            <li>Develop scalable backend APIs with Node.js and Express.js</li>
            <li>Design and manage MongoDB schemas, optimize queries, and work with aggregation pipelines</li>
          </ul>
          <a href="#contact" className="mt-8 px-12 py-4 text-lg inline-block bg-indigo-700 hover:indigo-800 h-[60px] text-white font-semibold rounded fade-in delay-50 hover:scale-110 transition-transform">
            Contact Me
          </a>
        </div>
        <div className={`flex items-center flex-col dark:bg-gradient-to-br dark:from-teal-500/20 dark:to-transparent border border-gray-200 dark:border-gray-500 shadow px-10 rounded py-6 w-[50%] max-[770px]:w-full transition-all duration-700 ease-in-out transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
          <div>
            <h5 className="text-xl mb-3 text-[#475467] font-bold dark:text-[#ffffff]">Technical Skills</h5>
            <div className="flex flex-wrap gap-6">
              {skillsDetails.map((eachSkill, index) =>
                <div key={index} className="flex items-center justify-center flex-col w-[70px]">
                  <img className="h-[60px] w-[60px]" alt={eachSkill.skillName} src={eachSkill.logo} />
                  <h5 className="text-lg mt-2 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-amber-400">{eachSkill.skillName}</h5>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
