import React, {Component} from "react";
import {RowSkeleton} from "../UserAccountCenter/ArticleList/RowSkeleton";

export class Menu extends Component {
    render() {
        return (
            <>
                <h1 className="text-4xl text-center
                               text-tertiary mb-24">
                    This is Categories Component!</h1>

                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                    <tr>
                        <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                            <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Image</p>
                        </th>
                        <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                            <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Title</p>
                        </th>
                        <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                            <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Date</p>
                        </th>
                        <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                            <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">views</p>
                        </th>
                        <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                            <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70"></p>
                        </th>
                    </tr>
                    </thead>

                    <tbody>
                    <RowSkeleton></RowSkeleton>
                    </tbody>

                </table>

            </>
        );
    }
}