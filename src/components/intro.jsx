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

  ];


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Delay reveal
          setTimeout(() => setVisible(true), 500); // 500ms delay
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
      <div className="bg-[#F8F9FA] dark:bg-base-200 px-20 py-10 flex">
        <div  ref={ref} className={`shadow-lg px-10 bg-base-100 rounded py-6 w-[50%] mr-5 transition-all duration-700 ease-in-out transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
          <h2 className="text-3xl font-bold">Madhuravas</h2>
          <h4 className="text-xl font-[500] mb-3 mt-1">MERN Stack Developer</h4>
          <p className="text-lg mb-3">Passionate about building scalable, high-performance web applications, I specialize in creating seamless user experiences through the MERN stack. I excel in developing dynamic, full-stack solutions that effectively combine functionality with intuitive design.</p>
          <p className="text-lg">I am available for freelance projects, leveraging my expertise to build innovative, high-performance web applications. With a strong focus on collaboration, I work closely with clients to transform their ideas into seamless digital experiences. If you're looking for a skilled and dedicated developer to elevate your project, let's connect!</p>
        </div>
        <div className={`shadow-lg px-10 bg-base-100 rounded py-6 w-[50%] transition-all duration-700 ease-in-out transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
          <h5 className="text-xl mb-3">Technical Skills</h5>
          <div className="flex flex-wrap space-x-10 space-y-5">
            {skillsDetails.map((eachSkill, index) =>
              <div key={index}>
                <img className="h-[60px] w-[60px]" alt={eachSkill.skillName} src={eachSkill.logo} />
                <h5 className="text-lg mt-2">{eachSkill.skillName}</h5>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
