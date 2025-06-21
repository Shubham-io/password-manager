import React from "react";
import heart from "../../public/dil.png";

const Footer = () => {
  return (
    <div className="bg-teal-600 flex justify-center items-center text-white fixed bottom-0 h-12 w-full">
      <h2>
        created by{" "}
        <img src={heart} alt="heart" className="inline-block w-5 h-5" /> Shubham
        Vishwakarma
      </h2>
    </div>
  );
};

export default Footer;
