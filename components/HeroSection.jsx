import React from "react";
import TypeWritter from "typewriter-effect";
import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

const inter = Inter({ weight: ["400", "900"], subsets: ["latin"] });

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };
  return (
    <main className="pb-6 mt-10 md-flex md:shrink-0 mx-14">
      {/* <div className="static h-24"></div> */}
      <div className={` grid grid-cols-1 md:grid-cols-12 ${inter.className}`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-1 md:col-span-8 place-self-center justify-self-start"
        >
          <h1 className="font-extrabold">
            {/* span text seperator -- for design*/}
            <span className="text-white text-[40px] leading-none md:text-5xl lg:text-7xl">
              Hello, I&apos;m{" "}
              <span className="text-transparent bg-clip-text text-[50px] leading-none md:text-8xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Jun Shen
              </span>
            </span>
            <br></br>
            <span className="text-4xl md:text-5xl">
              I&apos;m a
              <TypeWritter
                options={{
                  autoStart: true,
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter.typeString`<span style="color:#FF77FF">Front-end Developer</span>`
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString`<span style="color:#9E7BFF">Software Engineer</span>`
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString`<span style="color:#893BFF">UI/UX Designer</span>`
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString`<span style="color:#893BFF">Mobile Developer</span>`
                    .pauseFor(1500)
                    .deleteAll()
                    .start();
                }}
              ></TypeWritter>
            </span>
          </h1>
          <p className="text-gray-300 pt-8 text-base mb-6 lg:text-2xl">
            Slide down to know more about me!
          </p>
          <Link
            href="#projects"
            className="px-10 mb-4 inline-block py-3 rounded-full mr-4 border-solid border-2 border-indigo-600 hover:bg-violet-600"
          >
            <span className="text-base md:text-xl text-white">Projects</span>
          </Link>
          <div className="px-9 md:px-12 inline-block py-3 rounded-full mr-4 border-solid border-2  border-white hover:bg-white hover:text-black text-xl text-white">
            <a
              href="/Wong-Jun-Shen-Resume.pdf"
              download="Wong-Jun-Shen-Resume.pdf"
            >
              <button className="text-base md:text-xl">View My Resume</button>
            </a>
          </div>
        </motion.div>

        <div className="col-span-4 md:col-span-4 place-self-center mt-12 lg:mt-0 pt-0 lg:pt-2 lg:pb-16  ">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="lg:w-[400px] lg:h-[400px] relative z-0 md:w-[300px] md:h-[300px] h-[300px] w-[300px] "
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
            >
              <Image
                src={isHovered ? "/IMG_0907.jpg" : "/IMG_0204.jpg"}
                alt="profilepic"
                className=" transform rounded-full flex relative -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={450}
                height={450}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default dynamic(() => Promise.resolve(HeroSection), { ssr: false });
