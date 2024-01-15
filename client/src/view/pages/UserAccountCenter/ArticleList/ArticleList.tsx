import {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faTrashAlt, faX} from "@fortawesome/free-solid-svg-icons";

export class ArticleList extends Component {
    render() {
        return (
            <div>
                <table className="w-full">
                    <thead>

                    <tr>
                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-bold text-gray-800">Name</th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-bold text-gray-800">Contact</th>
                        <th scope="col" className="relative py-3.5 pl-3 pr-4"><span className="hidden">Edit</span></th>
                    </tr>

                    </thead>
                    <tbody className="">
                    <tr>
                        <td className="whitespace-nowrap py-3 pl-4 pr-3 text-sm">
                            <div className="flex items-center">
                                <div className="w-11 h-11 flex-shrink-0">
                                    <img className="h-11 rounded-full w-11"
                                         src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                         alt=""/>
                                </div>

                                <div className="ml-4">
                                    <div className="text-gray-900 font-medium">Tharindu Dilan</div>
                                    <div className="mt-1 text-gray-400">Dilanmallawarachchi@gmail.com</div>
                                </div>
                            </div>
                        </td>

                        <td className="px-3 py-5 text-sm text-gray-800">
                            <div className="text-gray-800">07X XXXX XXX</div>
                        </td>

                        <td className="px-3 py-5 text-sm text-gray-800">
                            <FontAwesomeIcon className="pr-5 cursor-pointer text-green-700" icon={faCheck}></FontAwesomeIcon>
                            <FontAwesomeIcon className="pl-4 cursor-pointer text-red-700" icon={faX}></FontAwesomeIcon>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}