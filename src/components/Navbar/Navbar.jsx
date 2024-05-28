// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { IoIosMenu, IoMdClose, IoMdSearch } from 'react-icons/io'
import { FaCaretDown, FaCartShopping } from 'react-icons/fa6'
import DarkMode from './DarkMode'
import MobileNav from '../MobileNav/MobileNav';

//import { Link, NavLink } from "react-router-dom";


const MenuLinks = [
    {
        id: 1,
        name: "Home",
        link: "/#",
    },
    {
        id: 2,
        name: "Shop",
        link: "/#shop",
    },
    {
        id: 3,
        name: "About",
        link: "/#",
    },
    {
        id: 4,
        name: "Blogs",
        link: "/#blogs",
    },
];

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

// eslint-disable-next-line react/prop-types
const Navbar = ({ handleOrderPopup }) => {

    const [menuOpened, setmenuOpened] = useState(false);
    const toggleMenu = () => setmenuOpened(!menuOpened);


    return (


        <div className='bg-white dark:bg-gray-900 dark:text-white duration-200
    relative z-40'>


            <div className='py-4'>
                <div className='container flex justify-between items-center'>
                    <div className='flex items-center gap-4'>
                        <a href="#"
                            className='text-primary font-semibold tracking-wide 
                            text-2xl uppercase sm:text-3xl'>
                            Gadgetify
                        </a>
                        <div className='hidden lg:block'>
                            <ul className='flex items-center gap-4'>
                                {MenuLinks.map((data, index) => (
                                    <li key={index}>
                                        <a
                                            href={data.link}
                                            className='inline-block
                                            px-4 font-semibold text-gray-500 hover:text-black
                                            dark:hover:text-white duration-200'>

                                            {data.name}
                                        </a>
                                    </li>
                                ))}

                                <li className='relative cursor-pointer group'>
                                    <a href="#"
                                        className='flex items-center gap-[2px] font-semibold
                                      text-gray-500 dark:hover:text-white py-2'>
                                        Quick Links
                                        <span>
                                            <FaCaretDown className='group-hover:rotate-180
                                       duration-300 ' />
                                        </span>
                                    </a>

                                    {/*Dropdown Links */}
                                    <div className='absolute z-[9999] hidden 
                                    group-hover:block w-[200px] rounded-md bg-white
                                    shadow-md dark:bg-gray-900 p-2 dark:text-white'
                                    >
                                        <ul className='space-y-2'>
                                            {DropdownLinks.map((data) => (
                                                // eslint-disable-next-line react/jsx-key
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
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='flex justify-between items-center gap-4'>

                        {/*Search bar */}
                        <div className='relative group hidden sm:block'>
                            <input type="text"
                                placeholder='Search'
                                className='search-bar'
                            />
                            <IoMdSearch className='text-xl text-gray-600 top-1/2
                            dark:text-gray-400 -translate-y-1/2 right-3 absolute
                            group-hove:text-primary duration-200' />
                        </div>

                        {/*Order button*/}
                        <button className='relative p-3' onClick={handleOrderPopup}>
                            <FaCartShopping className='text-xl text-gray-600 
                            dark:text-gray-400'/>
                            <div className='w-4 h-4 bg-red-500 text-white
                            rounded-full absolute top-0 right-0 flex items-center
                            justify-center text-xs'>
                                5
                            </div>
                        </button>
                        <div>
                            <DarkMode />
                        </div>

                        <div>
                            {!menuOpened ? (
                                <IoIosMenu className="md:hidden cursor-pointer w-[2rem] h-[2rem] text-gray-600 
                                dark:text-gray-400 "

                                    onClick={toggleMenu}
                                />

                            ) : (
                                <IoMdClose className="md:hidden cursor-pointer w-[2rem] h-[2rem] text-gray-600 
                                dark:text-gray-400 "

                                    onClick={toggleMenu} />
                            )}



                            {/* Navbar Desktop*/}
                            <MobileNav
                                containerStyles=
                                {"hidden  gap-x-5 xl:gap-x-[1.5rem]"}
                            />

                            {/* Navbar Mobile*/}
                            <MobileNav

                                containerStyles=
                                {`${menuOpened ?
                                    "lg:hidden font-semibold flex center absolute flex-col gap-y-12 fixed top-[75px] right-[0] p-12 bg-[#fff] dark:bg-gray-900  shadow-md w-64  transition-all duration-300"
                                    :
                                    "flex item-start flex-col gap-y-12 fixed top-20 p-12 bg-red rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 -right-[100%]"
                                    }`}
                            />

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Navbar;