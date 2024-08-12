import React from "react";
import logo from "../assets/images/png/nanospace-logo.png";
import nanospacegirl from "../assets/images/png/explore-nanospace.png";
import explorerobo from "../assets/images/png/explore-robo.png";
import { Link } from "react-router-dom";
import { EXPLORE_CONTENT } from "../utils/helper";
import { ExploreCircle } from "./common/Icons";

const ExploreNanospace = () => {
  return (
    <div className="bg-explore-bg bg-center lg:bg-size-100 bg-cover bg-no-repeat lg:pt-[179px] lg:pb-[186px] py-[60px] relative lg:overflow-hidden">
      <div className="bg-gradient-explore absolute sm:h-[204px] h-[170px] left-0 w-full sm:top-[-20%] top-[-16%]"></div>
      <div className="container xl:max-w-[1124px] mx-auto px-4">
        <div className="flex flex-row justify-end items-center flex-wrap relative">
          <div className="bg-dark-blue w-[438px] h-[548px] absolute -bottom-52 xl:left-[-12%] left-0 opacity-30 blur-[200px] lg:block hidden"></div>
          <div className="max-lg:w-full lg:absolute xl:left-[-11%] lg:left-[-5%] left-0 xl:bottom-[-74%] lg:bottom-[-27%] bottom-[-21%] max-lg:flex max-lg:justify-center">
            <img
              src={nanospacegirl}
              alt="nanospacegirl"
              className="w-full xl:max-w-[750px] lg:max-w-[600px] max-w-[550px]"
            />
          </div>
          <div className="lg:w-8/12 w-full lg:pt-0 pt-7 relative">
            <img
              src={explorerobo}
              alt="explorerobo"
              className="absolute w-full max-h-[256px] md:max-w-[256px] sm:max-w-[210px] max-w-[140px] lg:top-[-30%] sm:top-[-23%] top-[-10%] right-0 z-[2]"
            />

            <div className="bg-gradient-white p-[1px]">
              <div className="bg-off-grey backdrop-blur-[6px] md:p-[50px] sm:p-[30px] p-6 rounded-[10px]">
                <Link className="relative" to="/">
                  <div className="w-[156px] h-[54px] blur-[70px] bg-light-grey absolute top-[31%]"></div>
                  <img
                    src={logo}
                    alt="logo"
                    className="w-full max-h-[73px] md:max-w-[234px] max-w-[170px] mb-6"
                  />
                </Link>
                <p className="normal-case md:text-custom-md sm:text-3xl text-2xl text-white font-bold font-Orbitron leading-120 mb-4">
                  Explore NANOSPACE
                </p>
                <p className="font-Saira font-normal md:text-xl text-base text-white leading-normal mb-[10px]">
                  Find best in class heart-pounding idle RPG experience
                </p>
                <p className="font-Saira font-semibold md:text-xl text-base text-white leading-normal mb-[15px]">
                  Adorable, Collectible Anime-Inspired Character
                </p>
                <div className="">
                  {EXPLORE_CONTENT.map((obj, id) => (
                    <p
                      className="font-Saira font-normal text-base text-light-grey mb-[15px] flex items-start gap-[10px]"
                      key={id}
                    >
                      <span className="pt-[6px]">
                        <ExploreCircle />
                      </span>
                      {obj.content}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreNanospace;
