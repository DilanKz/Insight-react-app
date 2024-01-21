import {Component} from "react";
import {ArticleContainer} from "../ArticlePage/ArticleContainer/ArticleContainer";
import {ArticleContainerSkeleton} from "../ArticlePage/ArticleContainer/ArticleContainerSkelaton";
import {CategoryContainer} from "../ArticlePage/Category/CategoryContainer";
import {CategoryContainerSkeleton} from "../ArticlePage/Category/CategoryContainerSkeleton";
import {ArticleSkeleton} from "../../common/Article/ArticleSkeleton";
import {PaginatedContainer} from "../ArticlePage/PaginatedContainer/PaginatedContainer";

export class Post extends Component {
    render() {
        return (
            <div className="w-screen mt-[6rem] pt-10">

                <ArticleContainer></ArticleContainer>
                <CategoryContainer></CategoryContainer>
                <PaginatedContainer></PaginatedContainer>

                {/*<ArticleContainerSkeleton></ArticleContainerSkeleton>
                <CategoryContainerSkeleton></CategoryContainerSkeleton>

                <ArticleSkeleton></ArticleSkeleton>*/}

            </div>
        );
    }
}