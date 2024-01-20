import React, {Component} from "react";

export class AuthorRowSkeleton extends Component {
    render() {
        return (
            <tr>
                <td className="whitespace-nowrap py-3 pl-4 pr-3 text-sm">
                    <div className="flex items-center">
                        <div className="w-11 h-11 flex-shrink-0">
                            <img className="h-11 rounded-full w-11 bg-gray-300 animate-pulse"
                                 alt=""/>
                        </div>

                        <div className="ml-4 w-28">
                            <div className="animate-pulse text-gray-900 font-medium bg-gray-300 rounded-md h-3 w-12"></div>
                            <div className="animate-pulse mt-1 text-gray-400 bg-gray-300 h-3 rounded-md"></div>
                        </div>
                    </div>
                </td>

                <td className="px-3 py-5 text-sm text-gray-800">
                    <div className="animate-pulse text-gray-800 h-4 bg-gray-300 w-1/2 rounded-md"></div>
                </td>

                <td className="px-3 py-5 text-sm text-gray-800 flex">

                    <div
                        className="animate-pulse bg-gray-300 relative align-middle select-none font-sans font-medium text-center uppercase transition-all w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900">
                    </div>

                    <div
                        className="animate-pulse bg-gray-300 relative align-middle select-none font-sans font-medium text-center uppercase transition-all w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900">
                    </div>
                </td>
            </tr>
        );
    }
}