import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {Home} from "../../pages/Home/Home";
import {Contact} from "../../pages/Contact/Contact";
import {Menu} from "../../pages/Menu/Menu";
import './mainContent.css';

export class MainContent extends Component {
    render() {
        return (
            <div className="min-h-[94vh] overflow-x-hidden no-scroll-bar">

                <Routes>
                    <Route path="/" Component={Home}></Route>
                    <Route path="/menu" Component={Menu}></Route>
                    <Route path="/contact" Component={Contact}></Route>
                </Routes>
            </div>
        );
    }
}