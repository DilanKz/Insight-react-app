import {Component} from "react";

export class ArticleContainerSkeleton extends Component {
    render() {
        return (
            <div className="w-full px-16">

                <div className="w-full flex justify-between flex-wrap">

                    <div className="md:w-[55%] w-full h-60 bg-gray-300 object-cover bg-center rounded-xl animate-pulse">

                    </div>

                    <div className="md:w-[40%] w-full h-60 pl-4 pt-4 pr-8 flex flex-col justify-between">
                        <div>
                            <h2 className="w-full h-6 bg-gray-300 mb-2 animate-pulse rounded-md"></h2>
                            <h2 className="w-1/3 h-6 bg-gray-300 animate-pulse rounded-md"></h2>
                        </div>
                        <div className="w-full flex justify-between items-end">

                            <div className="w-20 h-20 rounded-md bg-gray-300 animate-pulse"></div>
                            <p className={"text-sm h-4 w-1/2 bg-gray-300 animate-pulse ml-1 rounded-md"}></p>
                            <p className="w-24"></p>
                            <p className={"h-4 w-1/2 text-[1rem] bg-gray-300 animate-pulse rounded-md"}></p>

                        </div>
                    </div>

                </div>
                <h1 className={"text-gray-800 text-4xl my-10 bg-gray-300 h-8 w-1/4 rounded-md animate-pulse"}></h1>
                <div
                    className="flex md:justify-between justify-center w-full py-4 h-max mt-8 mb-8 flex-wrap gap-y-4 gap-x-2">

                    <div className="w-56 h-72 bg-gray-300 rounded-xl animate-pulse">

                    </div>
                    <div className="w-56 h-72 bg-gray-300 rounded-xl animate-pulse">

                    </div>
                    <div className="w-56 h-72 bg-gray-300 rounded-xl animate-pulse">

                    </div>
                    <div className="w-56 h-72 bg-gray-300 rounded-xl animate-pulse">

                    </div>

                </div>

            </div>
        );
    }
}