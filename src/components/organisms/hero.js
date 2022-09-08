import React from "react";
import HeroImg from "../../assets/images/hero-img.png";
import { Link } from "react-router-dom";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

const Hero = () => {
  return (
    <div className="bg-black h-screen">
      <div className="w-full">
        <div className="f-bold text-white text-center pt-8 grid justify-center">
          <div className="text-5xl">HELLO</div>
          <div className="text-5xl">I'M FAHMI ACHMAD</div>
          <div className="f-light text-4xl">Front-End Developer</div>
        </div>
        <div className="flex justify-center">
          <div className="w-4/12 grid justify-end content-center">
            <Link to="/" className="flex">
              <div className="w-2/12">
                <MdOutlineArrowBackIosNew />
              </div>
              <div className="w-full">
                <div className="f-bold text-white text-2xl text-end">I'M AS AN ENGINEER</div>
                <div className="f-light text-white text-xl text-end">SEE DETAILS</div>
              </div>
            </Link>
          </div>
          <div className="w-4/12 h-full justify-center flex">
            <img src={HeroImg} alt="" className="w-100" />
          </div>
          <div className="w-4/12 grid justify-start content-center">
            <div className="f-bold text-white text-2xl">I'M AS A DESIGNER</div>
            <div className="f-light text-white text-xl text-start">SEE DETAILS</div>
            <button className="bg-white">Click</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
