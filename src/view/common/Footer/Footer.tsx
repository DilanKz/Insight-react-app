import {Component} from "react";
import logo from '../../../images/icon.png'
import {Link} from "react-router-dom";

export class Footer extends Component {
    render() {
        return (
            <div className="p-2 bg-gray-300 flex
                            justify-center items-center">

                <p className="text-[11px] text-gray-800
                              pr-2 pt-1 hover:text-green-400 ">
                    Copyright @ 2023</p>

                <Link to="/">
                    <div className="flex">
                        <h1 className="text-1xl text-yellow-700">Quick-bite</h1>
                    </div>
                </Link>
            </div>
        );
    }
}