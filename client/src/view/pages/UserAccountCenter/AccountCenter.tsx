import {Component} from "react";
import {faArrowRightFromBracket, faHouse, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export class AccountCenter extends Component {

    render() {
        return (
            <>
                <div className="h-screen w-1/6 pt-5 shadow-xl flex flex-col">
                    <h1 className="text-secondary font-bold text-[2rem] pl-4">INSIGHT</h1>

                    <div className=" flex-col flex justify-between h-full pl-4">
                        <ul className="pt-5 mt-2">

                            <li>
                                <FontAwesomeIcon icon={faHouse} />
                                Home
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faUser} />
                                Account
                            </li>

                        </ul>

                        <h3 className="pb-3">
                            Log Out
                            <FontAwesomeIcon icon={faArrowRightFromBracket} />
                        </h3>
                    </div>

                </div>
            </>
        );
    }

}