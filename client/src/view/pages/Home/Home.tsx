import React, {Component} from 'react';
import './home.css';
import {Article} from "../../common/Article/Article";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import {ArticleSkeleton} from "../../common/Article/ArticleSkeleton";

export class Home extends Component {
    private slider:any;
    private api;
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.api=axios.create({baseURL:`http://localhost:4000`})
        this.state = {
            data: [],
            article:false,
            authors:false,
        }
    }

    componentDidMount() {
        this.fetchData();
        this.slider=document.getElementById('slider');
    }

    fetchData = async () => {
        this.setState({article:false,authors:false});
        try {
            try {
                this.api.get('/articles/all')
                    .then((res: { data: any }) => {
                        const jsonData = res.data;
                        this.setState({data: jsonData,article:true});
                    }).catch((error: any)=> {
                    console.error('Axios Error:', error)
                });
            } catch (error) {
                console.log('Error fetching data: ', error)
            }
        } catch (e) {
            console.log("error");
        }
    }

    slideLeft=()=>{
        this.slider.scrollLeft = this.slider.scrollLeft - 600;
    }
    slideRight=()=>{
        this.slider.scrollLeft = this.slider.scrollLeft + 600;
    }

    render() {
        //@ts-ignore
        const {data,authors,article} = this.state;

        return (

            <div>

                <div className="bg-tertiary pb-3">
                    <div className="h-full w-screen px-10 py-2">
                        <h1 className="text-[#27374D] xl:text-[10rem] lg:text-9xl md:text-9xl
                sm:text-8xl md:pt-16 pt-16 text-7xl pl-0">
                            Read, Express, <span className="text-white">Insight</span></h1>

                        <div className="flex justify-start pt-5 flex-wrap">
                            <form className="md:w-1/2 w-full flex items-center pt-4">
                                <label htmlFor="simple-search" className="sr-only">Search</label>
                                <div className="relative w-full">
                                    <div
                                        className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">

                                    </div>
                                    <input type="text" id="simple-search"
                                           className="outline-0 py-4 text-2xl rounded-full text-[#27374D] block w-full ps-10"
                                           placeholder="Search for articles..." required/>
                                </div>

                                <button type="button" className="bg-[#27374D] w-[150px] text-xl
                    text-white py-4 ml-2 rounded-full relative left-[-100px]">
                                    <span className="inline pr-2">Search</span>
                                </button>
                            </form>
                            <p className='text-lg mt-4 md:w-1/2 w-full'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At blanditiis consequun
                                tur culpa dicta distinctio ea, eaque eius eligendi est facilis fuga illum incidunt la
                            </p>
                        </div>

                        <hr className=" mt-28"/>
                    </div>

                    {/*<div className="relative w-screen min-h-[421px] h-max overflow-x-hidden overflow-y-hidden">

                        <div className="w-full flex justify-between pt-2">
                            <div className="w-[500px]">
                                <h1 className="pl-10 text-[#27374D] font-light text-5xl">Start With Our
                                    <span className="text-black font-bold"> famous Articles</span>
                                </h1>
                            </div>

                            <div className="w-[100px]">
                                <span className="hover:underline hover:cursor-pointer">See more</span>
                            </div>
                        </div>

                        <div className="ml-5 w-[95vw] h-max overflow-x-auto overflow-y-hidden no-scroll-bar">

                            <div className="mt-[30px] h-max w-screen">
                                <div className="flex gap-x-12  h-max">

                                    {
                                        data.slice(0, 5).map((article:any)=>(
                                            <Article key={article.id}  data={article}/>
                                        ))
                                    }

                                </div>

                            </div>


                        </div>



                    </div>*/}
                    <div>
                        <div className="w-full flex justify-between pt-2">
                            <div className="w-[500px]">
                                <h1 className="pl-10 text-[#27374D] font-light text-5xl">Start With Our
                                    <span className="text-black font-bold"> famous Articles</span>
                                </h1>
                            </div>

                            <div className="w-[100px]">
                                <span className="hover:underline hover:cursor-pointer">See more</span>
                            </div>
                        </div>
                        <div className="relative flex items-center">

                            <h3 className="md:block cursor-pointer p-6 hidden sm:inline" onClick={this.slideLeft}>
                                <FontAwesomeIcon icon={faChevronLeft}/>
                            </h3>
                            <div id="slider"
                                 className="w-full h-full overflow-y-hidden overflow-x-scroll scroll whitespace-nowrap scroll-smooth no-scroll-bar">

                                {article ? (
                                    data.slice(0, 5).map((article: any) => (
                                        <div key={article._id} className="inline-block cursor-pointer">
                                            <Article key={article.id} data={article}/>
                                        </div>
                                    ))
                                ) : (
                                    Array.from({ length: 5 }).map((_, index) => (
                                        <div key={index} className="inline-block cursor-pointer">
                                            <ArticleSkeleton />
                                        </div>
                                    ))
                                )}



                            </div>

                            <h3 className="md:block cursor-pointer p-6 hidden sm:inline" onClick={this.slideRight}>
                                <FontAwesomeIcon icon={faChevronRight}/>
                            </h3>

                        </div>
                    </div>

                </div>

                <div className="h-full w-screen px-10 py-2 mb-14">
                    <div>
                        <hr className=" mt-28"/>
                        <div className="w-full flex justify-start pt-2">
                            <div className="w-[400px]">
                                <h1 className="text-[#27374D] font-light text-5xl">See Whats Our
                                    <span className="text-black font-bold"> latest Articles</span>
                                </h1>
                            </div>
                        </div>

                        <div
                            className="flex flex-wrap justify-evenly items-start transition-all ease-in-out gap-5 mt-10">


                            {article ? (
                                data.slice(0, 9).map((article: any) => (
                                    <Article key={article._id} data={article}/>
                                ))
                            ) : (
                                Array.from({ length: 9 }).map((_, index) => (
                                    <div key={index} className="inline-block cursor-pointer">
                                        <ArticleSkeleton />
                                    </div>
                                ))
                            )}

                            <div className="w-full flex justify-center">
                                <button className="bg-blue-950 text-white text-2xl px-2 py-0.5 rounded-xl">Load more
                                </button>
                            </div>

                        </div>
                    </div>

                    <div>

                        <hr className=" mt-28"/>
                        <div className="w-full flex justify-between pt-2">
                            <div className="w-[400px]">
                                <h1 className="text-[#27374D] font-light text-5xl">See who's Our
                                    <span className="text-black font-bold"> famous Authors</span>
                                </h1>
                            </div>

                            <div className="w-[100px]">
                                <span className="hover:underline hover:cursor-pointer">See more</span>
                            </div>
                        </div>

                        <div className="flex flex-wrap justify-evenly mt-10 ms-2 gap-8">

                            <div className="w-[200px] h-[250px] bg-gray-200 rounded-2xl relative transform
                            hover:translate-y-[-8px] duration-300 transition-transform ease-in-out">

                            </div>
                            <div className="w-[200px] h-[250px] bg-gray-200 rounded-2xl relative transform
                            hover:translate-y-[-8px] duration-300 transition-transform ease-in-out">

                            </div>
                            <div className="w-[200px] h-[250px] bg-gray-200 rounded-2xl relative transform
                            hover:translate-y-[-8px] duration-300 transition-transform ease-in-out">

                            </div>
                            <div className="w-[200px] h-[250px] bg-gray-200 rounded-2xl relative transform
                            hover:translate-y-[-8px] duration-300 transition-transform ease-in-out">

                            </div>

                        </div>

                    </div>

                </div>
            </div>


        )
            ;
    }
}