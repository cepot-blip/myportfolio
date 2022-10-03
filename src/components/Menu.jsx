import { Link } from "react-router-dom";
import React from "react";
import {
  HiMenuAlt3,
  HiX,
} from "react-icons/hi";
import { useState } from "react";
import Footer from "./Footer";

const Menu = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <>
    
      <div
        className={`fixed top-0 right-0 z-[250] w-20 h-16 flex justify-center items-center ${
          show ? "text-white" : "text-blue-400"
        } select-none cursor-pointer`}
        onClick={() => {
          setShow(!show);
        }}
      >
      
        {show ? (
          <HiX className="text-4xl" />
        ) : (
          <HiMenuAlt3 className="text-4xl" />
        )}

      </div>
      
      <menu
        className={`w-[70%] md:w-[20%] h-screen fixed top-0 right-0 bg-blue-400/90 flex flex-col z-[200] ${
          show ? "translate-x-0" : "translate-x-[100%]"
        } duration-500`}
      >
      
        <Link to={"#biodata"}>
          <div
            className="w-full h-16 flex justify-start px-6 items-center text-white text-4xl font-thin select-none cursor-pointer"
            onClick={handleShow}
          >
            Biodata
          </div>
        </Link>


        <Link to={"#karier"}>
          <div
            className="w-full h-16 flex justify-start px-6 items-center text-white text-4xl font-thin select-none cursor-pointer"
            onClick={handleShow}
          >
            Karier
          </div>
        </Link>

        <Link to={"#skill"}>
          <div
            className="w-full h-16 flex justify-start px-6 items-center text-white text-4xl font-thin select-none cursor-pointer"
            onClick={handleShow}
          >
            Skill
          </div>
        </Link>

        <Link to={"#skill_ui_design"}>
          <div
            className="w-full h-16 flex justify-end px-6 items-center text-white text-2xl font-thin select-none cursor-pointer"
            onClick={handleShow}
          >
            Desain
          </div>
        </Link>

        <Link to={"#skill_frontend"}>
          <div
            className="w-full h-16 flex justify-end px-6 items-center text-white text-2xl font-thin select-none cursor-pointer"
            onClick={handleShow}
          >
            Frontend
          </div>
        </Link>

        <Link to={"#skill_backend"}>
          <div
            className="w-full h-16 flex justify-end px-6 items-center text-white text-2xl font-thin select-none cursor-pointer"
            onClick={handleShow}
          >
            Backend
          </div>
        </Link>
        <div className="mt-auto">
          <Footer />
        </div>
      </menu>
    </>
  );
};

export default Menu;