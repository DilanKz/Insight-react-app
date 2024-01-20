import React, {Component} from "react";
import {faEdit, faEnvelope, faImage, faUserEdit} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import axios from "axios";

interface GeneralInfoStates {
    user: any;
    name: string;
    contact: string;
    address: string;
    image:string;
}

export class UserGeneralInformation extends Component<{}, GeneralInfoStates> {
    private api: any;

    constructor(props: {}) {
        super(props);
        this.api = axios.create({baseURL: `http://localhost:4000`});
        let item: any = localStorage.getItem('insightUser');
        let loggedUser = JSON.parse(item);
        this.state = {
            user: loggedUser,
            name: '',
            contact: '',
            address: '',
            image:''
        }

        this.handleInputOnChange = this.handleInputOnChange.bind(this)
        this.fileInputOnChange = this.fileInputOnChange.bind(this)
    }

    componentDidMount() {
        this.showUserData();
    }

    render() {
        return (

            <div className="h-full w-full">
                <h2 className=" text-2xl font-bold sm:text-xl pt-8 ps-3">General Information</h2>

                <div className="flex">
                    <div className="w-full h-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">

                        <div className="grid max-w-2xl mx-auto mt-8">
                            <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">

                                <img
                                    className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-tertiary"
                                    src={this.state.image}
                                    alt=""/>

                                <div className="flex flex-col space-y-5 sm:ml-8">

                                    <label htmlFor='image'
                                           className="text-white bg-secondary font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                                        <FontAwesomeIcon icon={faImage} className="mr-2"/>
                                        Change picture
                                    </label>
                                    <input
                                        id="image"
                                        className="hidden"
                                        type="file"
                                        accept="image/*"
                                        name="image"
                                        onChange={this.fileInputOnChange}
                                    />
                                </div>
                            </div>

                            <div className="items-center mt-8 sm:mt-14 text-[#202142]">

                                <div className="mt-2">
                                    <input
                                        className="block my-8 w-full rounded-md border-0 py-1.5 outline-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset pl-4 sm:text-sm sm:leading-6"
                                        id="name" name="loginPass"
                                        type="text" placeholder="Name"
                                        value={this.state.name} onChange={this.handleInputOnChange}
                                        required
                                    />
                                </div>

                                <div className="mt-2">
                                    <input
                                        className="block my-8 w-full rounded-md border-0 py-1.5 outline-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset pl-4 sm:text-sm sm:leading-6"
                                        id="contact" name="contact"
                                        type="text" placeholder="contact"
                                        value={this.state.contact} onChange={this.handleInputOnChange}
                                        required
                                    />
                                </div>

                                <div className="mt-2">
                                    <input
                                        className="block my-8 w-full rounded-md border-0 py-1.5 outline-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset pl-4 sm:text-sm sm:leading-6"
                                        id="address" name="address"
                                        type="text" placeholder="Address"
                                        value={this.state.address} onChange={this.handleInputOnChange}
                                        required
                                    />
                                </div>

                                <div className="flex justify-end">
                                    <button type="button"
                                            className="text-white bg-secondary font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                                            onClick={this.updateUserData}
                                    >
                                        <FontAwesomeIcon icon={faEdit} className="mr-2"/>
                                        Update details
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="h-full w-full pl-4">

                        {this.state.user?.accountType === 'regular' || (this.state.user?.accountType === 'rejected') && (
                            <div className="w-11/12 h-fit bg-gray-50 mt-24 rounded-md p-4 shadow-xl">

                                <h2 className="font-bold pb-3">Upgrade your account to Author.</h2>

                                <p>
                                    Elevate your experience! Upgrade your account to an author to unlock additional
                                    features
                                    and
                                    capabilities. Share your thoughts, insights, and creativity with our community.
                                </p>

                                <button className="bg-secondary text-white rounded-md px-4 py-2 mt-4"
                                        onClick={this.requestAuthor}
                                >
                                    <FontAwesomeIcon icon={faUserEdit} className="mr-2"/>
                                    Upgrade
                                </button>

                            </div>
                        )}

                        <div className="w-11/12 h-fit bg-gray-50 mt-10 rounded-md p-4 shadow-xl">
                            <h2 className="font-bold pb-3">Contact an Admin.</h2>
                            <p>
                                Encountering an issue or have a question? Don't hesitate to reach out to our dedicated
                                team
                                of admins. We're here to assist you every step of the way. Your satisfaction is our
                                priority!
                            </p>

                            <button className="bg-secondary text-white rounded-md px-4 py-2 mt-4">
                                <FontAwesomeIcon icon={faEnvelope} className="mr-2"/>
                                Contact
                            </button>

                        </div>


                    </div>
                </div>

            </div>
        );
    }

    showUserData=() =>{
        const {user} = this.state;

        if (user.hasOwnProperty('name')) {
            this.setState({name: user.name});
        }

        if (user.hasOwnProperty('contact')) {
            this.setState({contact: user.contact});
        }

        if (user.hasOwnProperty('address')) {
            this.setState({address: user.address});
        }

        if (user.hasOwnProperty('image')) {
            this.setState({image: user.image});
        }
    }
    handleInputOnChange(event: { target: { value: any; name: any; } }) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        // @ts-ignore
        this.setState({
            [name]: value
        });
    }

    fileInputOnChange(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0];

        if (file) {
            this.getBase64(file).then((base64Image: string) => {
                this.setState({image: base64Image});
            });
        }
    }

    getBase64(file: File): Promise<string> {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = () => resolve(reader.result as string);
            reader.onerror = error => reject(error);

            reader.readAsDataURL(file);
        });
    }

    updateUserData = () => {

        try {
            this.api.post('/users/update', {
                email: this.state.user.email,
                name:this.state.name,
                contact:this.state.contact,
                address:this.state.address,
                image:this.state.image,
            }).then((res: { data: any }) => {
                const jsonData = res.data;
                if (jsonData) {
                    localStorage.setItem('insightUser', JSON.stringify(jsonData));
                    alert("Account updated")
                } else {
                    alert("You dont have an account")
                }
            }).catch((error: any) => {
                console.log('Axios Error', error);
                alert(error.response.data.message);
            });
        } catch (error) {
            console.error('Error submitting data:', error);
        }

    }

    requestAuthor = () => {
        if (this.state.user.image && this.state.user.address && this.state.user.contact) {

            if (this.state.user.accountType!=='regular'||this.state.user.accountType!=='rejected'){
                try {
                    this.api.post('users/swap', {
                        email: this.state.user.email,
                        type: 'requested'
                    }).then((res: { data: any }) => {
                        const jsonData = res.data;
                        if (jsonData) {
                            localStorage.setItem('insightUser', JSON.stringify(jsonData));
                        } else {
                            alert("You dont have an account")
                        }
                    });
                } catch (e) {

                }
            }

        }else {
            alert("Please update your profile before request account upgrade")
        }

    }
}