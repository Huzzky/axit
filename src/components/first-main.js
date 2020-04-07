import React from 'react';
// import ReactDOM from "react-dom";
import "./css/first-main.css";
import LMC from './first-mane/left-main-card';
import RMC from './first-mane/right-main-card';

class FM extends React.Component {
   

    render () {
        return (
            <div>
                <div className="first-Main">
                    <div className="div-first">
                        <LMC/>
                        <RMC/>
                    </div>
                </div>
            </div>
        );
    }
}

export default FM;