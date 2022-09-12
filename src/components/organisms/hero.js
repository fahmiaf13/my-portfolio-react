import React from "react";
import HeroImg from "../../assets/images/hero-img.png";
import { Link } from "react-router-dom";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { motion } from "framer-motion";
import { containerVariants, upVariants, downVariants, imgVariants } from "../../constant/landingEffect";

const Hero = () => {
  return (
    <motion.div className="bg-black" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <div className="container h-screen mx-auto flex flex-col text-white">
        <motion.div variants={upVariants} initial="hidden" animate="visible" exit="exit">
          <div className="f-bold text-center text-4xl mt-8">Hello, My Name is</div>
          <div className="f-bold text-center text-4xl">Fahmi Achmad Fahrudin</div>
          <div className="text-center text-2xl">Front-End Developer</div>
        </motion.div>
        <div className="grid grid-cols-3 h-full">
          <div className="flex justify-end items-center f-bold text-xl">
            <Link to="/engineer">
              <motion.div className="grid grid-cols-3 group" variants={downVariants} initial="hidden" animate="visible" exit="exit">
                <div className="h-full flex justify-end items-center">
                  <MdOutlineArrowBackIosNew size={50} />
                </div>
                <div className="col-span-2 group-hover:text-slate-500 duration-300">
                  <div className="group-hover:text-slate-500">
                    I'M AS AN <span className="text-blue group-hover:text-slate-500">ENGINEER</span>
                  </div>
                  <button className="f-light text-lg">SEE DETAILS</button>
                </div>
              </motion.div>
            </Link>
          </div>
          <div className="flex items-end justify-center overflow-y-hidden">
            <motion.img src={HeroImg} alt="hero" className="object-contain" variants={imgVariants} initial="hidden" animate="visible" exit="exit" />
          </div>
          <div className="flex justify-start items-center f-bold text-xl">
            <Link to="/designer">
              <motion.div className="grid grid-cols-3 group" variants={downVariants} initial="hidden" animate="visible" exit="exit">
                <div className="col-span-2 group-hover:text-slate-500 duration-300">
                  <div className="group-hover:text-slate-500">
                    I'M AS A <span className="text-yellow group-hover:text-slate-500">DESIGNER</span>
                  </div>
                  <div className="flex justify-end">
                    <button className="f-light text-lg text-center">SEE DETAILS</button>
                  </div>
                </div>
                <div className="h-full flex justify-start items-center">
                  <MdOutlineArrowForwardIos size={50} />
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
