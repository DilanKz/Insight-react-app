import React, {Component} from "react";
import img from "../../../../images/selectImage.jpg";

export class RowSkeleton extends Component {
    render() {
        return (
            <tr>

                <td className="p-4 border-b border-blue-gray-50 w-24 ">
                    <div className="flex items-center gap-3">
                        <div className="inline-block relative object-center bg-gray-300 animate-pulse my-2
                         w-12 h-8 rounded-lg border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"

                        />
                    </div>

                </td>

                <td className="p-4 border-b border-blue-gray-50 w-[48%] ">
                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal px-4">
                        <p className="w-11/12 h-4 bg-gray-300 animate-pulse rounded-full"></p>
                    </p>
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