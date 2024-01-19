import React, {Component} from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faArrowRightFromBracket,
    faChartBar,
    faInfoCircle,
    faPen,
    faTasks,
    faTrash,
    faUser
} from "@fortawesome/free-solid-svg-icons";
import {AdminContent} from "../AdminContent/AdminContent";

export class AdminAccount extends Component {
    render() {
        return (
            <div className={"flex overflow-hidden"}>

                <div className="h-screen lg:w-[18vw] pt-5 shadow-xl flex flex-col ">
                    <h1 className="text-secondary font-bold text-[2rem] pl-4">INSIGHT</h1>

                    <div className="flex-col flex justify-between h-full">
                        <div className="pt-5 mt-2">

                            <Link to="dashboard" className="">
                                <div className="font-medium pl-6 text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                                                        transition-all duration-200 hover:bg-gray-200 group cursor-pointer">
                                                <span className="justify-center items-center flex">
                                                    <span className="justify-center items-center flex">
                                                        <span className="justify-center items-center flex">
                                                            <span className="items-center justify-center flex">
                                                                <FontAwesomeIcon className="pr-3" icon={faChartBar}/>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                    <span>Dashboard</span>
                                </div>
                            </Link>


                            <div>
                                <p className="px-4 pt-10 pb-3 font-semibold text-xs tracking-widest text-gray-400 uppercase select-none">
                                    <FontAwesomeIcon className="pr-3" icon={faUser}></FontAwesomeIcon>
                                    Manage Accounts
                                </p>

                                <Link to="requests">
                                    <div className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                                                        transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
                                    >
                                                <span className="justify-center items-center flex">
                                                    <span className="justify-center items-center flex">
                                                        <span className="justify-center items-center flex">
                                                            <span className="items-center justify-center flex">
                                                                <FontAwesomeIcon className="pr-3 pl-2"
                                                                                 icon={faInfoCircle}/>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                        <span>Author Requests</span>
                                    </div>
                                </Link>

                            </div>

                            <div>
                                <p className="px-4 pt-10 pb-3 font-semibold text-xs tracking-widest text-gray-400 uppercase select-none">
                                    <FontAwesomeIcon className="pr-3" icon={faTasks}></FontAwesomeIcon>
                                    Manage Article
                                </p>

                                <Link to="addTag">
                                    <div className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                                                        transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
                                    >
                                                <span className="justify-center items-center flex">
                                                    <span className="justify-center items-center flex">
                                                        <span className="justify-center items-center flex">
                                                            <span className="items-center justify-center flex">
                                                                <FontAwesomeIcon className="pr-3 pl-2"
                                                                                 icon={faTrash}/>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                        <span>Delete Requests</span>
                                    </div>
                                </Link>

                            </div>
                            <div>
                                <p className="px-4 pt-10 pb-3 font-semibold text-xs tracking-widest text-gray-400 uppercase select-none">
                                    <FontAwesomeIcon className="pr-3" icon={faTasks}></FontAwesomeIcon>
                                    Manage Tags
                                </p>

                                <Link to="add">
                                    <div className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                                                        transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
                                    >
                                                <span className="justify-center items-center flex">
                                                    <span className="justify-center items-center flex">
                                                        <span className="justify-center items-center flex">
                                                            <span className="items-center justify-center flex">
                                                                <FontAwesomeIcon className="pr-3 pl-2"
                                                                                 icon={faPen}/>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                        <span>Add tags</span>
                                    </div>
                                </Link>

                            </div>


                        </div>

                        <div className="mb-2 pl-6 font-medium text-sm items-center rounded-lg text-gray-900 pr-4 py-2.5 flex
                                                        transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
                            /*onClick={this.logOutButtonOnClick}*/
                        >
                            <span>Log Out</span>
                            <span className="justify-center items-center flex">
                                                    <span className="justify-center items-center flex">
                                                        <span className="justify-center items-center flex">
                                                            <span className="items-center justify-center flex">
                                                                <FontAwesomeIcon className="pl-4"
                                                                                 icon={faArrowRightFromBracket}/>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>

                        </div>

                    </div>

                </div>

                <div className="h-screen lg:w-[82vw]">

                    <AdminContent></AdminContent>

                </div>

            </div>
        );
    }
}