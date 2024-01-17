import React, {Component} from "react";

export class ArticleSkeleton extends Component {
    render() {
        return (
            <div className="w-[350px] h-fit pb-5 justify-center flex flex-wrap pt-6">
                <div className="w-[330px] h-[400px] rounded-2xl">

                    <div className="w-[330px] h-[400px] bg-gray-300 rounded-2xl animate-pulse">

                    </div>
                </div>
                <div className="w-[330px] min-h-8 flex gap-x-3 text-xs mt-1">


                            <span className="bg-gray-300 flex justify-center items-center p-2 w-16 h-[1.4rem]
                                    rounded-full font-light hover:cursor-pointer animate-pulse">
                            </span>
                    <span className="bg-gray-300 flex justify-center items-center p-2 w-16 h-[1.4rem]
                                    rounded-full font-light hover:cursor-pointer animate-pulse">
                            </span>

                </div>
                <div className="w-[330px] h-16 mt-3 flex flex-wrap">


                    <h3 className="text-2xl overflow-hidden whitespace-normal bg-gray-300 h-5 w-full rounded-xl animate-pulse">
                    </h3>
                    <h3 className="text-2xl overflow-hidden whitespace-normal bg-gray-300 h-5 w-1/2 rounded-xl animate-pulse">
                    </h3>
                </div>

            </div>
        );
    }
}