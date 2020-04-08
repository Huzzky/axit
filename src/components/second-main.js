import React from 'react';
import './css/second-main.css';


class SM2 extends React.Component {
    constructor() {
        super();
        this.state = {
            descTab: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod sagittis posuere." +
            "Integer volutpat non nunc eget aliquet."+
            "Praesent at eros leo. Etiam pellentesque commodo."
        }
    }

    render () {
        return (
            <div className="Tabs">
                <div className="tabs-padding">
                    <div className="bttn-div">
                        <button className="bttn">TAB1</button>
                        <button className="bttn">TAB2</button>
                        <button className="bttn">TAB3</button>
                    </div>
                    <p className="desc-tab">{this.state.descTab}</p>
                    <div className="img-tabs">

                    </div>
                </div>
            </div>
        );
    }
}

export default SM2;