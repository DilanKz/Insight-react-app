import React, {Component} from "react";
import {
    faArrowLeft,
    faArrowRightFromBracket,
    faEdit,
    faInfoCircle,
    faLock,
    faPencilAlt,
    faTasks,
    faTrashAlt,
    faUser
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Navigate} from "react-router-dom";
import {UserGeneralInformation} from '../GeneralInformation/UserGeneralInformation';
import {UserPrivacyInformation} from "../PrivacyInformation/UserPrivacyInformation";

interface AccountCenterStates {
    user:any;
    showHome:boolean;
    showGeneral:boolean;
    showPrivacy:boolean;
    showAddArticle:boolean;
    showDeleteArticle:boolean;
    showUpdateArticle:boolean;
    logOut:boolean;
}

export class AccountCenter extends Component<{},AccountCenterStates> {

    constructor(props:{}) {
        super(props);

        let item:any = localStorage.getItem('insightUser');
        let loggedUser = JSON.parse(item);

        this.state = {
            user:loggedUser,
            showHome:false,
            showGeneral:true,
            showPrivacy:false,
            showAddArticle:false,
            showDeleteArticle:false,
            showUpdateArticle:false,
            logOut:false
        }
    }

    render() {
        return (
            <div className="flex">
                <div className="h-screen lg:w-[18vw] pt-5 shadow-xl flex flex-col ">
                    <h1 className="text-secondary font-bold text-[2rem] pl-4">INSIGHT</h1>

                    <div className="flex-col flex justify-between h-full">
                        <div className="pt-5 mt-2">

                            <div className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                                                        transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
                                 onClick={() => this.toggleBoolean('showHome')}
                            >
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


                            <div>
                                <p className="px-4 pt-10 pb-3 font-semibold text-xs tracking-widest text-gray-400 uppercase select-none">
                                    <FontAwesomeIcon className="pr-3" icon={faUser}></FontAwesomeIcon>
                                    Manage Account
                                </p>

                                <div className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                                                        transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
                                     onClick={() => this.toggleBoolean('showGeneral')}
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

                                <div className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                                                        transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
                                     onClick={() => this.toggleBoolean('showPrivacy')}
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

                            </div>

                            {this.state.user !== null && {/*this.state.user.accountType === 'author'*/} && (
                                <div>
                                    <p className="px-4 pt-10 pb-3 font-semibold text-xs tracking-widest text-gray-400 uppercase select-none">
                                        <FontAwesomeIcon className="pr-3" icon={faTasks}></FontAwesomeIcon>
                                        Manage Article
                                    </p>

                                    <div className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                                                        transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
                                         onClick={() => this.toggleBoolean('showAddArticle')}
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

                                    <div className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                                                        transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
                                         onClick={() => this.toggleBoolean('showUpdateArticle')}
                                    >
                                                <span className="justify-center items-center flex">
                                                    <span className="justify-center items-center flex">
                                                        <span className="justify-center items-center flex">
                                                            <span className="items-center justify-center flex">
                                                                <FontAwesomeIcon className="pr-3 pl-2"
                                                                                 icon={faPencilAlt}/>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                        <span>Update Articles</span>
                                    </div>

                                    <div className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                                                        transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
                                         onClick={() => this.toggleBoolean('showDeleteArticle')}
                                    >
                                                <span className="justify-center items-center flex">
                                                    <span className="justify-center items-center flex">
                                                        <span className="justify-center items-center flex">
                                                            <span className="items-center justify-center flex">
                                                                <FontAwesomeIcon className="pr-3 pl-2"
                                                                                 icon={faTrashAlt}/>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                        <span>Delete Articles</span>
                                    </div>

                                </div>
                            )}


                        </div>


                        <div className="mb-2 pl-6 font-medium text-sm items-center rounded-lg text-gray-900 pr-4 py-2.5 flex
                                                        transition-all duration-200 hover:bg-gray-200 group cursor-pointer"

                             onClick={() => this.toggleBoolean('logOut')}
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

                    <UserGeneralInformation/>
                    <UserPrivacyInformation/>

                </div>


                {
                    this.state.logOut && <Navigate to='/' replace={true}/>
                }
                {
                    this.state.showHome && <Navigate to='/' replace={true}/>
                }
            </div>
        );
    }

    toggleBoolean = (key: keyof AccountCenterStates) => {

        this.setState(
            {
                showHome: false,
                showGeneral: false,
                showPrivacy: false,
                showAddArticle: false,
                showDeleteArticle: false,
                showUpdateArticle: false,
                logOut: false
            }
        );

        this.setState((prevState) => ({
            ...prevState,
            [key]: !prevState[key],
        }));
    };

}