import React, {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

interface ArticleProps {
    data: any;
}

export class Article extends Component<ArticleProps> {

    private api: any;

    constructor(props: ArticleProps) {
        super(props);

        this.api = axios.create({baseURL: `http://localhost:4000`});
    }

    render() {

        const {data} = this.props;

        return (
            <div className="w-[320px] h-fit pb-5 justify-center flex flex-wrap pt-6">
                <div className="w-[310px] h-[400px] rounded-2xl">

                    <div className="w-[310px] h-[400px] bg-gray-200 rounded-2xl
                                relative transform hover:translate-y-[-8px] duration-300 transition-transform ease-in-out"
                         style={{
                             background: `url('${data.image}')`, backgroundSize: 'cover',
                             backgroundPosition: 'center',
                         }}
                    >

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

                    <Link to="/Article" onClick={() => {
                        this.setArticleStaticValue(data);
                        window.scrollTo(0, 0);
                    }}>

                        <h3 className="text-2xl cursor-pointer hover:underline overflow-hidden whitespace-normal"
                            onClick={()=>this.updateClickCount(data._id)}
                        >
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