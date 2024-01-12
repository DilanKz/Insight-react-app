import {Component} from "react";
import {data} from "autoprefixer";


export class Article_Viewer extends Component<{} ,{}> {

    private Article:any;

    constructor(props:{} ) {
        super(props);

        let item = localStorage.getItem('articleData');

        if (item){
            this.Article=JSON.parse(item);
        }
        console.log(item)
    }

    render() {

        return (
            <div className="pt-16">

                <h3 className="pl-10 pt-16">{this.Article.title}</h3>
                <h3 className="pl-10">{this.Article.tags}</h3>
                <h3 className="pl-10">{this.Article.body}</h3>

            </div>
        );
    }
}