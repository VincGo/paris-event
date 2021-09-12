import React from 'react';
import {IoLogoGithub, IoLogoLinkedin} from 'react-icons/io'

const Footer = () => {
    return (
        <footer>
            <div>
                <h3>Paris Events - Godard Vincent</h3>
                <hr/>
                <a href="https://github.com/VincGo/paris-event">
                    <IoLogoGithub/>
                </a>
                <a href="https://www.linkedin.com/in/vincent-godard-00b351119/">
                    <IoLogoLinkedin/>
                </a>
                <hr/>
                <p>&copy; All Right Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;