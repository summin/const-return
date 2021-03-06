import React, { Component } from 'react';
import Logo from '../media/images/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'


export default class Header extends Component {

    onClick = () => {

    }

    render() {
        return (
            <div className="nav">
            <a href=""><img src={Logo}/></a>
                <ul>
                <a href=""><li onClick={this.props.onClick}>Technology</li></a>
                <a href=""><li onClick={this.props.onClick}>Projects</li></a>
                <a href=""><li onClick={this.props.onClick}>Motivation</li></a>
                <a href=""><li onClick={this.props.onClick}>About</li></a>
                </ul>

                <ul className="dropdown account nav">
                    <FontAwesomeIcon icon={faUserCircle} />
                    <li>

                    </li>
                </ul>
            </div>
        );
    }
}