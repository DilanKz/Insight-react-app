import {Component} from "react";
import './home.css'


export class Home extends Component {

    render() {
        return (

            <div>

                <div className="h-full w-screen px-10 py-2">
                    <h1 className="text-[#27374D] xl:text-[10rem] lg:text-9xl md:text-9xl
                sm:text-8xl md:pt-16 pt-16 text-7xl pl-0">
                        Read, Express, <span className="text-[#9DB2BF]">Insight</span></h1>

                    <div className="flex justify-start pt-5 flex-wrap">
                        <form className="md:w-1/2 w-full flex items-center pt-4">
                            <label htmlFor="simple-search" className="sr-only">Search</label>
                            <div className="relative w-full">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">

                                </div>
                                <input type="text" id="simple-search"
                                       className="outline-0 bg-[#DDE6ED] py-4 text-2xl rounded-full text-[#27374D] block w-full ps-10 border-2"
                                       placeholder="Search for articles..." required/>
                            </div>

                            <button type="button" className="bg-[#27374D] w-[150px] text-xl
                    text-white py-4 ml-2 rounded-full relative left-[-100px]">
                                <span className="inline pr-2">Search</span>
                            </button>
                        </form>
                        <p className='text-lg mt-4 md:w-1/2 w-full'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At blanditiis consequun
                            tur culpa dicta distinctio ea, eaque eius eligendi est facilis fuga illum incidunt la
                        </p>
                    </div>

                </div>

                <div
                    className="relative mt-[40px] w-screen min-h-[401px] bg-amber-400 overflow-x-hidden overflow-y-hidden">

                    <div className="w-full flex justify-between px-4 pt-2">
                        <div className="w-fit">
                            <h3 className="text-[#27374D] font-light text-2xl">Start With Our
                                <span className="text-black font-bold"> latest Articles</span>
                            </h3>
                        </div>

                        <div className="w-fit">
                            <button className="text-black px-3">L-----</button>
                            <button className="text-black px-3">-----R</button>
                        </div>
                    </div>

                    <div className="ml-5 w-screen h-[500px] overflow-x-auto overflow-y-hidden no-scroll-bar">

                        <div className="mt-[30px] w-screen h-full">
                            <div className="flex gap-x-12">
                                <div className="min-w-[330px] h-[450px] bg-gray-300 border p-4">
                                    Content 1
                                </div>
                                <div className="min-w-[330px] h-[450px] bg-gray-300 border p-4">
                                    Content 1
                                </div>
                                <div className="min-w-[330px] h-[450px] bg-gray-300 border p-4">
                                    Content 1
                                </div>
                                <div className="min-w-[330px] h-[450px] bg-gray-300 border p-4">
                                    Content 1
                                </div>
                                <div className="min-w-[330px] h-[450px] bg-gray-300 border p-4">
                                    Content 1
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
            </div>


        )
            ;
    }
}