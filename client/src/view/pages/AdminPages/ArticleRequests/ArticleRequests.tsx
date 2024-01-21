import React, {Component} from "react";
import {RowSkeleton} from "../../UserAccountCenter/ArticleList/RowSkeleton";
import img from "../../../../images/selectImage.jpg";
import moment from "moment/moment";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRotateRight, faTrash} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import {Link} from "react-router-dom";

interface ArticleListStates {
    data: [],
    loader: boolean;
}

export class ArticleRequests extends Component<{}, ArticleListStates> {
    private api: any;

    constructor(props: {}) {
        super(props);

        this.api = axios.create({baseURL: `http://localhost:4000`});

        this.state = {
            data: [],
            loader: true
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {

        this.setState({
            loader: true
        });

        try {
            try {
                this.api.get('articles/requested')
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

                <div className="w-full flex justify-between items-end">
                    <h2 className="text-2xl font-bold sm:text-xl pt-8 ps-3 w-max">Article Delete Requests</h2>

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
                <div className="relative overflow-x-auto sm:rounded-lg h-full no-scroll-bar">
                    <div className="p-6 overflow-x-hidden overflow-y-scroll no-scroll-bar px-0">
                        <table className="w-full min-w-max table-auto text-left">
                            <thead>
                            <tr>
                                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 w-24">
                                    <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Image</p>
                                </th>
                                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 w-[48%] ">
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


                            {
                                this.state.loader ? (
                                    <tbody>

                                    <RowSkeleton></RowSkeleton>
                                    <RowSkeleton></RowSkeleton>
                                    <RowSkeleton></RowSkeleton>
                                    <RowSkeleton></RowSkeleton>
                                    <RowSkeleton></RowSkeleton>
                                    <RowSkeleton></RowSkeleton>
                                    <RowSkeleton></RowSkeleton>

                                    </tbody>
                                ) : (
                                    <tbody className="">

                                    {data.map((article: any) => (


                                        <tr className={`my-2 ${article.availability === 'requested' ? 'bg-yellow-50' : ''}`}
                                            key={article._id}>
                                            <td className="p-4 border-b border-blue-gray-50">
                                                <div className="flex items-center gap-3">
                                                    <img src={article.image}
                                                         className="inline-block relative object-center  w-12 h-12 rounded-lg border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"/>
                                                </div>
                                            </td>

                                            <td className="p-4 border-b border-blue-gray-50">
                                                <Link to="/Article" onClick={() => {
                                                    this.setArticleStaticValue(data);
                                                    window.scrollTo(0, 0);
                                                }}>
                                                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                                                        {article.title}</p>
                                                </Link>
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
                                                <button
                                                    className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20"
                                                    type="button"
                                                    onClick={() => this.deleteArticle(article._id)}
                                                >
                                                    <FontAwesomeIcon
                                                        className=" cursor-pointer text-red-700"
                                                        icon={faTrash}
                                                    ></FontAwesomeIcon>
                                                </button>
                                            </td>

                                        </tr>
                                    ))}

                                    </tbody>
                                )
                            }

                        </table>
                    </div>
                </div>
            </div>
        );
    }

    deleteArticle = (id: string) => {
        try {
            this.api.delete(`articles/remove/${id}`)
                .then((res: { data: any }) => {
                    console.log('Delete request has been sent to an admin');
                    this.fetchData();
                })
                .catch((error: any) => {
                    console.error('Error:', error);
                });
        } catch (error) {
            console.log('Error fetching data: ', error);
        }
    };

    private setArticleStaticValue(data: any) {
        //Get the current article and store it in browser local storage
        const jsonData = JSON.stringify(data);
        localStorage.setItem('articleData', jsonData);
        console.log(JSON.parse(jsonData));
    }
}