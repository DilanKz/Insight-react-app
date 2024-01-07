import React, {Component} from "react";
import bgImage from "../../../images/bg.jpg";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouse} from "@fortawesome/free-solid-svg-icons";

export class SignUp extends Component {
    render() {
        return (

            <div className="relative">
                <div className="flex h-screen w-screen">

                    <div className="h-full lg:w-[60vw] md:w-[50vw] w-[0vw] bg-tertiary">
                        <img src={bgImage} className="w-full h-full object-cover" alt=""/>
                    </div>

                    <div className="flex flex-1 flex-col justify-center py-12 px-8
                lg:w-[40vw] md:w-[50vw] w-screen">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <h3 className="mx-auto h-10 w-auto text-center font-extrabold">Insight</h3>
                            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                Nice to meet you! Enter your details to register.
                            </h2>
                        </div>

                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form className="space-y-6">
                                <div>

                                    {/*<label htmlFor="email"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        Email address
                                    </label>*/}

                                    <div className="mt-2">
                                        <input
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 outline-0 focus:ring-inset pl-4 sm:text-sm sm:leading-6"
                                            id="email" name="regEmail"
                                            type="email" placeholder="Email"
                                            required/>
                                    </div>
                                </div>

                                <div>

                                    {/*<label htmlFor="email"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        Email address
                                    </label>*/}

                                    <div className="mt-2">
                                        <input
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 outline-0 focus:ring-inset pl-4 sm:text-sm sm:leading-6"
                                            id="email" name="regName"
                                            type="text" placeholder="Name"
                                            required/>
                                    </div>
                                </div>

                                <div>
                                    {/*<div className="flex items-center justify-between">
                                        <label htmlFor="password"
                                               className="block text-sm font-medium leading-6 text-gray-900">
                                            Password
                                        </label>
                                    </div>*/}
                                    <div className="mt-2 flex row gap-x-2">
                                        <input
                                            className="block w-full rounded-md border-0 py-1.5 outline-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset pl-4 sm:text-sm sm:leading-6"
                                            id="password" name="regPass"
                                            type="password" placeholder="password"
                                            required/>

                                        <input
                                            className="block w-full rounded-md border-0 py-1.5 outline-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset pl-4 sm:text-sm sm:leading-6"
                                            id="password" name="regPassConfirm"
                                            type="password" placeholder="confirm password"
                                            required/>

                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="button"
                                        className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary">
                                    Register
                                    </button>
                                </div>
                            </form>

                            <p className="mt-4 text-center text-sm text-gray-500 pb-3">
                                Already have an account?{' '}
                                <Link className="font-semibold leading-6 text-secondary hover:text-secondary"
                                      to="/sign">
                                    Sign In
                                </Link>
                            </p>
                        </div>
                    </div>

                </div>

                <Link to={"/"} className="absolute top-0 right-0 mr-4 mt-2 text-[1em] text-tertiary rounded-full">
                    <FontAwesomeIcon icon={faHouse} />
                </Link>

            </div>
        );
    }
}