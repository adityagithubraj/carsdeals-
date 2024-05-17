import React from "react";
import logo from "../../assets/cardeallogo.png";
import { footItems } from "../../constants/Footitems";
import { Link } from "react-router-dom";

function Footer() {
  const copyrightYear = new Date().getFullYear();

  return (
    <div className="bg-[#000000] py-5 px-5 md:py-8">
      <div className="container mx-auto foot-container">
        <div>
          <img src={logo} className="mx-auto w-[100px] lg:w-[50%]" />
        </div>
        <div className="flex justify-center flex-col items-center">
          <ul className="flex gap-x-2 md:gap-x-8 ">
            {footItems.map((item) => (
              <li
                key={item.id}
                className="text-white text-center text-sm md:text-lg"
              >
                <Link to={item.routeLink}>{item.text}</Link>
              </li>
            ))}
          </ul>
          <p className="text-[#8A8A8A] mt-5 text-sm">
            ® {copyrightYear} www.carsdeal.com All Rights Reserved
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Footer;
