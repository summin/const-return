import React, { Component } from 'react';
import Logo from '../media/images/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'


export default class Header extends Component {

    render() {


        return (
            <div className="nav">
                <img src={Logo} width="auto" />
                <ul>
                    <li>Technology</li>
                    <li>Projects</li>
                    <li>Motivation</li>
                    <li>About</li>
                </ul>
                <FontAwesomeIcon icon={faUserCircle}/>
                <ul className="dropdown account nav">
                    Account
                    <li>

                    </li>
                </ul>
            </div>
        );
    }
}