import React, {Component, KeyboardEvent} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faX} from "@fortawesome/free-solid-svg-icons";

interface TagManagerStates {
    currentTags: string[];
    image: string;
    title: string;
    name: string;
    showTagPopup: boolean,
}

export class TagManager extends Component<{}, TagManagerStates> {

    constructor(props: {}) {
        super(props);
        this.state = {
            currentTags: [],
            image: "",
            title: "",
            name: "",
            showTagPopup: false,
        }
        this.handleInputsOnChange = this.handleInputsOnChange.bind(this);
    }

    render() {

        const {showTagPopup} = this.state;

        return (
            <>

                <div className="w-full h-full relative">

                    <div
                        className="z-10 absolute right-0 bottom-0 w-16 h-16 bg-primary mr-16 mb-16 rounded-full flex justify-center items-center cursor-pointer hover:transform hover:scale-110 hover:rotate-360 transition-transform duration-500"
                        onClick={this.toggleTagPopup}
                    >
                        <FontAwesomeIcon className="text-white text-3xl" icon={faPlus}></FontAwesomeIcon>
                    </div>

                </div>

                <div
                    className={`w-screen h-screen fixed top-0 left-0 justify-center items-center z-[55] ${showTagPopup ? "flex" : "hidden"}`}>

                    <div className=" backdrop-blur-sm w-full h-full z-[55] absolute"
                         onClick={this.toggleTagPopup}></div>

                    <div className="w-1/3 p-5 flex flex-col items-end border rounded-xl drop-shadow-md z-[56]">

                        <h1 className={"w-full text-xl font-bold pb-4 pt-2"}>Add Tag</h1>

                        <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            id="name"
                            className="block my-4 w-full ring-tertiary rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset outline-tertiary placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-tertiary sm:text-sm sm:leading-6"
                            placeholder="Tag name"
                            onChange={this.handleInputsOnChange}
                        />

                        <div className={"w-full flex-col flex items-center py-4"}>

                            <h1 className="block font-bold leading-6 text-gray-900">
                                Main Image
                            </h1>
                            <div
                                className="w-1/2 h-[30vh] bg-gray-300 rounded-md object-cover"
                                style={{
                                    backgroundImage: `url(${this.state.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}>
                            </div>

                            <input
                                type="text"
                                name="title"
                                value={this.state.title}
                                id="title"
                                className="block my-4 w-full ring-tertiary rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset outline-tertiary placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-tertiary sm:text-sm sm:leading-6"
                                placeholder="sub tag"
                                onChange={this.handleInputsOnChange}
                                onKeyPress={this.handleKeyPress}
                            />

                            <h1 className="block font-bold leading-6 text-gray-900">
                                Sub Tags
                            </h1>
                            <div
                                className="w-full min-h-[5rem] rounded-xl border border-gray-300 p-3 mb-2 flex justify-start flex-wrap gap-2"
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
                        </div>

                        <button
                            className="px-2 py-1 bg-primary text-white rounded w-max">
                            Manage Tags
                        </button>

                    </div>
                </div>

            </>
        );
    }

    toggleTagPopup = () => {
        this.setState((prevState) => ({
            showTagPopup: !prevState.showTagPopup,
        }));
    };

    handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {

        if (e.key === 'Enter') {
            const newTag = this.state.title.trim();

            if (newTag && !this.state.currentTags.includes(newTag)) {
                this.setState((prevState) => ({
                    currentTags: [...prevState.currentTags, newTag],
                    title: '',
                }), () => {
                    console.log(this.state.currentTags);
                });
            }
        }
    }

    handleInputsOnChange(event: { target: { value: any; name: any; } }) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        // @ts-ignore
        this.setState({
            [name]: value
        });
    }

    private removeTagOnClick(tagToRemove: string) {
        this.setState(prevState => ({
            currentTags: prevState.currentTags.filter(tag => tag !== tagToRemove),
        }));
    }

}