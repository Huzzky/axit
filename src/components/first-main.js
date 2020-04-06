import React from 'react';
// import ReactDOM from "react-dom";
import "./css/first-main.css";


function activeText(e) {       // Для изменения текста при нажатии на Name
    e.preventDefault();
    console.log("Работает");
}




class FM extends React.Component {
    render () {
        return (
            <div>
                <div className="first-Main">
                    <div className="div-first">
                        <div className="left-div-first-main">
                        <h1 className="axit-first"><b>AX</b><span className="it-first">IT</span></h1>
                        <h2 className="about-axit-first">LOREM IPSUM DOLOR SIT AMET CONSECTETUR ELIT</h2>
                        <hr className="hr-first"></hr>
                        <p className="fast-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla velit enim, 
                        euismod nec purus et, 
                        semper finibus sapien. Vivamus interdum, dui ut accumsan consectetur, 
                        nec efficitur lorem odio. </p>
                        <button className="button-first-download"><span className="download">Download</span></button>
                    </div>
                        <div className="card-main">
                            <div className="main-card">
                                <div className="form-card">
                                    <form action="" className="form-card-main" method="post">
                                        <label className="text-card"><b>Try Your <span className="text-free-card">FREE</span> Trial Today</b></label><br/>

                                        <input type="text" name="name" value="Name" className="text-form-card text-name-card"
                                        required onClick={activeText}/><br/>
                                        <input type="email" name="email" className="text-form-card" required/><br/>
                                        <input type="password" name="password" className="text-form-card text-password-card" required/><br/>
                                        <button className="button-card"><span className="text-button-card">Get started</span></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FM;