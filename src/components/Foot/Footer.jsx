import React from "react";
import logo from "../../assets/cardeallogo.png";
import { footItems } from "../../constants/Footitems";

function Footer() {
  const copyrightYear = new Date().getFullYear();

  return (
    <div className="bg-[#000000] py-10">
      <div className="container mx-auto foot-container">
        <div>
          <img src={logo} className="mx-auto" />
        </div>
        <div className="flex justify-center flex-col items-center">
          <ul className="flex gap-x-14">
            {footItems.map((item) => (
              <li key={item.id} className="text-white text-xl">{item.text}</li>
            ))}
          </ul>
          <p className="text-[#8A8A8A] mt-5 text-xl">® {copyrightYear} www.carsdeal.com All Rights Reserved</p>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Footer;
