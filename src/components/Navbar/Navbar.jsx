import React from "react";
import { navItems } from "../../constants/Navitems";
import logo from "../../assets/cardeallogo.png";
import darkLogo from "../../assets/black-logo.png";
import { Link } from "react-router-dom";
import { ConsoleSqlOutlined, MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useEffect } from "react";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [changeBg, setChangeBg] = useState(false);
  const top_offset = 500;

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY)
      if (window.scrollY >= top_offset) {
        setChangeBg(true);
      } else {
        setChangeBg(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <div
      className={`flex justify-between py-3 px-10  ${changeBg ? "glass-effect" : "bg-black"}  nav-outer	z-10`}>
      <div className="flex items-center">
        <Link to="/">
          {!changeBg && <img className="w-28" src={logo} alt="Logo" />}
          {changeBg && <img className="w-28" src={darkLogo} alt="dlogo" />}
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="cursor-pointer ham-icon"
        >
          <MenuOutlined style={{ color: "black" }} />
        </span>

        <ul className={`flex navigation-ul ${showMenu ? "show" : ""}`}>
          {navItems.map((item) => (
            <li
              className={`nav-item px-3 ${
                changeBg ? "text-black" : "text-white"
              }  flex justify-center items-center text-xl`}
              key={item.id}
            >
              <Link to={item.routeLink} className="flex items-center">
                {item.title}
                {item.icon && (
                  <img className="w-8 pl-2" src={item.icon} alt={item.title} />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
