import React from "react";
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const openInNewTab = (url) => {
    window.open(url, '_blank', 'noreferrer');
};

const SocialMedia = () => {
    return (
        <div className="app__social">
            <div>
                <BsGithub onClick={() => openInNewTab('https://github.com/gkilch1')}/>
            </div>
            <div>
                <BsLinkedin onClick={() => openInNewTab('https://www.linkedin.com/in/grant-kilchrist/')}/>
            </div>
        </div>
    )
}

export default SocialMedia;