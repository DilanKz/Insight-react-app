import React, {Component} from "react";
import {
    faArrowLeft,
    faArrowRightFromBracket,
    faEdit,
    faInfoCircle,
    faLock,
    faTable,
    faTasks,
    faUser
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link, Navigate} from "react-router-dom";
import {DashboardComponent} from "../DashboardContainer/DashboardComponent";

interface AccountCenterStates {
    user: any;
    logOut: boolean;
}

export class AccountCenter extends Component<{}, AccountCenterStates> {

    constructor(props: {}) {
        super(props);

        let item: any = localStorage.getItem('insightUser');
        let loggedUser = JSON.parse(item);

        this.state = {
            user: loggedUser,
            logOut: false
        }
    }

    render() {
        return (
            <div className="flex overflow-hidden">
                <div className="h-screen lg:w-[18vw] pt-5 shadow-xl flex flex-col ">
                    <h1 className="text-secondary font-bold text-[2rem] pl-4">INSIGHT</h1>

                    <div className="flex-col flex justify-between h-full">
                        <div className="pt-5 mt-2">

                            <Link to="/">
                                <div className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                                                        transition-all duration-200 hover:bg-gray-200 group cursor-pointer">
                                                <span className="justify-center items-center flex">
                                                    <span className="justify-center items-center flex">
                                                        <span className="justify-center items-center flex">
                                                            <span className="items-center justify-center flex">
                                                                <FontAwesomeIcon className="pr-3" icon={faArrowLeft}/>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                    <span>Back to home</span>
                                </div>
                            </Link>


                            <div>
                                <p className="px-4 pt-10 pb-3 font-semibold text-xs tracking-widest text-gray-400 uppercase select-none">
                                    <FontAwesomeIcon className="pr-3" icon={faUser}></FontAwesomeIcon>
                                    Manage Account
                                </p>

                                <Link to="general">
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
                                        <span>General Information</span>
                                    </div>
                                </Link>

                                <Link to="privacy">
                                    <div className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                                                        transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
                                    >
                                                <span className="justify-center items-center flex">
                                                    <span className="justify-center items-center flex">
                                                        <span className="justify-center items-center flex">
                                                            <span className="items-center justify-center flex">
                                                                <FontAwesomeIcon className="pr-3 pl-2" icon={faLock}/>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                        <span>Privacy and Security</span>
                                    </div>
                                </Link>

                            </div>

                            {this.state.user !== null && this.state.user.accountType === 'author' && (
                                <div>
                                    <p className="px-4 pt-10 pb-3 font-semibold text-xs tracking-widest text-gray-400 uppercase select-none">
                                        <FontAwesomeIcon className="pr-3" icon={faTasks}></FontAwesomeIcon>
                                        Manage Article
                                    </p>

                                    <Link to="post">
                                        <div className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                                                        transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
                                        >
                                                <span className="justify-center items-center flex">
                                                    <span className="justify-center items-center flex">
                                                        <span className="justify-center items-center flex">
                                                            <span className="items-center justify-center flex">
                                                                <FontAwesomeIcon className="pr-3 pl-2"
                                                                                 icon={faEdit}/>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            <span>Post Articles</span>
                                        </div>
                                    </Link>

                                    <Link to="list">
                                        <div className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                                                        transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
                                        >
                                                <span className="justify-center items-center flex">
                                                    <span className="justify-center items-center flex">
                                                        <span className="justify-center items-center flex">
                                                            <span className="items-center justify-center flex">
                                                                <FontAwesomeIcon className="pr-3 pl-2"
                                                                                 icon={faTable}/>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            <span>Article list</span>
                                        </div>
                                    </Link>

                                </div>
                            )}


                        </div>

                        <div className="mb-2 pl-6 font-medium text-sm items-center rounded-lg text-gray-900 pr-4 py-2.5 flex
                                                        transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
                        onClick={this.logOutButtonOnClick}
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

                    {/*{
                        this.state.showGeneral && <UserGeneralInformation/>
                    }{
                        this.state.showPrivacy && <UserPrivacyInformation/>
                    }*/}

                    <DashboardComponent></DashboardComponent>

                </div>


                {
                    this.state.logOut && <Navigate to='/' replace={true}/>
                }
            </div>
        );
    }

    logOutButtonOnClick = () => {
        localStorage.removeItem('insightUser');
        this.setState({
            logOut: true
        });
    };

}