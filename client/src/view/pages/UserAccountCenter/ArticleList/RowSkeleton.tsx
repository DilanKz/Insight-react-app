import React, {Component} from "react";
import img from "../../../../images/selectImage.jpg";
import {faImage} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export class RowSkeleton extends Component {
    render() {
        return (
            <tr>

                <td className="p-4 border-b border-blue-gray-50 w-24 ">
                    <div className="flex items-center gap-3">
                        <div className="justify-center items-center flex relative bg-gray-300 animate-pulse my-2
                         w-12 h-8 rounded-md border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1">
                            <FontAwesomeIcon className="text-gray-400" icon={faImage} />
                        </div>
                    </div>

                </td>

                <td className="p-4 border-b border-blue-gray-50 w-[48%] ">
                    <div className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal px-4">
                        <p className="w-11/12 h-4 bg-gray-300 animate-pulse rounded-full"></p>
                    </div>
                </td>

                <td className="p-4 border-b border-blue-gray-50">
                    <p className="w-3/4 h-4 bg-gray-300 animate-pulse mt-1 rounded-full"></p>
                </td>

                <td className="p-4 border-b border-blue-gray-50">
                    <p className="w-1/4 h-4 bg-gray-300 animate-pulse mt-1 rounded-full"></p>
                </td>

                <td className="p-4 border-b border-blue-gray-50">
                    <div className="w-full h-full flex gap">
                        <p className="w-2/5 h-6 bg-gray-300 animate-pulse mt-1 rounded-md"></p>
                    </div>
                </td>

            </tr>
        );
    }
}