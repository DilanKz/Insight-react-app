import React, {Component} from "react";
import {Article} from "../../../common/Article/Article";
import moment from "moment/moment";
import axios from "axios";
import {Link} from "react-router-dom";


interface props {
    articles: [];
    famousAuthor: any;
    firstArticle: any;
}

export class ArticleContainer extends Component<props> {
    private static famousArticles: any = [];
    private static famousArticle: any = '';
    private api;

    constructor(props: props) {
        super(props);
        this.api = axios.create({baseURL: `http://localhost:4000`});

    }

    componentDidMount() {
    }

    render() {

        const {firstArticle, articles, famousAuthor} = this.props;

        return (
            <>
                <div className="w-full px-16">

                    <div className="w-full flex justify-between flex-wrap">


                        <div className="md:w-[55%] w-full h-80 bg-gray-300 object-cover bg-center rounded-xl"
                             style={{
                                 background: `url('${firstArticle.image}')`, backgroundSize: 'cover',
                             }}
                        >
                        </div>

                        <div className="md:w-[40%] w-full h-80 pl-4 pt-4 pr-8 flex flex-col justify-between">
                            <Link to="/Article" onClick={() => {
                                this.setArticleStaticValue(firstArticle);
                                window.scrollTo(0, 0);
                            }}>
                                <h2 className="font-serifDisplay text-5xl hover:underline cursor-pointer"
                                    onClick={()=>this.updateClickCount(firstArticle._id)}
                                >{firstArticle.title}</h2>
                            </Link>
                            <div className="w-full flex justify-between items-end">

                                <div className="w-20 h-20 rounded-full bg-gray-300 border-2 relative"
                                     style={{
                                         background: `url('${famousAuthor.image}')`, backgroundSize: 'cover',
                                     }}>
                                    <p className={"h-max absolute bottom-0 -right-10"}>{famousAuthor.name}</p>
                                </div>
                                <p className="w-24"></p>
                                <p className={"h-max text-[1rem]"}>{moment(firstArticle.postData, moment.ISO_8601).isValid()
                                    ? moment(firstArticle.postData).format('MMMM D, YYYY')
                                    : 'Invalid Date'}</p>

                            </div>
                        </div>

                    </div>
                    <h1 className={"text-gray-800 text-4xl my-10"}>Featured Articles</h1>
                    <div
                        className="flex md:justify-evenly justify-center w-full py-4 h-max mt-8 mb-8 flex-wrap gap-y-4">

                        {articles.slice(0, 4).map((article: any) => (
                            <Article key={article.id} data={article}/>
                        ))}

                    </div>

                </div>

            </>
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