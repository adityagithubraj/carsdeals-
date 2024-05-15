import React from 'react';
import { navItems } from '../../constants/Navitems';
import logo from '../../assets/cardeallogo.png'

function Navbar() {
  return (
    <div className='flex justify-between py-7 px-10  bg-black	'>
      <div>
        <img class="w-28" src={logo} alt="Logo" /> 
      </div>
      <div className='flex justify-center items-center'>
        <ul className='flex'>
          {navItems.map((item) => (
            <li className='nav-item px-3 text-white flex justify-center items-center	text-xl' key={item.id}>{item.title}
            {item.icon && <img class="w-8 pl-2" src={item.icon} alt={item.title} />}
            </li>
            
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
