import React from 'react';
import "./css/Header.css";


class Header extends React.Component {
    render() {
        return (
            <div className="navtag">
                <nav>    
                    <ul className="mainNav">
                                <li className="Logo"><a href="ya.ru"><b>AX</b><span className="IT">IT</span></a></li>
                                <li className="liRight"><a href="ya.ru">Contact</a></li>
                                <li className="liRight"><a href="ya.ru">Reviews</a></li>
                                <li className="liRight"><a href="ya.ru">Pricing</a></li>
                                <li className="liRight"><a href="ya.ru">About</a></li>
                                <li className="liRight"><a href="ya.ru">Features</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Header;