import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { navItems } from "../../constants/Navitems";
import logo from "../../assets/cardeallogo.png";
import darkLogo from "../../assets/black-logo.png";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setShowMenu(false);
  }, [location]);

  return (
    <div
      className={`fixed w-[100%] flex justify-between py-3 px-10 bg-black nav-outer z-10`}
    >
      <div className="flex items-center">
        <Link to="/">
          
            <img className="w-28" src={logo} alt="Logo" />
          
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="cursor-pointer ham-icon"
        >
          
            <MenuOutlined style={{ color: "white" }} />
          
        </span>

        <ul className={`flex navigation-ul ${showMenu ? "show" : ""}`}>
          {navItems.map((item) => (
            <li
              className={`nav-item px-3 text-white
               flex justify-center items-center text-xl`}
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
                {item.icon && (
                  <img
                    className="w-8 pl-2 desk-profile"
                    src={item.icon}
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
