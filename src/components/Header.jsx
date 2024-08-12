import React from "react";
import Navbar from "./Navbar";
import { HEADER_SOCIAL_LINK } from "../utils/helper";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-header-bg bg-center bg-no-repeat lg:bg-size-100 bg-cover xl:min-h-screen relative">
      <div className="bg-gradient-bg w-full sm:h-[204px] h-[80px] absolute left-0 sm:bottom-0 bottom-[9%]"></div>
      <Navbar />
      <div className="lg:pt-[182px] xl:pb-0 lg:pb-[259px] md:py-[150px] py-[120px] flex flex-col px-6 relative z-10">
        <h1 className="font-bold leading-120 text-white lg:text-custom-xl md:text-custom-lg sm:text-custom-md text-custom-xsm text-center lg:max-w-[801px] mx-auto font-Orbitron mb-4">
          Save NANOSPACE World from Enemies
        </h1>
        <p className="font-Saira font-normal md:text-xl text-lg text-white text-center leading-normal md:mb-[46px] sm:mb-9 mb-6">
          Unleash ever - existing excitement with adorable girls armed with
          destructive gunfire.
        </p>
        <div className="flex flex-wrap justify-center mx-auto gap-4">
          {HEADER_SOCIAL_LINK.map((obj, id) => (
            <Link key={id} to={obj.url}>
              <img
                className="w-full max-w-[119px] max-h-[35px]"
                src={obj.img}
                alt={obj.title}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
