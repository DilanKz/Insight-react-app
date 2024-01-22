import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {AdminDashboard} from "../AdminDashboard/AdminDashboard";
import {AuthorRequests} from "../AuthorRequests/AuthorRequests";
import {ArticleRequests} from "../ArticleRequests/ArticleRequests";
import {TagManager} from "../TagManager/TagManager";

export class AdminContent extends Component {
    render() {
        return (
            <div className="w-full h-screen">
                <Routes>

                    <Route Component={AdminDashboard} path="dashboard"></Route>
                    <Route Component={AuthorRequests} path="requests"></Route>
                    <Route Component={ArticleRequests} path="delete"></Route>
                    {/*<Route Component={TagManager} path="add"></Route>*/}

                </Routes>
            </div>
        );
    }
}