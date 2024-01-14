import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faEnvelope} from "@fortawesome/free-solid-svg-icons";

export class UserPrivacyInformation extends Component {
    render() {
        return (
            <div className="h-full w-full">
                <h2 className=" text-2xl font-bold sm:text-xl pt-8 ps-3">Privacy and Security</h2>

                <div className="flex h-max w-full justify-center gap-x-10">
                    <div className="w-full h-max px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
                        <h2 className=" text-2xl sm:text-xl pt-8 ps-3">Change Password</h2>
                        <div className="flex ">
                            <div className="grid max-w-2xl w-full h-full mx-auto">

                                <div className="items-center sm:mt-5 text-[#202142]">

                                    <div className="mt-2">
                                        <input
                                            className="block my-8 w-full rounded-md border-0 py-1.5 outline-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset pl-4 sm:text-sm sm:leading-6"
                                            id="current" name="currentPass"
                                            type="text" placeholder="Current Password"
                                            required
                                        />
                                    </div>

                                    <div className="mt-2">
                                        <input
                                            className="block my-8 w-full rounded-md border-0 py-1.5 outline-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset pl-4 sm:text-sm sm:leading-6"
                                            id="pass" name="newPass"
                                            type="password" placeholder="New Password"
                                            required
                                        />
                                    </div>

                                    <div className="mt-2">
                                        <input
                                            className="block my-8 w-full rounded-md border-0 py-1.5 outline-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset pl-4 sm:text-sm sm:leading-6"
                                            id="re-newPass" name="re-newPass"
                                            type="password" placeholder="Retype New Password"
                                            required
                                        />
                                    </div>

                                    <div className="flex justify-end">
                                        <button type="button"
                                                className="text-white bg-secondary font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                                            <FontAwesomeIcon icon={faEdit} className="mr-2"/>
                                            Update Password
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-max px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
                        <h2 className=" text-2xl sm:text-xl pt-8 ps-3">Change Email</h2>
                        <div className="flex ">
                            <div className="grid max-w-2xl w-full h-full mx-auto">

                                <div className="items-center sm:mt-5 text-[#202142]">

                                    <div className="mt-2">
                                        <input
                                            className="block my-8 w-full rounded-md border-0 py-1.5 outline-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset pl-4 sm:text-sm sm:leading-6"
                                            id="email"
                                            type="text" placeholder="Email"
                                            required
                                        />
                                    </div>

                                    <div className="mt-2">
                                        <input
                                            className="block my-8 w-full rounded-md border-0 py-1.5 outline-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset pl-4 sm:text-sm sm:leading-6"
                                            id="otp"
                                            type="password" placeholder="OTP"
                                            required
                                        />
                                    </div>

                                    <div className="mt-2">
                                        <input
                                            className="block my-8 w-full rounded-md border-0 py-1.5 outline-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset pl-4 sm:text-sm sm:leading-6"
                                            id="newEmail"
                                            type="password" placeholder="New Email"
                                            required
                                        />
                                    </div>

                                    <div className="flex justify-end">
                                        <button type="button"
                                                className="text-white bg-secondary font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                                            <FontAwesomeIcon icon={faEdit} className="mr-2"/>
                                            Update email
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="w-full h-max flex justify-end">

                    <div className="w-1/2 h-fit bg-gray-50 mt-10 rounded-md p-4 shadow-xl mr-8">

                        <p>
                            Encountering an issue or have a question? Don't hesitate to reach out to our dedicated
                            team
                            of admins. We're here to assist you every step of the way. Your satisfaction is our
                            priority!
                        </p>

                        <button className="bg-secondary text-white rounded-md px-4 py-2 mt-4">
                            <FontAwesomeIcon icon={faEnvelope} className="mr-2"/>
                            Contact Admin
                        </button>

                    </div>

                </div>

            </div>
        );
    }
}