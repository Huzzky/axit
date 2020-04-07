import React from 'react';



class LMC extends React.Component {

    render () {
        return (
            <div>
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
            </div>
        );
    }
}

export default LMC;