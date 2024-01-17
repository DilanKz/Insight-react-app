import {Component} from "react";

export class CategoryContainerSkeleton extends Component {
    render() {
        return (
            <div className="w-full px-16 mb-10">
                <h1 className={"text-gray-800 text-4xl mb-10 bg-gray-300 h-8 w-1/6 rounded-md animate-pulse"}></h1>
                <div className="grid grid-cols-5 gap-4">
                    <div className="col-span-2 h-52 bg-gray-300 rounded-xl animate-pulse"></div>
                    <div className="col-span-1 h-52 bg-gray-300 rounded-xl animate-pulse"></div>
                    <div className="col-span-1 h-52 bg-gray-300 rounded-xl animate-pulse"></div>
                    <div className="col-span-1 h-52 bg-gray-300 rounded-xl animate-pulse"></div>
                    <div className="col-span-1 h-52 bg-gray-300 rounded-xl animate-pulse"></div>
                    <div className="col-span-1 h-52 bg-gray-300 rounded-xl animate-pulse"></div>
                    <div className="col-span-1 h-52 bg-gray-300 rounded-xl animate-pulse"></div>
                    <div className="col-span-2 h-52 bg-gray-300 rounded-xl animate-pulse"></div>
                </div>

            </div>
        );
    }
}