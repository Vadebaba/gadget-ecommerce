import { useEffect, useState } from "react";
import { IoMdClose } from 'react-icons/io';
import { CgMenuRight } from 'react-icons/cg'
import { NavLink } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa6";

//import { Link } from "react-router-dom";
//import { motion } from "framer-motion";


const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
]

const MobileNav = ({ containerStyles }) => {
  return (


    <nav className={`${containerStyles}`}>

      <NavLink to={'/'} className={({ isActive }) => isActive ? "active_link" : ""}>
        <div className="flex text-gray-500 gap-x-1 
  hover:text-black dark:hover:text-white duration-200">
          Home
        </div>
      </NavLink>

      <NavLink to={'/'} className={({ isActive }) => isActive ? "active_link" : ""}>
        <div className="flex text-gray-500 gap-x-1 
  hover:text-black dark:hover:text-white duration-200">
          Shop
        </div>
      </NavLink>

      <NavLink to={'/'} className={({ isActive }) => isActive ? "active_link" : ""}>
        <div className="flex text-gray-500 gap-x-1 
  hover:text-black dark:hover:text-white duration-200">
          About
        </div>
      </NavLink>

      <NavLink to={'/'} className={({ isActive }) => isActive ? "active_link" : ""}>
        <div className="flex text-gray-500 gap-x-1 
  hover:text-black dark:hover:text-white duration-200">
          Blogs
        </div>
      </NavLink>

      <NavLink to={'/'} className={({ isActive }) => isActive ? "active_link" : ""}>
        <div className='flex items-center gap-[2px]  font-semibold
         text-gray-500 dark:hover:text-white '>
          Quick Links
          <span>
            <FaCaretDown className='group-hover:rotate-180
                                       duration-300 ' />
          </span>

          {/*Dropdown Links */}
          <div className='absolute z-[9999] hidden 
                                    group-hover:block w-[200px] rounded-md bg-white
                                    shadow-md dark:bg-gray-900 p-2 dark:text-white'
          >
            <ul className='space-y-2'>
              {DropdownLinks.map((data, index) => (
                <li>
                  <a
                    className='text-gray-500 rounded-md
                                                    dark:hover:text-white duration-200 inline-block
                                                    p-2 hover:bg-primary/20 w-full font-semibold'
                    href={data.link}
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </NavLink>
    </nav>

  )
}

export default MobileNav