import React from "react";
import EngImg from "../../assets/images/hero-img-color.png";

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

const Engineer = () => {
  return (
    <div className="bg-blue">
      <div className="container h-screen mx-auto flex flex-col">
        <div className="f-bold text-5xl mt-8">
          I’m as an <span className="text-white">Engineer</span>
        </div>
        <div>“a person who designs, builds, or maintains engines, machines, or public works.”</div>
        <div className="grid grid-cols-3 h-full">
          <div className="items-end flex">
            <img src={EngImg} alt="" className="object-contain" />
          </div>
          <div className="col-span-2">
            <div className="flex flex-col h-full justify-center">
              <div className="grid grid-cols-2">
                <div>
                  <div className="f-bold text-white text-3xl">Software Developer</div>
                  <div className="">It's a field that I'm into self-taught based on internship experience, certification and also working on projects personally</div>
                  <div className="">Experience</div>
                  <div className="">Front-End Developer | Internship</div>
                  <div className="">PT. Sagara Technology</div>
                  <div className="">15 August 2022 - Present</div>
                </div>
                <div>
                  <div className="f-bold text-white text-3xl">Electrical Engineer</div>
                  <div>It is a field that I pursue in my field of study. Besides that, I have experience working in this field to work on several projects in IoT and Embedded Systems</div>
                  <div>Experience</div>
                  <div>Embedded System Engineer | Contract</div>
                  <div>Magprotech</div>
                  <div>15 December 2020 - 28 August 2021</div>
                </div>
              </div>
              <div className="grid grid-cols-1 mt-10">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Engineer;
