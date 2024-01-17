import {Component} from "react";

export class ArticleContainer extends Component {
    render() {
        return (
            <div className="w-full px-16">
                <h1 className={"text-gray-800 text-4xl mb-10"}>Featured Articles</h1>

                <div className="w-full flex justify-between flex-wrap">

                    <div className="md:w-[55%] w-full h-60 bg-gray-300 object-cover bg-center rounded-xl">

                    </div>

                    <div className="md:w-[40%] w-full h-60 pl-4 pt-4 pr-8 flex flex-col justify-between">
                        <h2 className="text-4xl">This is just a title This is just a title hello there</h2>
                        <div className="w-full flex justify-between items-end">

                            <div className="w-20 h-20 rounded-md bg-gray-200"></div>
                            <p className={"h-max text-sm"}>Tharindu Dilan</p>
                            <p className="w-24"></p>
                            <p className={"h-max text-[1rem]"}>2024-January-24</p>

                        </div>
                    </div>

                </div>

                <div
                    className="flex md:justify-between justify-center w-full py-4 h-max mt-8 mb-8 flex-wrap gap-y-4 gap-x-2">

                    <div className="w-56 h-72 bg-gray-300 rounded-xl">

                    </div>
                    <div className="w-56 h-72 bg-gray-300 rounded-xl">

                    </div>
                    <div className="w-56 h-72 bg-gray-300 rounded-xl">

                    </div>
                    <div className="w-56 h-72 bg-gray-300 rounded-xl">

                    </div>

                </div>

            </div>
        );
    }
}