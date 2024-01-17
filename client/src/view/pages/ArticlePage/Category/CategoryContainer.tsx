import {Component} from "react";

export class CategoryContainer extends Component {
    render() {
        return (
            <div className="w-full px-16 mb-10">
                <h1 className={"text-gray-800 text-4xl my-10"}>Explore</h1>
                <div className="grid grid-cols-5 gap-4">
                    <div className="col-span-2 h-52 bg-gray-300 rounded-xl"></div>
                    <div className="col-span-1 h-52 bg-gray-300 rounded-xl"></div>
                    <div className="col-span-1 h-52 bg-gray-300 rounded-xl"></div>
                    <div className="col-span-1 h-52 bg-gray-300 rounded-xl"></div>
                    <div className="col-span-1 h-52 bg-gray-300 rounded-xl"></div>
                    <div className="col-span-1 h-52 bg-gray-300 rounded-xl"></div>
                    <div className="col-span-1 h-52 bg-gray-300 rounded-xl"></div>
                    <div className="col-span-2 h-52 bg-gray-300 rounded-xl"></div>
                </div>

            </div>
        );
    }
}