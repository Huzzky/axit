import React from 'react';

class RMC extends React.Component {
    render () {
        return (
            <div>
                                        <div className="card-main">
                            <div className="main-card">
                                <div className="form-card">
                                    <form action="" className="form-card-main" method="post">
                                        <label className="text-card"><b>Try Your <span className="text-free-card">FREE</span> Trial Today</b></label><br/>

                                        <input type="text" name="name" placeholder="Name" className="text-form-card text-name-card"
                                        required onClick={this.activeText}/><br/>
                                        <input type="email" placeholder="Email" name="email" className="text-form-card" required/><br/>
                                        <input type="password" name="password" placeholder="Password" className="text-form-card text-password-card" required/><br/>
                                        <button className="button-card"><span className="text-button-card">Get started</span></button>
                                    </form>
                                </div>
                            </div>
                        </div>
            </div>
        );
    }
}

export default RMC;