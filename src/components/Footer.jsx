import React from "react";
import {
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer
      className="w-full p-6 flex flex-col bg-gray-900 gap-4 text-white py-10 text-left"
      id="contact"
    >
      <div className="flex flex-col gap-4 md:max-w-[600px] md:mx-auto ">
        <h1 className="text-blue-400 font-bold">Mohamad Prihartono</h1>
        <a
          href="https://goo.gl/maps/9ikPT5Zo2upxfYPf6"
          target={"_blank"}
          rel="noreferrer"
        >
          <div className="w-full flex items-center gap-4">
            <p>Jl Kp Utan Jaya Gg H Nali No.39E Depok Jawa Barat Indonesia</p>
          </div>
        </a>

        <a
          href="https://wa.me/6289644641134?text=Hello%20Mohamad%20Prihartono"
          target={"_blank"}
          rel="noreferrer"
        >
          <div className="w-full flex items-center gap-4">
            <AiOutlineWhatsApp /> +6289644641134
          </div>
        </a>

        <a
          href="mailto:prihartonomuhamad@gmail.com"
          target={"_blank"}
          rel="noreferrer"
        >
          <div className="w-full flex items-center gap-4">
            <AiOutlineMail /> prihartonomuhamad@gmail.com
          </div>
        </a>
        <a
          href="https://github.com/cepot-blip"
          target={"_blank"}
          rel="noreferrer"
        >
          <div className="w-full flex items-center gap-4">
            <AiOutlineGithub /> cepot-blip
          </div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;