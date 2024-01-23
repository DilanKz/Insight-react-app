import {Component} from "react";
import {ArticleContainer} from "../ArticlePage/ArticleContainer/ArticleContainer";
import {PaginatedContainer} from "../ArticlePage/PaginatedContainer/PaginatedContainer";
import axios from "axios";
import {ArticleContainerSkeleton} from "../ArticlePage/ArticleContainer/ArticleContainerSkelaton";
import {ArticleSkeleton} from "../../common/Article/ArticleSkeleton";


interface states {
    dataLoaded: boolean;
    articlesLoaded: boolean;
    famousAuthor:''
}

export class Post extends Component <{}, states> {

    private static famousArticles: any = [];
    private static famousArticle: any = '';
    private static allArticles: any = '';
    private static tag: any = 'all';
    private static famousAuthor: any = '';
    private api: any;

    constructor(props: {}) {
        super(props);

        this.api = axios.create({baseURL: `http://localhost:4000`});

        this.state = {
            dataLoaded: false,
            articlesLoaded: false,
            famousAuthor:''
        }
    }

    componentDidMount() {
        this.fetchFamousArticles();
        this.fetchAllArticles();
    }

    fetchFamousArticles = async () => {
        if (Post.famousArticles.length === 0) {
            try {
                try {
                    this.api.get('/articles/famous')
                        .then((res: { data: any }) => {
                            const jsonData = res.data;
                            const firstArticle = jsonData.splice(0, 1)[0];
                            this.fetchFamousAuthor(firstArticle.author);
                            Post.famousArticles = jsonData
                            Post.famousArticle = firstArticle

                        }).catch((error: any) => {
                        console.error('Axios Error:', error)
                    });
                } catch (error) {
                    console.log('Error fetching data: ', error)
                }
            } catch (e) {
                console.log("error");
            }
        }else {
            this.setState({
                dataLoaded: true
            })
        }
    }
    fetchAllArticles = async () => {
        if (Post.allArticles.length === 0) {
            try {
                try {
                    this.api.get('/articles/all')
                        .then((res: { data: any }) => {
                            const jsonData = res.data;
                            Post.allArticles = jsonData
                            this.setState({articlesLoaded: true});
                        }).catch((error: any) => {
                        console.error('Axios Error:', error)
                    });
                } catch (error) {
                    console.log('Error fetching data: ', error)
                }
            } catch (e) {
                console.log("error");
            }
        }else {
            this.setState({articlesLoaded: true});
        }
    }

    fetchFamousAuthor=async (id:string) => {
        try {
            try {
                this.api.post('/users/getOne',{
                    _id:id
                }).then((res: { data: any }) => {
                    const jsonData = res.data;
                    Post.famousAuthor=jsonData;

                    this.setState({
                        dataLoaded: true
                    })

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
        return (
            <div className="w-screen mt-[6rem] pt-10">


                {this.state.dataLoaded ? (
                    <ArticleContainer articles={Post.famousArticles} firstArticle={Post.famousArticle}
                                      famousAuthor={Post.famousAuthor}></ArticleContainer>
                ) : (
                    <ArticleContainerSkeleton></ArticleContainerSkeleton>
                )}


                {/*<CategoryContainer></CategoryContainer>*/}
                {/*<CategoryContainerSkeleton></CategoryContainerSkeleton>*/}

                {this.state.articlesLoaded ? (
                    <PaginatedContainer articles={Post.allArticles}></PaginatedContainer>
                ) : (
                    <div className="px-16 w-full">
                        <div className={"h-6 w-1/6 rounded-md bg-gray-300 animate-pulse"}></div>
                        <div className="min-h-screen h-max flex justify-evenly flex-wrap">
                            <ArticleSkeleton></ArticleSkeleton>
                            <ArticleSkeleton></ArticleSkeleton>
                            <ArticleSkeleton></ArticleSkeleton>
                            <ArticleSkeleton></ArticleSkeleton>
                        </div>
                    </div>
                )}

            </div>
        );
    }
}