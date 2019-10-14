import React, { Component } from 'react';
import Logo from '../media/images/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons'


export default class Header extends Component {

    state = {
        toggle: this.props.toggle,
        toggleAccount: this.props.toggle,
        selected: this.props.selected
    }

    componentDidUpdate(prevProps, prevState) {
        prevProps !== this.props
            ? this.setState({
                toggle: this.props.toggle,
                selected: this.props.selected
            })
            : ""
        const x = document.getElementsByClassName("contentParent")[0]
        !this.state.toggle ? x.setAttribute("class", "blur0 contentParent") : x.setAttribute("class", "blur30 contentParent")
    }

    onClick = () => {
        this.setState({ toggle: !this.state.toggle })
    }

    render() {
        return (
            <div className="nav">
                <div>
                    <a href=""><img src={Logo} /></a>
                </div>
                <div
                    onClick={this.onClick}
                    className="menu-toggler">
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <ul className={this.state.toggle ? "show" : ""}>
                    <li
                        className={(this.state.toggle ? "show" : "") + (this.state.selected === "Technology" ? " selected" : "") + " noblur"}
                        onClick={this.props.onClick}>Technology</li>
                    <li
                        className={(this.state.toggle ? "show" : "") + (this.state.selected === "Projects" ? " selected" : "") + " noblur"}
                        onClick={this.props.onClick}>Projects</li>
                    <li
                        className={(this.state.toggle ? "show" : "") + (this.state.selected === "About" ? " selected" : "") + " noblur"}
                        onClick={this.props.onClick}>About</li>
                </ul>
                <FontAwesomeIcon className="account" icon={faUser} />
            </div>
        );
    }
}