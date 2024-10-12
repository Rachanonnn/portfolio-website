"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex flex-row justify-start">
        <div className="mr-4 md:mr-auto">
          <h2 className="text-xl font-semibold mb-3 justify-start">Backend</h2>
          <ul className="list-disc pl-2 text-sm md:text-[15px]">
            <li>Go-Fiber</li>
            <li>RESTful APIS</li>
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>BunJS</li>
            <li>ElysiaJS</li>
            <li>MongoDB</li>
            <li>Redis</li>
          </ul>
        </div>
        <div className="mr-4 md:mx-auto">
          <h2 className="text-xl font-semibold mb-3 justify-start">Frontend</h2>
          <ul className="list-disc pl-2 text-sm md:text-[15px]">
            <li>HTML</li>
            <li>CSS</li>
            <li>React</li>
            <li>Next.js</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>TailwindCSS</li>
          </ul>
        </div>
        <div className="md:mx-auto">
          <h2 className="text-xl font-semibold mb-3 justify-start">Tools</h2>
          <ul className="list-disc pl-2 text-sm md:text-[15px]">
            <li>Postman</li>
            <li>Git</li>
            <li>3T Studio</li>
            <li>DBGate</li>
            <li>Firebase(Basic)</li>
            <li>AWS (S3)</li>
            <li>Supabase</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li className="mb-1">Bachelor Degree</li>
        <p className="mb-4">
          {" "}
          Computer Engineering and Digital Technology, Chulalongkorn University
        </p>
        <li className="mb-1">High School</li>
        <p>Math-Sci (Gifted Program), Suankularb Wittayalai Thonburi School</p>
      </ul>
    ),
  },
  {
    title: "Experiences",
    id: "experiences",
    content: (
      <ul className="list-disc pl-2">
        <li>2024 | Backend Developer Internship at iBotnoi</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [_, startTransition] = useTransition();

  const handleTabChange = (id: any) => {
    startTransition(() => {
      setTab(id);
    });
  };
  const currentTab = TAB_DATA.find((t) => t.id === tab);
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Image
            src={"/images/about-image.jpg"}
            alt="about-image"
            className="rounded-2xl"
            width={500}
            height={500}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-4 md:mt-0 text-left flex flex-col h-full"
        >
          <h2 className="text-3xl font-bold text-white mt-4 mb-10">About Me</h2>
          <p className="text-base lg:text-lg">
            Hello! My name is Rachanon, and I am a computer engineering student
            with a passion for technology and problem-solving. As someone deeply
            interested in the intersection of cybersecurity, web development,
            and data engineering, I am eager to contribute my skills and
            knowledge to innovative projects. I pride myself on being a quick
            learner, always ready to explore new concepts and adapt to dynamic
            environments. My passion for technology drives me to stay up-to-date
            with industry trends and continuously improve my abilities.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experiences")}
              active={tab === "experiences"}
            >
              {" "}
              Experiences{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {currentTab ? currentTab.content : "Content not available"}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
