import {
  FaBootstrap,
  FaCss3,
  FaGitAlt,
  FaGithub,
  FaGithubSquare,
  FaHtml5,
  FaJava,
  FaKaggle,
  FaLinux,
  FaNodeJs,
  FaPython,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { TbBrandJavascript, TbBrandMysql, TbBrandNextjs } from "react-icons/tb";
import {
  SiCisco,
  SiExpress,
  SiFirebase,
  SiLatex,
  SiPostman,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVisualstudiocode,
  SiXampp,
} from "react-icons/si";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

const SkillMarquee = () => {
  const skills = [
    {
      name: "JavaScript",
      icon: <TbBrandJavascript />,
      color: "#1b1b1b",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      color: "#3178c6",
    },
    {
      name: "Java",
      icon: <FaJava />,
      color: "",
    },
    {
      name: "C++",
      icon: "",
      color: "",
    },
    {
      name: "C",
      icon: "",
      color: "",
    },
    {
      name: "Python",
      icon: <FaPython />,
      color: "#ffdd54",
    },
    {
      name: "HTML",
      icon: <FaHtml5 />,
      color: "",
    },
    {
      name: "CSS",
      icon: <FaCss3 />,
      color: "",
    },
    {
      name: "SASS",
      icon: <FaSass />,
      color: "",
    },
    {
      name: "React JS",
      icon: <FaReact />,
      color: "#61dbfb",
    },
    {
      name: "Next JS",
      icon: <TbBrandNextjs />,
      color: "#040404",
    },
    {
      name: "Node JS",
      icon: <FaNodeJs />,
      color: "#77ad65",
    },
    {
      name: "Express JS",
      icon: <SiExpress />,
      color: "",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      color: "#38bdf8",
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap />,
      color: "#7010f4",
    },
    {
      name: "Mongo DB",
      icon: <DiMongodb />,
      color: "#00684a",
    },
    {
      name: "Material UI",
      icon: "",
      color: "#4caaf9",
    },
    {
      name: "React Bootstrap",
      icon: "",
      color: "#41e0fd",
    },
    {
      name: "Daisy UI",
      icon: "",
      color: "",
    },
    {
      name: "Firebase",
      icon: <SiFirebase />,
      color: "#ffcb2e",
    },
    {
      name: "Vercel",
      icon: <SiVercel />,
      color: "#000000",
    },
    {
      name: "Linux",
      icon: <FaLinux />,
      color: "#7010f4",
    },
    {
      name: "Cisco Packet Tracer",
      icon: <SiCisco />,
      color: "",
    },
    {
      name: "Latex",
      icon: <SiLatex />,
      color: "#008080",
    },
    {
      name: "Kaggle",
      icon: <FaKaggle />,
      color: "#20beff",
    },
    {
      name: "MySQL",
      icon: <TbBrandMysql />,
      color: "#3e6e93",
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
      color: "#f54d27",
    },
    {
      name: "Github",
      icon: <FaGithubSquare />,
      color: "#24292e",
    },
    {
      name: "XAMPP",
      icon: <SiXampp />,
      color: "#fb7a24",
    },
    {
      name: "Visual Studio Code",
      icon: <SiVisualstudiocode />,
      color: "#23a8f2",
    },
    {
      name: "Postman",
      icon: <SiPostman />,
      color: "#ff6c37",
    },
  ];
  return (
    <>
      <section className="mx-20 flex">
        <div className="w-1/12">
          <Link className="">
            <div className="flex justify-evenly skeleton py-2 px-3 items-center bg-[#92e3a9] text-[#263238] rounded-md">
              <FaGithub className="" />
              <p className="ml-2 font-bold">Github</p>
            </div>
          </Link>
        </div>
        <div className="w-11/12 ml-3 bg-white">
          <div className="py-2">
            <Marquee>
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center font-bold mx-4"
                  style={{ color: skill.color }}
                >
                  <p className="mx-2">{skill.icon}</p>
                  <p>{skill.name}</p>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillMarquee;
