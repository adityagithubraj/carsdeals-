import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { navItems } from "../../constants/Navitems";
import logo from "../../assets/cardeallogo.png";
import darkLogo from "../../assets/black-logo.png";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [changeBg, setChangeBg] = useState(false);
  const top_offset = 500;
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= top_offset) {
        setChangeBg(true);
      } else {
        setChangeBg(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Effect to handle URL change
  useEffect(() => {
    // Close the menu when the URL changes
    setShowMenu(false);
  }, [location]);

  return (
    <div
      className={`fixed w-[100%] flex justify-between py-3 px-10 ${
        changeBg ? "glass-effect" : "bg-black"
      } nav-outer z-10`}
    >
      <div className="flex items-center">
        <Link to="/">
          {changeBg ? (
            <img className="w-28" src={darkLogo} alt="dlogo" />
          ) : (
            <img className="w-28" src={logo} alt="Logo" />
          )}
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="cursor-pointer ham-icon"
        >
          {changeBg ? (
            <MenuOutlined style={{ color: "black" }} />
          ) : (
            <MenuOutlined style={{ color: "white" }} />
          )}
        </span>

        <ul className={`flex navigation-ul ${showMenu ? "show" : ""}`}>
          {navItems.map((item) => (
            <li
              className={`nav-item px-3 ${
                changeBg ? "text-black" : "text-white"
              } flex justify-center items-center text-xl`}
              key={item.id}
            >
              <Link to={item.routeLink} className="flex items-center">
                {item.title}
                {item.icon && (
                  <img
                    className="w-8 pl-2 mobile-pro-icon"
                    src={item.icon}
                    alt={item.title}
                  />
                )}
                {item.icon && !changeBg && (
                  <img
                    className="w-8 pl-2 desk-profile"
                    src={item.icon}
                    alt={item.title}
                  />
                )}
                {item.icon && changeBg && (
                  <img
                    className="w-8 pl-2 desk-profile"
                    src={item.icon_dark}
                    alt={item.title}
                  />
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
