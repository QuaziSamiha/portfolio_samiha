import { FaGithub, FaJava, FaNodeJs, FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

const SkillMarquee = () => {
  const skills = [
    {
      name: "JavaScript",
      icon: <FaJava />,
      color: "#e7473c",
    },
    {
      name: "TypeScript",
      icon: <FaJava />,
      color: "#e7473c",
    },
    {
      name: "Java",
      icon: <FaJava />,
      color: "",
    },
    {
      name: "C++",
      icon: <FaJava />,
      color: "",
    },
    {
      name: "C",
      icon: <FaJava />,
      color: "",
    },
    {
      name: "Python",
      icon: <FaJava />,
      color: "",
    },
    {
      name: "HTML",
      icon: <FaJava />,
      color: "",
    },
    {
      name: "CSS",
      icon: <FaJava />,
      color: "",
    },
    {
      name: "SASS",
      icon: <FaJava />,
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
      icon: "",
      color: "",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      color: "",
    },
    {
      name: "Bootstrap",
      icon: <FaJava />,
      color: "#38bdf8",
    },
    {
      name: "Mongo DB",
      icon: <DiMongodb />,
      color: "#00684a",
    },
    {
      name: "Material UI",
      icon: <FaJava />,
      color: "",
    },
    {
      name: "React Bootstrap",
      icon: <FaJava />,
      color: "",
    },
    {
      name: "Daisy UI",
      icon: <FaJava />,
      color: "",
    },
    {
      name: "Firebase",
      icon: <FaJava />,
      color: "",
    },
    {
      name: "Vercel",
      icon: <FaJava />,
      color: "",
    },
    {
      name: "Linux",
      icon: <FaJava />,
      color: "",
    },
    {
      name: "Cisco Packet Tracer",
      icon: <FaJava />,
      color: "",
    },
    {
      name: "Latex",
      icon: <FaJava />,
      color: "",
    },
    {
      name: "Kaggle",
      icon: <FaJava />,
      color: "",
    },
    {
      name: "MySQL",
      icon: <FaJava />,
      color: "",
    },
    {
      name: "Git",
      icon: <FaJava />,
      color: "",
    },
    {
      name: "Github",
      icon: <FaJava />,
      color: "",
    },
    {
      name: "XAMPP",
      icon: <FaJava />,
      color: "",
    },
    {
      name: "Code Studio",
      icon: <FaJava />,
      color: "",
    },
  ];
  return (
    <>
      <section className="mx-20 flex">
        <div className="w-1/12">
          <Link className="">
            <div className="flex justify-evenly skeleton py-2 px-3 items-center bg-[#9452b0] text-white rounded-md">
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
