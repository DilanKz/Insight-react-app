import React, {Component} from "react";
import {Navbar} from "../Navbar/Navbar";
import {MainContent} from "../MainContent/MainContent";
import {Footer} from "../Footer/Footer";
import {Navigate} from "react-router-dom";

export class DefaultLayout extends Component {

    constructor(props:{}) {
        super(props);

        let item:any = localStorage.getItem('insightUser');
        let loggedUser = JSON.parse(item);

        this.state = {
            user:loggedUser
        }

    }


    render() {
        //@ts-ignore
        const {user}= this.state;

        if (user !=null && user.accountType === 'admin') {
            return <Navigate to='/admin/dashboard' replace={true}/>;
        }

        return (
            <>
                <Navbar/>
                <MainContent/>
                <Footer/>
            </>
        );
    }
}