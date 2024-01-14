import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {UserGeneralInformation} from "../GeneralInformation/UserGeneralInformation";
import {UserPrivacyInformation} from "../PrivacyInformation/UserPrivacyInformation";

export class DashboardComponent extends Component {
    render() {
        return (
            <>

                <Routes>

                    <Route path="general" Component={UserGeneralInformation}></Route>
                    <Route path="privacy" Component={UserPrivacyInformation}></Route>

                </Routes>

            </>
        );
    }
}