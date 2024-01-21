import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {AdminDashboard} from "../AdminDashboard/AdminDashboard";
import {AuthorRequests} from "../AuthorRequests/AuthorRequests";
import {ArticleRequests} from "../ArticleRequests";

export class AdminContent extends Component {
    render() {
        return (
            <div className="w-full">
                <Routes>

                    <Route Component={AdminDashboard} path="dashboard"></Route>
                    <Route Component={AuthorRequests} path="requests"></Route>
                    <Route Component={ArticleRequests} path="delete"></Route>
                    <Route Component={AdminDashboard} path="add"></Route>

                </Routes>
            </div>
        );
    }
}