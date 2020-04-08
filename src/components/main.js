import React from 'react';
import "./css/main.css";
import FM from './first-main';
import SMD from './social-media-div';
import SM2 from './second-main';



class Main extends React.Component {

    render() {
        return (
            <div className="All-Main">
                <FM/>
                <SMD/>
                <SM2/>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        );}}

export default Main;