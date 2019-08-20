import React, { Fragment, Component } from 'react';

export default class Footer extends Component {

    render() {
        console.log("Footer RENDERED")
        return (
            <div className="footer">
              FOOTER {this.props.footer}
            </div>
        );
    }
}