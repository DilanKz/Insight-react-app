import React, {Component} from "react";
import axios from "axios";
import {Article} from "../../../common/Article/Article";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft,faChevronRight} from "@fortawesome/free-solid-svg-icons";

interface Props {
    articles:[]
}

export class PaginatedContainer extends Component<Props> {

    constructor(props: Props) {
        super(props);
        this.state = {
            pageSize: 4,
            currentPage: 1,
        };
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

    render() {
        //@ts-ignore
        const {pageSize, currentPage} = this.state;
        const {articles}=this.props;
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        const paginatedArticles = articles.slice(startIndex, endIndex);

        const totalPages = Math.ceil(articles.length / pageSize);

        return (
            <div className="px-16 w-full">
                <h1 className={"text-gray-800 text-4xl my-10"}>Articles</h1>
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
}
