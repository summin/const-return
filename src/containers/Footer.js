import React, { Fragment, Component } from 'react';

export default class Footer extends Component {

    render() {
        console.log("Footer RENDERED")
        return (
            <div className="footer">
            <a href = "mailto: alexander.leontjev@gmail.com">Contact Us</a>
            © ConstReturn
            </div>
        );
    }
}