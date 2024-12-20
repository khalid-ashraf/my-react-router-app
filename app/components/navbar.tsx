import React from "react";
import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav className='flex flex-col py-5 px-10'>
      <ul className='navbar-list flex gap-10 items-end justify-end'>
        <li className='navbar-item'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-gray-500"
            }
          >
            Home
          </NavLink>
        </li>
        <li className='navbar-item'>
          <NavLink
            to='/about'
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-gray-500"
            }
          >
            About
          </NavLink>
        </li>
        <li className='navbar-item'>
          <NavLink
            to='/contact'
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-gray-500"
            }
          >
            Contact
          </NavLink>
        </li>
        <li className='navbar-item'>
          <NavLink
            to='/users'
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-gray-500"
            }
          >
            Users
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
