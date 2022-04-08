import React from 'react';
import { BsInstagram, BsFacebook } from 'react-icons/bs';


const SocialMedia = () => {
    return (
        <div className="app__social">
            <a href="https://www.facebook.com/carlyjm" rel="noreferrer" target="_blank">
                <div>
                    <BsFacebook />
                </div>
            </a>
            <a href="https://www.instagram.com/magicalweddingsbycarly/" rel="noreferrer" target="_blank">

            <div>
                <BsInstagram />
            </div>
            </a>

        </div>
    )
}

export default SocialMedia