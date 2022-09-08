import React from "react";
import FigmaImg from "../../assets/images/logos/Figma.svg";
import PSImg from "../../assets/images/logos/Photoshop.svg";
import AIImg from "../../assets/images/logos/Illustrator.svg";
import MyImg from "../../assets/images/hero-img-color.png";

const Designer = () => {
  return (
    <div className="bg-yellow">
      <div className="container h-screen mx-auto flex flex-col">
        <div className="f-bold text-5xl mt-8">
          I’m as a <span className="text-white">Designer</span>
        </div>
        <div>“a person who plans the form, look, or workings of something before its being made or built, typically by drawing it in detail.”</div>
        <div className="grid grid-cols-3 h-full">
          <div className="items-end flex">
            <img src={MyImg} alt="" className="object-contain" />
          </div>
          <div className="col-span-2">
            <div className="flex flex-col h-full justify-center">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <div className="f-bold text-white text-3xl">Graphic Designer</div>
                  <div className="">That's a field that I'm in self-taught with internship experience, certification and also working on projects personally</div>
                  <div className="">Experience</div>
                  <div className="">Graphic Design | Freelance</div>
                  <div className="">2016 - 2022</div>
                </div>
                <div>
                  <div className="f-bold text-white text-3xl">UI/UX Designer</div>
                  <div>The field that I am in to support my needs in the front-end field. From here I can learn a lot about the design process in terms of user experience. The project I am working on here is just a personal project.</div>
                </div>
              </div>
              <div className="grid grid-cols-1 mt-10">
                <div className="flex flex-col">
                  <div className="f-bold text-3xl text-black mb-5">Tools</div>
                  <div className="flex flex-row gap-2">
                    <img src={FigmaImg} alt="Figma" />
                    <img src={PSImg} alt="Photoshop" />
                    <img src={AIImg} alt="Illustrator" />
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

export default Designer;
