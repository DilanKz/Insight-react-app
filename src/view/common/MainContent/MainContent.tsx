import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {Home} from "../../pages/Home/Home";
import {Contact} from "../../pages/Contact/Contact";
import {Menu} from "../../pages/Menu/Menu";

export class MainContent extends Component {
    render() {
        return (
            <div className="min-h-[94vh] flex items-center justify-center
             mx-auto bg-white overflow-x-hidden">

                <Routes>
                    <Route path="/" Component={Home}></Route>
                    <Route path="/menu" Component={Menu}></Route>
                    <Route path="/contact" Component={Contact}></Route>
                </Routes>
            </div>
        );
    }
}