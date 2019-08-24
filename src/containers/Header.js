import React, { Component } from 'react';
import Logo from '../media/images/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'


export default class Header extends Component {

    state = {
        toggle: this.props.toggle,
    }

    componentDidUpdate(prevProps, prevState) {
        prevProps !== this.props ? this.setState({ toggle: this.props.toggle }) : ""
    }

    onClick = () => {
        this.setState({ toggle: !this.state.toggle })
    }

    render() {
        return (
            <div className="nav">
                <a href=""><img src={Logo} /></a>
                <div
                    onClick={this.onClick}
                    className="menu-toggler">
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <ul>
                    <li
                        className={this.state.toggle ? "show" : ""}
                        onClick={this.props.onClick}>Technology</li>
                    <li
                        className={this.state.toggle ? "show" : ""}
                        onClick={this.props.onClick}>Projects</li>
                    <li
                        className={this.state.toggle ? "show" : ""}
                        onClick={this.props.onClick}>Motivation</li>
                    <li
                        className={this.state.toggle ? "show" : ""}
                        onClick={this.props.onClick}>About</li>
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