import React, {Component} from "react";

export class UserGeneralInformation extends Component {
    render() {
        return (
            <div className="h-full w-full flex">

                <div className="w-full h-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
                    <h2 className=" text-2xl font-bold sm:text-xl">General Information</h2>

                    <div className="grid max-w-2xl mx-auto mt-8">
                        <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">

                            <img
                                className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-tertiary"
                                src=""
                                alt=""/>

                            <div className="flex flex-col space-y-5 sm:ml-8">
                                <button type="button"
                                        className="text-white bg-secondary font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                                    Change picture
                                </button>
                            </div>
                        </div>

                        <div className="items-center mt-8 sm:mt-14 text-[#202142]">

                            <div className="mt-2">
                                <input
                                    className="block my-8 w-full rounded-md border-0 py-1.5 outline-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset pl-4 sm:text-sm sm:leading-6"
                                    id="name" name="loginPass"
                                    type="text" placeholder="Name"
                                    required
                                />
                            </div>

                            <div className="mt-2">
                                <input
                                    className="block my-8 w-full rounded-md border-0 py-1.5 outline-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset pl-4 sm:text-sm sm:leading-6"
                                    id="contact" name="contact"
                                    type="text" placeholder="contact"
                                    required
                                />
                            </div>

                            <div className="mt-2">
                                <input
                                    className="block my-8 w-full rounded-md border-0 py-1.5 outline-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset pl-4 sm:text-sm sm:leading-6"
                                    id="address" name="address"
                                    type="text" placeholder="Address"
                                    required
                                />
                            </div>

                            <div className="flex justify-end">
                                <button type="button"
                                        className="text-white bg-secondary font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                                    Save
                                </button>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="">
                    <h2>Hi</h2>
                </div>

            </div>
        );
    }
}