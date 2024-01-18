import React, {Component} from "react";
import {Link} from "react-router-dom";

interface ArticleProps {
    data: any;
}

export class Article extends Component<ArticleProps> {

    render() {

        const {data} = this.props;

        return (
            <div className="w-[320px] h-fit pb-5 justify-center flex flex-wrap pt-6">
                <div className="w-[310px] h-[400px] rounded-2xl">

                    <div className="w-[310px] h-[400px] bg-gray-200 rounded-2xl
                                relative transform hover:translate-y-[-8px] duration-300 transition-transform ease-in-out">

                    </div>
                </div>
                <div className="w-[310px] min-h-8 flex gap-x-3 text-xs mt-1">

                    {
                        data.tags.map((tag: any) => (

                            <span key={tag} className="bg-gray-200 flex justify-center items-center p-2 h-[1.4rem]
                                    rounded-full font-light hover:cursor-pointer">
                                        {tag}
                                    </span>

                        ))
                    }

                </div>
                <div className="w-[310px] h-16 mt-3 flex flex-wrap">

                    <Link to="/Article" onClick={() => this.setArticleStaticValue(data)}>

                        <h3 className="text-2xl cursor-pointer hover:underline overflow-hidden whitespace-normal">
                            {data.title}
                        </h3>

                    </Link>
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
}