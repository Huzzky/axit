import React from 'react';
import './css/social-media-div.css';
import githubIcon from './icon/github-icon.svg';
import facebookIcon from './icon/facebook-icon.svg';
import twitterIcon from './icon/twitter-icon.svg';
import instaIcon from './icon/instagram-icon.svg';

class SMD extends React.Component {
    render () {
        return (
            <div className="smd">
                <div className="smd-marg">
                <div className="smd-gran-left">
                    <h2 className="s-m">Social Media</h2>
                    <p className="desc-smd">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin commodo tellus, 
                    ut ultricies enim venenatis quis. Etiam fermentum est quis metus gravida, eu dapibus.</p> 
                </div>
                <div className="smd-gran-right">
                    <ul className="Icon-smd">
                        <li className="githubicon-smd"><a href="https://github.com/Huzzky" target="blank"><img src={githubIcon} alt="GitHubIcon"/></a></li>
                        <li className="facebookicon-smd"><a href="https://www.facebook.com/" target="blank"><img src={facebookIcon} alt="FacebookIcon"/></a></li>
                        <li className="twittericon-smd"><a href="https://twitter.com/Hus_key" target="blank"><img src={twitterIcon} alt="TwitterIcon"/></a></li>
                        <li className="instaicon-smd"><a href="https://www.instagram.com/huzkky/" target="blank"><img src={instaIcon} alt="InstagramIcon"/></a></li> 
                    </ul>
                </div>
                </div>
            </div>
        );
    }
}

export default SMD;