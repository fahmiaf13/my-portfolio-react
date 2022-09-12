import React from "react";
import EngImg from "../../assets/images/hero-img-color.png";

import { containerVariants, upVariants, downVariants, imgVariants } from "../../constant/engineerEffect";
import BSImg from "../../assets/images/logos/Bootstrap.svg";
import CImg from "../../assets/images/logos/C++.svg";
import CSSImg from "../../assets/images/logos/CSS.svg";
import HTMLImg from "../../assets/images/logos/HTML.svg";
import JSImg from "../../assets/images/logos/Javascript.svg";
import ReactImg from "../../assets/images/logos/React.svg";
import SCSSImg from "../../assets/images/logos/SCSS.svg";
import TailwindImg from "../../assets/images/logos/Tailwind.svg";
import RecoilImg from "../../assets/images/logos/Recoil.svg";
import ReduxImg from "../../assets/images/logos/Redux.svg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Engineer = () => {
  return (
    <motion.div className="bg-blue" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <div className="container h-screen mx-auto flex flex-col">
        <motion.div className="flex mt-8" variants={upVariants} initial="hidden" animate="visible" exit="exit">
          <div className="grid grid-cols-2">
            <div className="f-bold">
              <div className="text-5xl">
                I’m as an <span className="text-white">Engineer</span>
              </div>
              <div className="f-light text-end">“a person who designs, builds, or maintains engines, machines, or public works.”</div>
            </div>
            <Link to="/" className="flex justify-end items-start">
              <button>Back to Home</button>
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-3 h-full">
          <motion.div className="items-end flex" variants={imgVariants} initial="hidden" animate="visible" exit="exit">
            <img src={EngImg} alt="" className="object-contain" />
          </motion.div>
          <div className="col-span-2">
            <div className="flex flex-col h-full justify-center">
              <motion.div className="grid grid-cols-2" variants={downVariants} initial="hidden" animate="visible" exit="exit">
                <div>
                  <div className="f-bold text-white text-3xl">Software Developer</div>
                  <p>It's a field that I'm into self-taught based on internship experience, certification and also working on projects personally</p>
                  <div className="f-bold text-xl mt-3">Experience</div>
                  <div className="f-bold">Front-End Developer | Internship</div>
                  <p>PT. Sagara Technology</p>
                  <p>15 August 2022 - Present</p>
                </div>
                <div>
                  <div className="f-bold text-white text-3xl">Electrical Engineer</div>
                  <p>It is a field that I pursue in my field of study. Besides that, I have experience working in this field to work on several projects in IoT and Embedded Systems</p>
                  <div className="f-bold text-xl mt-3">Experience</div>
                  <div className="f-bold">Embedded System Engineer | Contract</div>
                  <p>Magprotech</p>
                  <p>15 December 2020 - 28 August 2021</p>
                </div>
              </motion.div>
              <motion.div className="grid grid-cols-1 mt-10" variants={downVariants} initial="hidden" animate="visible" exit="exit">
                <div className="flex flex-col">
                  <div className="f-bold text-3xl text-black mb-5">Skills</div>
                  <div className="flex flex-row gap-2">
                    <img src={HTMLImg} alt="HTML" />
                    <img src={CSSImg} alt="CSS" />
                    <img src={SCSSImg} alt="SCSS" />
                    <img src={BSImg} alt="Bootstrap" />
                    <img src={TailwindImg} alt="Tailwind" />
                    <img src={JSImg} alt="Javascript" />
                    <img src={ReactImg} alt="React JS" />
                    <img src={RecoilImg} alt="Recoil JS" />
                    <img src={ReduxImg} alt="Redux" />
                    <img src={CImg} alt="C++" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Engineer;
