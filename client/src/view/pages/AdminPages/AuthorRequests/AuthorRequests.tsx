import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faX} from "@fortawesome/free-solid-svg-icons";
import axios, {AxiosInstance} from "axios";
import {AuthorRowSkeleton} from "./AuthorRowSkeleton";

interface RequestsStates {
    data: string[];
    authors: boolean;
}

export class AuthorRequests extends Component<{}, RequestsStates> {
    private api: AxiosInstance;

    constructor(props: {}) {
        super(props);
        this.api = axios.create({baseURL: `http://localhost:4000`})
        this.state = {
            data: [],
            authors: false,
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        this.setState({authors: false});
        try {
            try {
                this.api.post('/users/requested')
                    .then((res: { data: any }) => {
                        const jsonData = res.data;
                        this.setState({data: jsonData, authors: true});
                    }).catch((error: any) => {
                    console.error('Axios Error:', error)
                });
            } catch (error) {
                console.log('Error fetching data: ', error)
            }
        } catch (e) {
            console.log("error");
        }
    }

    render() {
        const {data} = this.state;
        return (
            <div className="w-full">

                <h2 className=" text-2xl font-bold sm:text-xl py-8 ps-3">Author requests</h2>

                <table className="w-full">
                    <thead>

                    <tr>
                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-bold text-gray-800">Name</th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-bold text-gray-800">Contact</th>
                        <th scope="col" className="relative py-3.5 pl-3 pr-4"><span className="hidden">Edit</span></th>
                    </tr>

                    </thead>

                    {
                        this.state.authors && this.state.data.length > 0 && (
                            <tbody className="">

                            {
                                data.slice(0, 5).map((user: any) => (
                                    <tr key={user._id}>
                                        <td className="whitespace-nowrap py-3 pl-4 pr-3 text-sm">
                                            <div className="flex items-center">
                                                <div className="w-11 h-11 flex-shrink-0">
                                                    <img className="h-11 rounded-full w-11"
                                                         src={user.image}
                                                         alt=""/>
                                                </div>

                                                <div className="ml-4">
                                                    <div className="text-gray-900 font-medium">{user.name}</div>
                                                    <div className="mt-1 text-gray-400">{user.email}</div>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="px-3 py-5 text-sm text-gray-800">
                                            <div className="text-gray-800">{user.contact}</div>
                                        </td>

                                        <td className="px-3 py-5 text-sm text-gray-800">

                                            <button
                                                className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20"
                                                type="button"
                                                onClick={() => this.acceptRequest(user.email, "author")}
                                            >
                                                <FontAwesomeIcon className="cursor-pointer text-green-700"
                                                                 icon={faCheck}></FontAwesomeIcon>
                                            </button>
                                            <button
                                                className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20"
                                                type="button"
                                                onClick={() => this.acceptRequest(user.email, "rejected")}
                                            >
                                                <FontAwesomeIcon className="cursor-pointer text-red-700"
                                                                 icon={faX}></FontAwesomeIcon>
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        )
                    }

                    {
                        !this.state.authors && (
                            <tbody>
                                <AuthorRowSkeleton></AuthorRowSkeleton>
                            </tbody>
                        )
                    }

                </table>

                {
                    this.state.authors && this.state.data.length === 0 && (
                        <div className="w-full h-96 text-xl text-center flex justify-center items-center">
                            No content to show
                        </div>
                    )
                }


            </div>
        );
    }

    acceptRequest = (email: string, type: string) => {
        try {
            this.api.post('users/swap', {
                email: email,
                type: type
            }).then((res: { data: any }) => {
                const jsonData = res.data;
                if (jsonData) {
                    localStorage.setItem('insightUser', JSON.stringify(jsonData));
                    this.fetchData();
                } else {
                    alert("You dont have an account")
                }
            });
        } catch (e) {

        }
    }
}