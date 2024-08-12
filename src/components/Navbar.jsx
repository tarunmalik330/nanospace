import React, { useState } from "react";
import navlogo from "../assets/images/png/nav-logo.png";
import { NAV_LINK } from "../utils/helper";
import { Link } from "react-router-dom";
import { NavBtnArrow } from "./common/Icons";

const Navbar = () => {
  const [nav, setNav] = useState(true);
  if (nav === false) {
    document.body.classList.add("max-lg:overflow-hidden");
  } else {
    document.body.classList.remove("max-lg:overflow-hidden");
  }

  return (
    <div className="bg-off-white shadow-nav lg:py-0 py-4">
      <div className="container xl:max-w-[1304px] px-4 mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img
              src={navlogo}
              alt="navlogo"
              className="max-w-[154px] w-full h-12"
            />
          </Link>
          <ul
            className={`${
              nav ? "left-[-100%]" : "left-0"
            } flex max-lg:fixed max-lg:top-0 max-lg:bottom-0 max-lg:bg-[#020202] max-lg:h-full max-lg:w-full max-lg:z-50 max-lg:transition-all max-lg:duration-300 max-lg:ease-linear max-lg:min-h-screen max-lg:flex-col items-center justify-center`}
          >
            {NAV_LINK.map((obj, id) => (
              <li
                className="pt-[26.97px] pb-7 px-4 hover:bg-off-black transition-all ease-linear duration-300"
                onClick={() => setNav(!nav)}
                key={id}
              >
                <Link
                  to={obj.url}
                  className="font-Saira font-normal text-base text-white leading-154"
                >
                  {obj.link}
                </Link>
              </li>
            ))}
            <li className="lg:hidden block">
              <button className="bg-off-blue group text-white py-[6px] pl-4 pr-3 rounded-full border-[3px] border-solid border-off-blue flex gap-[7px] items-center font-Saira text-lg font-medium leading-154 text-shadow-nav-links">
                Find More{" "}
                <NavBtnArrow className="group-hover:translate-x-1 transition-all ease-linear duration-300" />
              </button>
            </li>
          </ul>
          <div className="lg:block hidden">
            <button className="bg-off-blue text-white group py-[6px] pl-4 pr-3 rounded-full border-[3px] border-solid border-off-blue flex gap-[7px] items-center font-Saira text-lg font-medium leading-154 text-shadow-nav-links">
              Find More{" "}
              <NavBtnArrow className="group-hover:translate-x-1 transition-all ease-linear duration-300" />
            </button>
          </div>
          <div
            onClick={() => setNav(!nav)}
            className="lg:hidden w-[28px] h-[20px] relative z-[55] flex justify-between flex-col"
          >
            <span
              className={`${
                nav
                  ? "bg-white h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all"
                  : "bg-white transition-all duration-300 rounded-[3px] ease-linear h-[4px] w-full rotate-[50deg] translate-y-[14px]"
              }`}
            ></span>
            <span
              className={`${
                nav
                  ? "bg-white h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all"
                  : "duration-300 rounded-[3px] ease-linear transition-all hidden"
              }`}
            ></span>
            <span
              className={`${
                nav
                  ? "bg-white h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all"
                  : "bg-white transition-all duration-300 rounded-[3px] ease-linear h-[4px] w-full rotate-[-50deg] translate-y-[-50%]"
              }`}
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
