import React, {Component} from "react";
import bgImage from "../../../images/bg.jpg";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouse} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
interface SignUpStates {
    email: string;
    password: string;
    name: string;
    confirmPassword: string
}

export class SignUp extends Component<{}, SignUpStates> {

    private api:any;
    private navigate:any;
    constructor(props: {}) {
        super(props);
        this.api = axios.create({baseURL: `http://localhost:4000`});
        this.state = {
            email: "",
            password: "",
            name: "",
            confirmPassword: ""
        }
        this.handleRegisterInputOnChange = this.handleRegisterInputOnChange.bind(this);
    }

    render() {
        return (

            <div className="relative">
                <div className="flex h-screen w-screen">

                    <div className="h-full lg:w-[60vw] md:w-[50vw] w-[0vw] bg-tertiary">
                        <img src={bgImage} className="w-full h-full object-cover" alt=""/>
                    </div>

                    <div className="flex flex-1 flex-col justify-center py-12 px-8
                lg:w-[40vw] md:w-[50vw] w-screen">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <h3 className="mx-auto h-10 w-auto text-center font-extrabold">Insight</h3>
                            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                Nice to meet you! Enter your details to register.
                            </h2>
                        </div>

                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form className="space-y-6">
                                <div>

                                    {/*<label htmlFor="email"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        Email address
                                    </label>*/}

                                    <div className="mt-2">
                                        <input
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 outline-0 focus:ring-inset pl-4 sm:text-sm sm:leading-6"
                                            id="email" name="email"
                                            type="email" placeholder="Email"
                                            value={this.state.email}
                                            onChange={this.handleRegisterInputOnChange}
                                            required/>
                                    </div>
                                </div>

                                <div>

                                    {/*<label htmlFor="email"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        Email address
                                    </label>*/}

                                    <div className="mt-2">
                                        <input
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 outline-0 focus:ring-inset pl-4 sm:text-sm sm:leading-6"
                                            id="name" name="name"
                                            type="text" placeholder="Name"
                                            value={this.state.name}
                                            onChange={this.handleRegisterInputOnChange}
                                            required/>
                                    </div>
                                </div>

                                <div>
                                    {/*<div className="flex items-center justify-between">
                                        <label htmlFor="password"
                                               className="block text-sm font-medium leading-6 text-gray-900">
                                            Password
                                        </label>
                                    </div>*/}
                                    <div className="mt-2 flex row gap-x-2">
                                        <input
                                            className="block w-full rounded-md border-0 py-1.5 outline-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset pl-4 sm:text-sm sm:leading-6"
                                            id="password" name="password"
                                            type="password" placeholder="password"
                                            value={this.state.password}
                                            onChange={this.handleRegisterInputOnChange}
                                            required/>

                                        <input
                                            className="block w-full rounded-md border-0 py-1.5 outline-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset pl-4 sm:text-sm sm:leading-6"
                                            id="confirmPassword" name="confirmPassword"
                                            type="password" placeholder="confirm password"
                                            value={this.state.confirmPassword}
                                            onChange={this.handleRegisterInputOnChange}
                                            required/>

                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="button"
                                        className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                                        onClick={this.btnRegisterOnClick}
                                    >
                                        Register
                                    </button>
                                </div>
                            </form>

                            <p className="mt-4 text-center text-sm text-gray-500 pb-3">
                                Already have an account?{' '}
                                <Link className="font-semibold leading-6 text-secondary hover:text-secondary"
                                      to="/sign">
                                    Sign In
                                </Link>
                            </p>
                        </div>
                    </div>

                </div>

                <Link to={"/"} className="absolute top-0 right-0 mr-4 mt-2 text-[1em] text-tertiary rounded-full">
                    <FontAwesomeIcon icon={faHouse}/>
                </Link>

            </div>
        );
    }

    handleRegisterInputOnChange(event: { target: { value: any; name: any; } }) {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        /*const regexPatterns = {
            email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            username: /^[a-zA-Z0-9]+$/,
            password: /^.{8,}$/, // Minimum 8 characters
        };

        if (regexPatterns[name].test(value)) {
            this.setState({
                [name]: value
            });
        } else {
            console.error(`Invalid ${name} input.`);
        }*/

        // @ts-ignore
        this.setState({
            [name]: value
        });
    }

    btnRegisterOnClick = () => {
        if (this.state.password===this.state.confirmPassword){
            try {
                this.api.post('/users/register', {
                    email: this.state.email,
                    name: this.state.name,
                    password: this.state.password
                }).then((res: { data: any }) => {
                    const jsonData = res.data;
                    if (jsonData==null){
                        alert("You dont have an account")
                    }else {
                        localStorage.setItem('insightUser', JSON.stringify(jsonData));
                        this.navigate=useNavigate();

                        this.navigate('/home');

                        alert(`welcome ${jsonData.name}`);
                    }
                }).catch((error: any) => {
                    console.error('Axios Error', error);
                });
            } catch (error) {
                console.error('Error submitting data:', error);
            }
        }else {
            alert("password doesn't match");
        }
    }
}