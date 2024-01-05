import React, {Component} from "react";
import {Link} from "react-router-dom";
import bgImage from "../../../images/bg.jpg"
import axios from "axios";

interface LoginStates {
    isPwClicked: boolean;
    loginMail: string;
    loginPass: string;
    forgotMail: string
    forgotOTP: string;
    newPass: string;
}

export class Login extends Component<{}, LoginStates> {

    private api: any;

    constructor(props: {}) {
        super(props);
        this.api = axios.create({baseURL: `http://localhost:4000`});
        this.state = {
            isPwClicked: true,
            loginMail: "",
            loginPass: "",
            forgotMail: "",
            forgotOTP: "",
            newPass: "",
        }
        this.handleMessageInputOnChange = this.handleMessageInputOnChange.bind(this);
    }

    // Updating state to toggle isPwClicked
    togglePwClicked = () => {
        this.setState({
            isPwClicked: !this.state.isPwClicked
        });

        console.log(this.state.isPwClicked);
    };

    render() {

        const {isPwClicked} = this.state

        return (
            <div className="relative">
                <div className="flex h-screen w-screen">
                    <div className="flex flex-1 flex-col justify-center py-12 px-8
                lg:w-[40vw] md:w-[50vw] w-screen">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <h3 className="mx-auto h-10 w-auto">Insight</h3>
                            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                Sign in to your account
                            </h2>
                        </div>

                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="email"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        Email address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 outline-0 focus:ring-inset pl-4 sm:text-sm sm:leading-6"
                                            id="email"
                                            name="loginMail"
                                            type="email"
                                            required
                                            value={this.state.loginMail}
                                            onChange={this.handleMessageInputOnChange}/>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="password"
                                               className="block text-sm font-medium leading-6 text-gray-900">
                                            Password
                                        </label>
                                        <div className="text-sm">
                                            <p className="active:underline font-semibold text-indigo-600 hover:text-indigo-500"
                                               onClick={this.togglePwClicked}>
                                                Forgot password?
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <input
                                            className="block w-full rounded-md border-0 py-1.5 outline-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset pl-4 sm:text-sm sm:leading-6"
                                            id="password"
                                            name="loginPass"
                                            type="password"
                                            required
                                            value={this.state.loginPass}
                                            onChange={this.handleMessageInputOnChange}/>
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="button"
                                        className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        onClick={this.onLoginBtnClick}>
                                        Sign in
                                    </button>
                                </div>
                            </form>

                            <p className="mt-4 text-center text-sm text-gray-500 pb-3">
                                Not a member?{' '}
                                <Link className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                                      to="/sign-up">
                                    Sign in
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div className="h-full lg:w-[60vw] md:w-[50vw] w-[0vw] bg-tertiary">
                        <img src={bgImage} className="w-full h-full object-cover" alt=""/>
                    </div>
                </div>

                <div className={`w-screen h-screen fixed top-0 left-0 justify-center items-center 
                ${isPwClicked ? "hidden" : "flex"}`}>

                    <div className=" backdrop-blur-sm w-full h-full absolute" onClick={this.togglePwClicked}></div>

                    <div className="w-2/5 h-2/3 bg-white rounded-2xl shadow-2xl px-8 z-10">
                        <h2 className="mt-10 mb-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Reset Password
                        </h2>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        className="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm outline-0 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-inset  sm:text-sm sm:leading-6"
                                        id="txtEmail" name="forgotMail"
                                        type="email" required
                                        value={this.state.forgotMail}
                                        onChange={this.handleMessageInputOnChange}/>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        OTP
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        className="pl-4 block w-full outline-0 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-inset  sm:text-sm sm:leading-6"
                                        id="txtOTP" name="forgotOTP"
                                        type="text" required
                                        value={this.state.forgotOTP}
                                        onChange={this.handleMessageInputOnChange}/>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        New Password
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        className="pl-4 block w-full outline-0 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset sm:text-sm sm:leading-6"
                                        id="txtPassword" name="password"
                                        type="password" required
                                        value={this.state.forgotOTP}
                                        onChange={this.handleMessageInputOnChange}/>
                                </div>
                            </div>

                            <div>
                                <button
                                    type="button"
                                    className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={this.onForgotPassBtnClick}>
                                    Sign in
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        );

    }

    handleMessageInputOnChange(event: { target: { value: any; name: any; } }) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        // @ts-ignore
        this.setState({
            [name]: value
        });
    }

    private onLoginBtnClick = () => {
        try {
            this.api.post('/users/login', {
                mail: this.state.loginMail,
                password: this.state.loginPass
            }).then((res: { data: any }) => {
                const jsonData = res.data;
                alert(jsonData);
            }).catch((error: any) => {
                console.error('Axios Error', error);
            });
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    }
    private onForgotPassBtnClick = () => {
        try {
            this.api.post('/users/reset', {
                mail: this.state.forgotMail,
                otp: this.state.forgotOTP,
                password: this.state.newPass
            }).then((res: { data: any }) => {
                const jsonData = res.data;
                alert(jsonData);
            }).catch((error: any) => {
                console.error('Axios Error', error);
            });
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    }
}