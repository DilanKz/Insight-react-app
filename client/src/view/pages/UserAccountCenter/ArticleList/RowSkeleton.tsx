import React, {Component} from "react";

export class RowSkeleton extends Component {
    render() {
        return (
            <tr>

                <td className="p-4 border-b border-blue-gray-50 w-52">


                    <div className="w-1/2 h-16 bg-gray-300 animate-pulse rounded-xl">

                    </div>

                </td>

                <td className="p-4 border-b border-blue-gray-50">
                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal px-4">
                        <p className="w-full h-4 bg-gray-300 animate-pulse rounded-full"></p>
                        <p className="w-1/2 h-4 bg-gray-300 animate-pulse mt-1 rounded-full"></p>
                    </p>
                </td>

                <td className="p-4 border-b border-blue-gray-50">
                    <p className="w-3/4 h-4 bg-gray-300 animate-pulse mt-1 rounded-full"></p>
                </td>

                <td className="p-4 border-b border-blue-gray-50">
                    <p className="w-1/4 h-4 bg-gray-300 animate-pulse mt-1 rounded-full"></p>
                </td>

                <td className="p-4 border-b border-blue-gray-50">
                    <div className="w-full h-full flex gap-x-2">
                        <p className="w-1/5 h-6 bg-gray-300 animate-pulse mt-1 rounded-md "></p>
                        <p className="w-1/5 h-6 bg-gray-300 animate-pulse mt-1 rounded-md"></p>
                    </div>
                </td>

            </tr>
        );
    }
}