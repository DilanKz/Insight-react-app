import React, { Component, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faXmark} from "@fortawesome/free-solid-svg-icons";

interface NavbarProps {}

interface NavbarState {
    open: boolean;
}

export class Navbar extends Component<NavbarProps, NavbarState> {
    constructor(props: NavbarProps) {
        super(props);
        this.state = {
            open: false,
        };
    }

    toggleMenu = () => {
        this.setState((prevState) => ({ open: !prevState.open }));
    };

    render() {
        const { open } = this.state;

        return (
            <div className="w-full fixed top-0 left-0 bg-tertiary z-50">
                <div className="md:flex justify-between items-center py-4">
                    <div className="ml-7 font-light text-2xl cursor-pointer flex item-center">
                        <h1 className="text-2xl">
                            <Link className="font-sans pl-4" to="/">
                                Insight
                            </Link>
                        </h1>
                    </div>

                    <div onClick={this.toggleMenu}
                        className="absolute text-3xl right-8 top-4 cursor-pointer md:hidden">
                        {open ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
                    </div>

                    <ul onClick={this.toggleMenu}
                        className={`absolute md:static md:flex item-center md:pb-0 left-0 w-full md:w-auto pl-4 transition-all duration-300 ease-in backdrop-blur bg-tertiary 
                        ${open ? 'top-15' : 'top-[-490px]'}`}>
                        <li className="md:ml-12 ml-8 text-[15px] md:my-0 my-5 flex items-center">
                            <Link
                                className="text-gray-800 hover:text-gray-500 duration-75 pb-1 hover:border-b-4 border-[#526D82]"
                                to="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="md:ml-12 ml-8 text-[15px] md:my-0 my-5 flex items-center">
                            <Link
                                className="text-gray-800 hover:text-gray-500 duration-75 pb-1 hover:border-b-4 border-[#526D82]"
                                to="/contact"
                            >
                                Blogs
                            </Link>
                        </li>
                        <li className="md:mr-32 md:ml-12 ml-8 text-[15px] md:my-0 my-5 flex items-center">
                            <Link
                                className="text-gray-800 hover:text-gray-500 duration-75 pb-1 hover:border-b-4 border-[#526D82]"
                                to="/menu"
                            >
                                Categories
                            </Link>
                        </li>

                        <Link className="" to="/sign">
                            <button className="md:pb-1 mb-2 bg-[#27374D] text-white px-3 py-1 text-[16px] rounded-[6px] sm:ml-7 ml-7 mr-3">
                                Get Started
                            </button>
                        </Link>
                    </ul>
                </div>
            </div>
        );
    }
}