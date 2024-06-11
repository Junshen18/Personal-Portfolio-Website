import React from "react";
import ProjectCard from "./ProjectCard";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  weight: "700",
  subsets: ["latin"],
});

const projectData = [
  {
    id: 1,
    title: "Hotel Booking System",
    description: "Hotel Booking System using Java and Swing UI",
    image: "/projects/JavaProject.png",
    gitUrl: "https://github.com/Seann2003/HotelBookingSystemAPU",
  },
  {
    id: 2,
    title: "Verdunic",
    description: "Gamified the process of learning about gardening",
    image: "/projects/Verdunic.jpeg",
    gitUrl: "https://verdunic.vercel.app/",
  },
  {
    id: 3,
    title: "Quiz Website",
    description: "Quiz website that is like Quizzeria using React and Flask",
    image: "/projects/SDP.png",
    gitUrl:
      "https://github.com/Seann2003/Quiz-Website---React-and-Flask-Backend",
  },
  {
    id: 4,
    title: "Game Booster Landing Page",
    description: "Landing Page for Game Booster Application ",
    image: "/projects/Gamebooster.png",
    gitUrl: "",
  },
  {
    id: 5,
    title: "Mobile Habit Tracker",
    description:
      "A habit tracker/to-do list that shows a green tracker map like github using Flutter",
    image: "/projects/habit-tracker.png",
    gitUrl: "https://github.com/Junshen18/habit_tracker",
  },
];

const Projects = () => {
  return (
    <div id="projects" className={`w-[90%] ml-14 ${quicksand.className}`}>
      <div className="text-4xl font-semibold mb-8">My Projects</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-x-8 gap-y-20 md:gap-12 h-full">
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
