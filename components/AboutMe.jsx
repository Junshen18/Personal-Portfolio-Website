import React from "react";
import { useTransition, useState } from "react";
import TabButton from "./TabButton";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  weight: "700",
  subsets: ["latin"],
});

const technologies = [
  "Python",
  "HTML & CSS",
  "JavaScript",
  "PHP",
  "Java",
  "MySQL",
  "R",
  "C++",
  "React.js",
  "Next.js",
  "Vue.js",
  "Flutter",
  "React Native",
  "Tailwind CSS",
  "Figma",
  "Canva",
  "Procreate",
  "Capcut",
];

const technologyList = technologies.map((tech, index) => (
  <li key={index}>{tech}</li>
));

//1d
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 grid grid-cols-2 md:grid-cols-3 ">
        {technologyList}
      </ul>
    ),
  },
  {
    title: "Experiences",
    id: "experiences",
    content: (
      <ul className="list-disc pl-2">
        <li>Lv 99 Game Jam 2023</li>
        <li>Virtual Innovation Competition 2023</li>
        <li>UI/UX tournament 2023</li>
        <li>ACIYLS Sustainability Startathon Malaysia 2023</li>
        <li>Solana Hackfest 2024</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Asia Pacific University of Technology & Innovation (APU)</li>
        <li>Catholic High School</li>
        <li>SJK(C)Subang</li>
      </ul>
    ),
  },
];
//1
const AboutMe = () => {
  //1b
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  //1a
  return (
    <section className={`text-white ${quicksand.className} grid `} id="aboutMe">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:px-32 py-16 items-center">
        <div className="place-self-center w-[300px] h-[375px] md:w-[450px] md:h-[562px]">
          <img
            src="/aboutme.jpg"
            alt="About Me"
            style={{ borderRadius: "25px" }}
          />
        </div>
        <div className="mt-4 mx-10 lg:mx-0 md:mt-0 text-left flex flex-col h-full">
          <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
          <p className="text-base text-justify lg:text-lg">
            I am currently pursuing a degree in Software Engineering at APU,
            where I have been honing my skills in various technologies. I am
            interested in exploring various kinds of IT topics, including Web 3
            industry, and AI technology. My passion for technology and
            problem-solving has led me to voluntarily participate in more
            hackathons in the future, where I primarily serve as a Front End
            Developer, UI/UX desinger and Part time Artist. However, I am not
            limited to frontend tasks and often take on backend
            responsibilities, demonstrating my versatility and commitment to
            delivering complete solutions.{" "}
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("experiences")}
              active={tab === "experiences"}
            >
              {" "}
              Experiences{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
