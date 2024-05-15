import React from "react";
import { navItems } from "../../constants/Navitems";
import logo from "../../assets/cardeallogo.png";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useEffect } from "react";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className=" flex justify-between py-3 px-10  bg-black nav-outer	">
      <div className="flex items-center">
        <Link to='/'><img class="w-28" src={logo} alt="Logo" /></Link>
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
              className="nav-item px-3 text-white flex justify-center items-center text-xl"
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
