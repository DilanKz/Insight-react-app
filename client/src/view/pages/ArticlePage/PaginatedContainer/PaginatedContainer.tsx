import React, {Component} from "react";
import axios from "axios";
import {Article} from "../../../common/Article/Article";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft,faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

interface Props {
    articles:[]
}

interface States {
    pageSize: number,
    currentPage: number,
    search: boolean,
    searchText: string,
}

export class PaginatedContainer extends Component<Props,States> {
    private api;

    constructor(props: Props) {
        super(props);
        this.api = axios.create({baseURL: `http://localhost:4000`});
        this.state = {
            pageSize: 4,
            currentPage: 1,
            search: false,
            searchText: '',
        };
        this.handleSearchInputOnChange = this.handleSearchInputOnChange.bind(this);
    }

    componentDidMount() {
        this.updatePageSize();
        console.log(this.props.articles)
        window.addEventListener("resize", this.updatePageSize);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updatePageSize);
    }

    updatePageSize = () => {
        const windowWidth = window.innerWidth;

        if (windowWidth < 640) {
            this.setState({pageSize: 4});
        } else if (windowWidth < 1024) {
            this.setState({pageSize: 8});
        } else {
            this.setState({pageSize: 12});
        }
    };

    handlePageChange = (newPage: number) => {
        this.setState({currentPage: newPage});
    };


    openSearch = () => {
        this.setState({
            search: true
        });
    }

    closeSearch = () => {
        this.setState({
            search: false
        });
    }

    handleSearchInputOnChange(event: { target: { value: any; name: any; } }) {
        const target = event.target;
        const value = target.value;

        this.setState({
            searchText: value
        });
    }

    render() {
        //@ts-ignore
        const {pageSize, currentPage,search,searchText} = this.state;
        const {articles}=this.props;
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        const paginatedArticles = articles.slice(startIndex, endIndex);

        const totalPages = Math.ceil(articles.length / pageSize);

        const filteredArticles = searchText.trim() === '' ? [] : articles.filter((article: any) =>
            article.title.toLowerCase().includes(searchText.toLowerCase())
        );

        return (
            <div className="px-16 w-full">
                <div className={"w-screen flex justify-between"}>
                    <h1 className={"text-gray-800 text-4xl my-10"}>Articles</h1>

                    <form className="md:w-1/3 w-full flex items-center pt-4">
                        <label htmlFor="simple-search" className="sr-only">Search</label>
                        <div className=" w-full">
                            <input
                                type="text"
                                id="simple-search"
                                className={`outline-0 ring-2 ring-tertiary py-4 text-xl rounded-md text-[#27374D] block w-10/12 ps-10 
                                        ${search ? 'fixed top-20 ring-0 left-0 right-0 m-auto w-2/5 z-[65] drop-shadow-md' : ''}`}
                                placeholder="Search for articles..."
                                value={this.state.searchText} required
                                onClick={this.openSearch}
                                onChange={this.handleSearchInputOnChange}
                            />

                        </div>

                        {search && (
                            <div className={"w-screen h-screen backdrop-blur-md fixed top-0 left-0 z-[60]"}
                                 onClick={this.closeSearch}
                            >

                            </div>
                        )}

                        {search && (
                            <div
                                className={`max-h-80 overflow-y-scroll fixed top-[9.2rem] left-0 right-0 m-auto rounded-md z-[70] bg-white ${filteredArticles.length > 0 ? 'p-4' : 'p-0'} w-2/5`}>

                                {filteredArticles.map((article: any) => (
                                    <div key={article._id}>
                                        <Link to="/Article" onClick={() => {
                                            this.setArticleStaticValue(article);
                                            window.scrollTo(0, 0);
                                        }}>
                                            <p className={"hover:border-gray-800 hover:text-gray-800 text-gray-600  " +
                                                "cursor-pointer text-xl py-4 border-b "}
                                               onClick={() => this.updateClickCount(article._id)}
                                            >{article.title}</p>

                                        </Link>
                                    </div>
                                ))}
                            </div>
                        )}
                    </form>
                </div>
                <div className="">

                    <div className="min-h-screen h-max flex justify-evenly flex-wrap">
                        {paginatedArticles.map((article: any) => (
                            <div key={article._id} className="inline-block cursor-pointer">
                                <Article key={article.id} data={article}/>
                            </div>
                        ))}
                    </div>

                    <div className="mb-4 flex justify-center space-x-4" aria-label="Pagination">
                        <div
                            className={`rounded-lg border border-primary px-2 py-2 text-gray-700 ${
                                currentPage === 1 ? 'opacity-50' : ''
                            }`}
                            onClick={() => {
                                if (currentPage > 1) {
                                    this.handlePageChange(currentPage - 1);
                                }
                            }}
                        >
                            <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
                            <span className="sr-only">Previous</span>
                        </div>

                        {Array.from({length: totalPages}).map((_, index) => (
                            <div
                                key={index + 1}
                                className={`rounded-lg border border-secondary px-4 py-2 text-gray-700 ${
                                    currentPage === index + 1 ? "bg-primary text-white" : ""
                                }`}
                                onClick={() => this.handlePageChange(index + 1)}
                            >
                                {index + 1}
                            </div>
                        ))}

                        <div
                            className={`rounded-lg border border-primary px-2 py-2 text-gray-700 ${
                                currentPage === totalPages ? 'opacity-50' : ''
                            }`}
                            onClick={() => {
                                if (currentPage < totalPages) {
                                    this.handlePageChange(currentPage + 1);
                                }
                            }}
                        >
                            <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                            <span className="sr-only">Next</span>
                        </div>
                    </div>


                </div>

            </div>
        );
    }

    private setArticleStaticValue(data: any) {
        //Get the current article and store it in browser local storage
        const jsonData = JSON.stringify(data);
        localStorage.setItem('articleData', jsonData);
        console.log(JSON.parse(jsonData));
    }

    private updateClickCount(id: string) {
        try {
            this.api.put(`articles/clicked/${id}`)
                .then((res: { data: any }) => {

                    console.log('delete request has been sent to an admin')
                }).catch((error: any) => {
                console.error('Error:', error);
            });
        } catch (error) {
            console.log('Error fetching data: ', error)
        }
    }
}
