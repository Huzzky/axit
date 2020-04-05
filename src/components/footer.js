import React from 'react';
import './css/footer.css';
import githubIcon from './icon/github-icon.svg';
import facebookIcon from './icon/facebook-icon.svg';
import twitterIcon from './icon/twitter-icon.svg';
import instaIcon from './icon/instagram-icon.svg';




class Footer extends React.Component {
    render() {
        return (
            <div className="FooterDiv">
                <ul className="Icon">
                    <li className="githubicon"><a href="https://github.com/Huzzky" target="_blank"><img src={githubIcon} alt="GitHubIcon"/></a></li>
                    <li className="facebookicon"><a href="#" target="_blank"><img src={facebookIcon} alt="FacebookIcon"/></a></li>
                    <li className="twittericon"><a href="https://twitter.com/Hus_key" target="_blank"><img src={twitterIcon} alt="TwitterIcon"/></a></li>
                    <li className="instaicon"><a href="https://www.instagram.com/huzkky/" target="_blank"><img src={instaIcon} alt="InstagramIcon"/></a></li> 
                </ul>
                <p className="fio">© Vladislav Bychkov</p>
            </div>
        );}}

export default Footer;