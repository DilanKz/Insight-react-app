import {Component, useState} from "react";
import {Link} from "react-router-dom";


export const Navbar = () => {

    let [open,setOpen]=useState(false)

    return (
        <div className="w-full fixed top-0 left-0 backdrop-blur">

            <div className="md:flex justify-between items-center py-4">

                <div className="ml-7 font-light text-2xl cursor-pointer flex item-center">

                    <h1 className="text-2xl">

                        <Link className="" to="/">Quick-Bite</Link>

                    </h1>

                </div>

                <div onClick={()=>setOpen(!open)} className="absolute text-3xl right-8 top-4
                    cursor-pointer md:hidden">
                    {open ? 'M':'C'}
                </div>

                <ul onClick={()=>setOpen(!open)} className={"absolute md:static md:flex item-center md:pb-0" +
                    " left-0 w-full md:w-auto transition-all duration-300 ease-in" +
                    ` ${open ? 'top-15':'top-[-490px]' } `}>

                    <li className="md:ml-12 ml-8 text-[15px] md:my-0 my-5 flex items-center">
                        <Link className="text-gray-800 hover:text-gray-500 duration-75 pb-1
                            hover:border-b-4 border-amber-400"
                              to="/">Home</Link>
                    </li>
                    <li className="md:ml-12 ml-8 text-[15px] md:my-0 my-5 flex items-center">
                        <Link className="text-gray-800 hover:text-gray-500 duration-75 pb-1
                            hover:border-b-4 border-amber-400"
                              to="/about">About</Link>
                    </li>
                    <li className="md:ml-12 ml-8 text-[15px] md:my-0 my-5 flex items-center">
                        <Link className="text-gray-800 hover:text-gray-500 duration-75 pb-1
                            hover:border-b-4 border-amber-400"
                              to="/menu">Menu</Link>
                    </li>
                    <li className="md:mr-32 md:ml-12 ml-8 text-[15px] md:my-0 my-5 flex items-center">
                        <Link className="text-gray-800 hover:text-gray-500 duration-75 pb-1
                            hover:border-b-4 border-amber-400"
                              to="/contact">Contact</Link>
                    </li>

                    <button className="md:pb-1 mb-2 bg-amber-400 px-3 py-1 text-[16px] rounded-[6px] sm:ml-7 ml-7 mr-3">
                        Sign In

                    </button>

                </ul>


            </div>

        </div>
    );

}