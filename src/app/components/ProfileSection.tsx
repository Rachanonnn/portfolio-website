"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const ProfileSection = () => {
  return (
    <section className="my-5" id="home">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hi, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={["Nack", 1000, "Web Developer", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl ">
            Computer engineering student with a passion for web development and
            software development. I am always looking for new and exciting
            projects to work on.
          </p>
          <div>
            <Link
              to="footer"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white cursor-pointer">
                Contact me
              </button>
            </Link>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3">
              <a
                href="https://drive.google.com/file/d/1CWg3yUEvvUJEH6Bf7_GqTcXBz4zFY0eh/view?usp=sharing"
                className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2"
              >
                Download CV
              </a>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center mt-4 lg:mt-0"
        >
          <div className="flex justify-center rounded-full bg-[#181818] w-[270px] h-[270px] lg:w-[400px] lg:h-[400px] relative mt-5">
            <Image
              src="/images/S__75284487-removebg.png"
              alt="profile"
              className="rounded-full object-cover"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfileSection;
