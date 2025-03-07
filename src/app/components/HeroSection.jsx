"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 ">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Rounak",
                1300,
                "Web Developer",
                1300,
                "Data Analyst",
                1300,
                "UI/UX Designer",
                100,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          
          Am Rounak currently working in Deloitte as a HR Transformation Team Member . You can directly hire me for freelancing by just clicking on &quot; Hire me &quot; button 
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 hover:bg-slate-800 text-white mt-3 mr-4" 
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Hire Me
              </span>
            </Link>
            <Link
              href="https://drive.google.com/file/d/15Juque4WvIxUQvPhlagJ0C0bBQmBX-f1/view?usp=sharing"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full  w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
          <Image
        src="https://i.ibb.co/3yQ8N0kD/Profile-removebg-preview.webp"
        alt="Your Image Alt Text"
        width={500}
        height={500}
        layout="responsive"
        objectFit="cover"
      />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
