// DisplayContent.tsx

import React, { Component } from 'react';
import "./Editor.css"
interface DisplayContentProps {
    content: string;
}

class DisplayContent extends Component<DisplayContentProps> {
    render() {
        const { content } = this.props;

        return (
            <div
                dangerouslySetInnerHTML={{__html: content}}
                className="prose custom-content text-2xl" // Apply Tailwind CSS classes here
            />
        );
    }
}

export default DisplayContent;
