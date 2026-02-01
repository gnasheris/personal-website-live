import React from 'react'
import WindowWrapper from '../hoc/WindowWrapper.jsx';
import {
    PanelLeft, ChevronLeft, ChevronRight,
    ShieldHalf, Search, Share, Plus, Copy, MoveRight
} from "lucide-react";
import { blogPosts } from "../constants/index";
import WindowControls from "../components/WindowControls.jsx";


const Safari = () => {
    return (
        <>
            {/*Header Only */}
            <div id="window-header">
                <WindowControls target="safari" />

                <PanelLeft className="ml-10 icon" />

                <div className="flex items-center gap-1 ml-5 flex-1">
                    <ChevronLeft className="icon" />
                    <ChevronRight className="icon" />

                    <div className="flex-1 flex-center gap-3">
                        <ShieldHalf className="icon" />
                        <div className="search">
                            <Search className="icon" />

                            <input
                                type="text"
                                placeholder="Search or enter website name"
                                className="flex-1" />
                        </div>

                    </div>

                    <div className="flex items-center gap-5">
                        <Share className="icon" />
                        <Plus className="icon" />
                        <Copy className="icon" />
                    </div>
                </div>
            </div>

            {/*Everything Below is Outside of the Header*/}
            <div className="blog">
                <h2>Coming Soon!</h2>
                <div className="space-y-8">
                    {blogPosts.map(({ id, image, title, date, link }) => (
                        <div key={id} className="blog-post">
                            <div className="col-span-2">
                                <img src={image} alt={title} />
                            </div>

                            <div className="content">
                                <p>{date}</p>
                                <h3>{title}</h3>
                                <a href={link} arget="_blank" rel="noopener noreferrer">
                                    Check out the full post <MoveRight className="icon-hover" />

                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};


const SafariWindow = WindowWrapper(Safari, 'safari');

export default SafariWindow;