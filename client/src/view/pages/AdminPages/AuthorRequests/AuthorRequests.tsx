import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faExclamationTriangle, faX} from "@fortawesome/free-solid-svg-icons";

export class AuthorRequests extends Component {
    render() {
        return (
            <div className="w-full">

                <h2 className=" text-2xl font-bold sm:text-xl py-8 ps-3">Author requests</h2>

                <table className="w-full">
                    <thead>

                    <tr>
                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-bold text-gray-800">Name</th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-bold text-gray-800">Contact</th>
                        <th scope="col" className="relative py-3.5 pl-3 pr-4"><span className="hidden">Edit</span></th>
                    </tr>

                    </thead>
                    <tbody className="">
                    <tr>
                        <td className="whitespace-nowrap py-3 pl-4 pr-3 text-sm">
                            <div className="flex items-center">
                                <div className="w-11 h-11 flex-shrink-0">
                                    <img className="h-11 rounded-full w-11"
                                         src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                         alt=""/>
                                </div>

                                <div className="ml-4">
                                    <div className="text-gray-900 font-medium">Tharindu Dilan</div>
                                    <div className="mt-1 text-gray-400">Dilanmallawarachchi@gmail.com</div>
                                </div>
                            </div>
                        </td>

                        <td className="px-3 py-5 text-sm text-gray-800">
                            <div className="text-gray-800">07X XXXX XXX</div>
                        </td>

                        <td className="px-3 py-5 text-sm text-gray-800">

                            <button
                                className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20"
                                type="button"
                            >
                                <FontAwesomeIcon className="cursor-pointer text-green-700"
                                                 icon={faCheck}></FontAwesomeIcon>
                            </button>
                            <button
                                className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20"
                                type="button"
                            >
                                <FontAwesomeIcon className="cursor-pointer text-red-700" icon={faX}></FontAwesomeIcon>
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>

            </div>
        );
    }
}