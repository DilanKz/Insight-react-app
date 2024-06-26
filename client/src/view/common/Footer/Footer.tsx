import {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faInstagramSquare,
    faSquareFacebook,
    faSquareXTwitter,
    faWhatsappSquare
} from "@fortawesome/free-brands-svg-icons";

export class Footer extends Component {
    render() {
        return (
            <div className="px-4 py-6 md:flex md:items-center md:justify-between bg-tertiary">
                <span className="text-sm text-gray-500 sm:text-center">© 2024 Insight. All Rights Reserved.</span>
                <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
                    <a href="src/view/common/Footer/Footer#" className="text-primary hover:text-secondary">
                        <FontAwesomeIcon icon={faSquareFacebook}></FontAwesomeIcon>
                    </a>
                    <a href="src/view/common/Footer/Footer#" className="text-primary hover:text-secondary">
                        <FontAwesomeIcon icon={faInstagramSquare}></FontAwesomeIcon>
                    </a>
                    <a href="src/view/common/Footer/Footer#" className="text-primary hover:text-secondary">
                        <FontAwesomeIcon icon={faSquareXTwitter}></FontAwesomeIcon>
                    </a>
                    <a href="src/view/common/Footer/Footer#" className="text-primary hover:text-secondary">
                        <FontAwesomeIcon icon={faWhatsappSquare}></FontAwesomeIcon>
                    </a>
                </div>
            </div>
        );
    }
}