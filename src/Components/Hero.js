import React from "react";
import bg from "../images/Background.png";
import { BsStars } from "react-icons/bs";
import hero from "../images/hero.png";

const Hero = () => {
  return (
    <section
      className="bg-cover bg-no-repeat w-[100%]"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="flex items-center justify-around w-full">
        <div className="flex flex-col relative gap-7 w-[26.6rem] ">
          <button
            className="flex-shrink-0 flex gap-2 rounded-full bg-lightViolet p-2 text-darkViolet font-medium"
            style={{ width: "fit-content" }}
          >
            <BsStars style={{ color: "#722ED1" }} size={25} />
            <span>v3.1 released. </span>
            <span> Learn more</span>
          </button>
          <h1 className="font-bold text-5xl">
            Your data with real-time analytics
          </h1>
          <p>
            Harness the potential of Big Data Analytics & Cloud Services and
            become a data-driven organization with Needle tail
          </p>
          <div className="flex gap-5">
            <button className="border rounded-full py-1 px-4 bg-darkViolet text-[#fff] hover:bg-[#fff] hover:text-darkViolet">
              Start free trail
            </button>
            <button className="rounded-full py-1 px-4 bg-white text-darkViolet bg-[#fff] hover:text-[#fff] hover:bg-darkViolet">
              Learn more
            </button>
          </div>
        </div>

        {/*  -----------  Hero section Img  ------------------- */}
        <div>
          <img src={hero} alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

// background: #F7F1FF;
