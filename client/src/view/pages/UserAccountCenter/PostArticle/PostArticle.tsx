// TextEditor.tsx

import React, {Component} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from "axios";
import 'react-quill/dist/quill.core.css';
import 'react-quill/dist/quill.bubble.css';
import {faMagnifyingGlass, faPenToSquare, faX} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


interface Tag {
    _id: string;
    name: string;
    subtags: string[];
}

interface quilText {
    textBody: any;
    title: string;
    image: any;
    showTagPopup: boolean,
    showPostPopup: boolean,
    tags: Tag[],
    search: string,
    currentTags: string[],
    user:any;
}

export class PostArticle extends Component <{}, quilText> {
    modules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            [{align: []}],

            [{list: 'ordered'}, {list: 'bullet'}],
            [{indent: '-1'}, {indent: '+1'}],

            [{size: ['small', false, 'large', 'huge']}],
            [{header: [1, 2, 3, 4, 5, 6, false]}],
            ['link', 'image'],
            [{color: []}, {background: []}],

            ['clean'],
        ],
        clipboard: {
            matchVisual: false,
        },
    };
    private api: any;

    constructor(props: {}) {
        super(props);
        this.api = axios.create({baseURL: `http://localhost:4000`});

        let item: any = localStorage.getItem('insightUser');
        let loggedUser = JSON.parse(item);

        this.state = {
            textBody: "",
            title: "",
            image: "",
            showTagPopup: false,
            showPostPopup: false,
            search: "",
            tags: [],
            currentTags: [],
            user:loggedUser
        }
        this.handleInputsOnChange = this.handleInputsOnChange.bind(this);
        this.handleQuillBodyOnChange = this.handleQuillBodyOnChange.bind(this);
        this.fileInputOnChange = this.fileInputOnChange.bind(this);
        this.handleSearchOnChange = this.handleSearchOnChange.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        try {
            try {
                this.api.get('/tags/all')
                    .then((res: { data: any }) => {
                        const jsonData = res.data;
                        this.setState({tags: jsonData});
                    }).catch((error: any)=> {
                    console.error('Axios Error:', error)
                });
            } catch (error) {
                console.log('Error fetching data: ', error)
            }
        } catch (e) {
            console.log("error");
        }
    }

    render() {

        const {showTagPopup,showPostPopup, tags, search} = this.state;

        return (
            <div className="relative h-full overflow-y-scroll no-scroll-bar">
                <div className="w-full relative">
                    <h2 className=" text-2xl font-bold sm:text-xl pt-8 ps-3">Post Article</h2>
                    <div className="mt-12 flex md:flex-row flex-col px-10 h-full justify-between">

                        <div className="md:w-[65vw] flex flex-col gap-y-8">

                            <div>
                                <h1 className="block font-bold leading-6 text-gray-900 mb-4">
                                    Title
                                </h1>
                                <div className="relative mt-2 rounded-md shadow-sm">

                                    <input
                                        type="text"
                                        name={this.state.title}
                                        id="title"
                                        className="block w-full ring-tertiary rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset outline-tertiary placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-tertiary sm:text-sm sm:leading-6"
                                        placeholder="Title"
                                        onChange={this.handleInputsOnChange}
                                    />
                                </div>
                            </div>


                            <div className="w-full">
                                <h1 className="block font-bold leading-6 text-gray-900 mb-4">
                                    Content
                                </h1>

                                <ReactQuill
                                    modules={this.modules}
                                    className="h-[40vh]"
                                    placeholder="Type your content here"
                                    value={this.state.textBody}
                                    onChange={this.handleQuillBodyOnChange} // Add this line
                                />
                            </div>
                        </div>

                        <div className="md:w-[25vw] p-3">
                            <h1 className="block font-bold leading-6 text-gray-900">
                                Main Image
                            </h1>
                            <div
                                className="w-2/3 h-[30vh] bg-gray-300 rounded-md object-cover"
                                style={{
                                    backgroundImage: `url(${this.state.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}>
                            </div>


                            <label htmlFor="image" className="block">
                                <FontAwesomeIcon icon={faPenToSquare}/>
                                <input
                                    id="image"
                                    className="hidden"
                                    type="file"
                                    accept="image/*"
                                    name="image"
                                    onChange={this.fileInputOnChange}
                                />
                            </label>
                            <h1 className="block font-bold leading-6 text-gray-900 mt-4 mb-1">
                                Main Image
                            </h1>
                            <div
                                className="rounded-xl border border-gray-300 p-3 mb-2 flex justify-start flex-wrap gap-2"
                                id="tags">

                                {this.state.currentTags.map(tag => (
                                    <span key={tag}
                                          className="bg-gray-200 text-md px-2 py-1.5 w-max h-max rounded-md border border-gray-500">
                                    {tag}
                                        <FontAwesomeIcon
                                            className="pl-3 pr-2 text-[12px] cursor-pointer"
                                            onClick={() => this.removeTagOnClick(tag)}
                                            icon={faX}
                                        />
                                </span>
                                ))}

                            </div>

                            <button
                                className="px-2 py-1 bg-primary text-white rounded"
                                onClick={this.toggleTagPopup}>
                                Manage Tags
                            </button>


                        </div>

                    </div>

                </div>

                <div className="absolute w-full bg-tertiary bottom-0 left-0 flex justify-end items-center py-4">
                    <button className=" rounded-md px-4 py-2 bg-primary text-white mr-4"
                            /*onClick={this.onPostButtonOnClick}*/
                            onClick={this.togglePostPopup}
                    >
                        Post
                    </button>
                </div>

                <div
                    className={`w-screen h-screen fixed top-0 left-0 justify-center items-center z-[55] ${showTagPopup ? "flex" : "hidden"}`}>

                    <div className=" backdrop-blur-sm w-full h-full z-[55] absolute"
                         onClick={this.toggleTagPopup}></div>

                    <div
                        className="w-1/3 sm:w-1/2 h-max bg-white rounded-md z-[56] drop-shadow-2xl">
                        <form className="">
                            <div>
                                <div className="my-4 flex items-center">
                                    <input
                                        className="border-0 outline-0 ring-0 text-xl pl-4 block w-full rounded-md py-1.5 text-gray-900 placeholder:text-gray-400"
                                        id="txtEmail" name="search"
                                        value={this.state.search}
                                        placeholder="Search Tag"
                                        type="text" required
                                        onChange={this.handleSearchOnChange}
                                    />
                                    <FontAwesomeIcon className="text-gray-400 pr-4 text-2xl"
                                                     icon={faMagnifyingGlass}></FontAwesomeIcon>
                                </div>
                            </div>
                        </form>

                        <div
                            className="w-full h-fit bg-gray-50 px-4 overflow-x-visible max-h-[300px] overflow-y-scroll no-scroll-bar rounded-b-xl">
                            {tags
                                .filter(tag =>
                                    search !== '' && tag.name.toLowerCase().includes(search.toLowerCase())
                                )
                                .map(tag => (
                                    <div key={tag._id}>
                                        <h3 className="pl-4 cursor-pointer text-xl pt-4 font-bold
                                        border-gray-300 border-b hover:text-blue-900 text-gray-800"
                                            onClick={() => this.handleTagClick(tag.name)}>
                                            {tag.name}
                                        </h3>

                                        <ul className="pl-6">
                                            {tag.subtags.map(subtag => (
                                                <li
                                                    className="cursor-pointer text-xl pt-4
                                                    border-gray-200 border-b hover:text-blue-900 text-gray-800"
                                                    onClick={() => this.handleTagClick(subtag)}
                                                    key={subtag}
                                                >
                                                    {subtag}
                                                </li>
                                            ))}
                                        </ul>

                                    </div>
                                ))}
                        </div>


                    </div>

                </div>

                <div
                    className={`w-screen h-screen fixed top-0 left-0 justify-center items-center z-[55] ${showPostPopup ? "flex" : "hidden"}`}>

                    <div className=" backdrop-blur-sm w-full h-full z-[55] absolute"
                         onClick={this.togglePostPopup}></div>

                    <div className="w-1/3 sm:w-1/2 h-max bg-white rounded-md z-[56] drop-shadow-2xl">

                        <div className="p-4">
                            <p className="text-gray-700">
                                <strong>Note:</strong> To maintain content integrity and prevent misuse, deletions are
                                not
                                allowed after a certain time period, and updates are disabled. Please review your
                                content carefully before publishing.
                            </p>
                        </div>

                        <div className="w-full flex justify-end items-center py-4">
                            <button className=" rounded-md px-4 py-2 bg-primary text-white mr-4"
                                onClick={this.onPostButtonOnClick}
                            >
                                Publish
                            </button>
                        </div>

                    </div>


                </div>

            </div>
        );
    }

    handleInputsOnChange(event: { target: { value: any; name: any; } }) {
        const target = event.target;
        const value = target.value;
        // @ts-ignore
        this.setState({
            title: value
        });
    }

    handleQuillBodyOnChange(value: string) {
        this.setState({
            textBody: value,
        });
    }

    handleSearchOnChange(event: { target: { value: any; name: any; } }) {
        const target = event.target;
        const value = target.value;
        // @ts-ignore
        this.setState({
            search: value
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

    toggleTagPopup = () => {
        this.setState((prevState) => ({
            showTagPopup: !prevState.showTagPopup,
        }));

        console.log(this.state.tags);
    };
    togglePostPopup = () => {
        this.setState((prevState) => ({
            showPostPopup: !prevState.showPostPopup,
        }));

        console.log(this.state.tags);
    };

    private removeTagOnClick(tagToRemove: string) {
        this.setState(prevState => ({
            currentTags: prevState.currentTags.filter(tag => tag !== tagToRemove),
        }));
    }

    private handleTagClick = (tagName: string) => {
        this.setState(prevState => {
            const updatedTags = [...prevState.currentTags];

            // Check if the tag is not already present in the array
            if (!updatedTags.includes(tagName)) {
                updatedTags.push(tagName);
            }

            return {
                ...prevState,
                currentTags: updatedTags,
            };
        });

        console.log(this.state.currentTags);
    };

    private onPostButtonOnClick = () => {
        console.log(this.state.textBody)

        try {
            this.api.post('/articles/add', {
                id:this.state.user,
                title: this.state.title,
                body: this.state.textBody,
                tags: this.state.currentTags,
                image: this.state.image,
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
