import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {Home} from "../../pages/Home/Home";
import {Post} from "../../pages/Contact/Post";
import {Menu} from "../../pages/Menu/Menu";
import {Article_Viewer} from "../../pages/Article_Viewer/Article_Viewer";
import './mainContent.css';

export class MainContent extends Component {
    render() {
        return (
            <div className="min-h-[94vh] overflow-x-hidden no-scroll-bar">
                <Routes>
                    <Route path="/*" Component={Home}></Route>
                    <Route path="/menu" Component={Menu}></Route>
                    <Route path="/blog" Component={Post}></Route>

                    <Route path="/Article" Component={Article_Viewer}></Route>


                </Routes>
            </div>
        );
    }
}