import React, {Component} from "react";
import "./Viewer.css"

export class Article_Viewer extends Component<{}, {}> {

    private Article: any;

    constructor(props: {}) {
        super(props);

        let item = localStorage.getItem('articleData');

        if (item) {
            this.Article = JSON.parse(item);
        }
        console.log(item)
    }

    render() {

        return (
            <div className="pt-28 px-16">

                <div className="flex flex-wrap mb-6">

                    <div className="pr-4 md:w-[65%] w-[90%]">
                        <h3 className="xl:text-9xl lg:text-7xl md:text-6xl text-4xl font-serifDisplay">{this.Article.title}</h3>

                        <div className="p-2 pl-0 flex md:gap-4 gap-1 flex-wrap ">
                            {
                                this.Article.tags.map((tag: any) => (

                                    <span key={tag} className="bg-gray-200 flex justify-center items-center p-2 py-0.5
                                    md:text-xl text-sm rounded-full font-light hover:cursor-pointer">
                                        {tag}
                                    </span>

                                ))
                            }
                        </div>
                    </div>

                    <div className="md:w-[30%] w-[35rem] h-[40rem] rounded-2xl">

                        <div className="md:w-full h-full bg-gray-200 rounded-2xl relative transform"
                             style={{ background: `url('${this.Article.image}')`,backgroundSize: 'cover',
                                 backgroundPosition: 'center', }}
                        >

                        </div>
                    </div>

                </div>

                <div
                    dangerouslySetInnerHTML={{__html: this.Article.body}}
                    className="prose custom-content text-2xl mb-16"
                ></div>


            </div>
        );
    }
}