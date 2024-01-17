import React, {Component} from "react";
import img from '../../../../images/selectImage.jpg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExclamationTriangle, faPen, faRotateRight, faSpinner, faTrash} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import moment from 'moment';

interface ArticleListStates {
    user: any;
    data: [],
    loader: boolean;
}

export class ArticleList extends Component<{}, ArticleListStates> {
    private api: any;

    constructor(props: {}) {
        super(props);

        this.api = axios.create({baseURL: `http://localhost:4000`});

        let item: any = localStorage.getItem('insightUser');
        let loggedUser = JSON.parse(item);

        this.state = {
            user: loggedUser,
            data: [],
            loader: true
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {

        this.setState({
            loader:true
        });

        try {
            try {
                this.api.post('articles/from', {
                    id: this.state.user._id
                })
                    .then((res: { data: any }) => {
                        const jsonData = res.data;
                        this.setState({
                            data: jsonData,
                            loader: false
                        });
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

        let {data} = this.state;

        return (
            <div className="h-full w-full relative">

                {/*<table classNameNameName="w-full">
                    <thead>

                    <tr>
                        <th scope="col" classNameNameName="py-3.5 pl-4 pr-3 text-left text-sm font-bold text-gray-800">Name</th>
                        <th scope="col" classNameNameName="px-3 py-3.5 text-left text-sm font-bold text-gray-800">Contact</th>
                        <th scope="col" classNameNameName="relative py-3.5 pl-3 pr-4"><span classNameNameName="hidden">Edit</span></th>
                    </tr>

                    </thead>
                    <tbody classNameNameName="">
                    <tr>
                        <td classNameNameName="whitespace-nowrap py-3 pl-4 pr-3 text-sm">
                            <div classNameNameName="flex items-center">
                                <div classNameNameName="w-11 h-11 flex-shrink-0">
                                    <img classNameNameName="h-11 rounded-full w-11"
                                         src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                         alt=""/>
                                </div>

                                <div classNameNameName="ml-4">
                                    <div classNameNameName="text-gray-900 font-medium">Tharindu Dilan</div>
                                    <div classNameNameName="mt-1 text-gray-400">Dilanmallawarachchi@gmail.com</div>
                                </div>
                            </div>
                        </td>

                        <td classNameNameName="px-3 py-5 text-sm text-gray-800">
                            <div classNameNameName="text-gray-800">07X XXXX XXX</div>
                        </td>

                        <td classNameNameName="px-3 py-5 text-sm text-gray-800">
                            <FontAwesomeIcon classNameNameName="pr-5 cursor-pointer text-green-700" icon={faCheck}></FontAwesomeIcon>
                            <FontAwesomeIcon classNameNameName="pl-4 cursor-pointer text-red-700" icon={faX}></FontAwesomeIcon>
                        </td>
                    </tr>
                    </tbody>
                </table>*/}

                <div className="w-full flex justify-between items-end">
                    <h2 className="text-2xl font-bold sm:text-xl pt-8 ps-3 w-max">Posted Articles</h2>

                    {
                    !this.state.loader && (
                    <button
                        className="mr-4 relative text-xl align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20"
                        type="button"
                        onClick={this.fetchData}
                    >
                        <FontAwesomeIcon
                            className=" cursor-pointer text-gray-800"
                            icon={faRotateRight}
                        ></FontAwesomeIcon>
                    </button>
                    )
                }
                </div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg h-full no-scroll-bar">
                    <div className="p-6 overflow-x-hidden overflow-y-scroll no-scroll-bar px-0">
                        <table className="w-full min-w-max table-auto text-left">
                            <thead>
                            <tr>
                                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                    <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Image</p>
                                </th>
                                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                    <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Title</p>
                                </th>
                                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                    <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Date</p>
                                </th>
                                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                    <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">views</p>
                                </th>
                                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                    <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70"></p>
                                </th>
                            </tr>
                            </thead>

                            <tbody className="">

                            {data.map((article: any) => (


                                <tr className={'my-2'} key={article._id}>
                                    <td className="p-4 border-b border-blue-gray-50">
                                        <div className="flex items-center gap-3">
                                            <img src={article.image}
                                                 className="inline-block relative object-center  w-12 h-12 rounded-lg border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"/>
                                        </div>
                                    </td>

                                    <td className="p-4 border-b border-blue-gray-50">
                                        <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                                            {article.title}</p>
                                    </td>

                                    <td className="p-4 border-b border-blue-gray-50">
                                        <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                                            {moment(article.postData, moment.ISO_8601).isValid()
                                                ? moment(article.postData).format('MMMM D, YYYY [at] h:mm A')
                                                : 'Invalid Date'}
                                        </p>
                                    </td>

                                    <td className="p-4 border-b border-blue-gray-50">
                                        {/*<div className="w-max">
                                            <div
                                                className="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-green-500/20 text-green-900 py-1 px-2 text-xs rounded-md">
                                                <span className="">paid</span>
                                            </div>
                                        </div>*/}
                                        {article.clicks}
                                    </td>

                                    <td className="p-4 border-b border-blue-gray-50">
                                        {moment(article.postData, moment.ISO_8601).isValid() && (
                                            <>
                                                {moment().diff(moment(article.postData), 'hours') < 5 ? (
                                                    <>
                                                        {/*<button
                                                            className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20"
                                                            type="button">
                                                            <FontAwesomeIcon
                                                                className="cursor-pointer text-green-700"
                                                                icon={faPen}
                                                            ></FontAwesomeIcon>
                                                        </button>*/}

                                                        <button
                                                            className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20"
                                                            type="button">
                                                            <FontAwesomeIcon
                                                                className=" cursor-pointer text-red-700"
                                                                icon={faTrash}
                                                            ></FontAwesomeIcon>
                                                        </button>
                                                    </>
                                                ) : (
                                                    <button
                                                        className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20"
                                                        type="button">
                                                        <FontAwesomeIcon
                                                            className="cursor-pointer text-yellow-500"
                                                            icon={faExclamationTriangle}
                                                        ></FontAwesomeIcon>
                                                    </button>
                                                )}
                                            </>
                                        )}
                                    </td>

                                </tr>
                            ))}

                            </tbody>
                        </table>
                    </div>
                    {
                        this.state.loader && (
                            <div className="absolute w-full h-full bg-gray-50 opacity-70 top-0 left-0">
                                <FontAwesomeIcon className="text-2xl absolute top-0 bottom-0 left-0 right-0 m-auto"
                                                 icon={faSpinner} spin/>
                            </div>
                        )
                    }
                </div>

            </div>
        );
    }
}