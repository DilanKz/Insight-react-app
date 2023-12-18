import {Component} from "react";

export class Article extends Component {
    render() {
        return (
            <div className="w-[350px] h-fit pb-5 justify-center flex flex-wrap pt-6">
                <div className="w-[330px] h-[400px] rounded-2xl">

                    <div className="w-[330px] h-[400px] bg-gray-200 rounded-2xl
                                relative transform hover:translate-y-[-8px] duration-300 transition-transform ease-in-out">

                    </div>
                </div>
                <div className="w-[330px] min-h-8 flex gap-x-3 text-xs mt-1">

                                <span className="bg-gray-200 px-2 py-0.5 h-[1.4rem]
                                    rounded-full font-light">
                                        Sport
                                    </span>

                    <span className="bg-gray-200 px-2 py-0.5 h-[1.4rem]
                                    rounded-full font-light">
                                        Wrestling
                                    </span>

                </div>
                <div className="w-[330px] h-16 mt-3 flex flex-wrap">

                    <h3 className="text-2xl cursor-pointer hover:underline">Roman reigns retired
                        today in
                        RAW while crying</h3>

                </div>

            </div>
        );
    }
}