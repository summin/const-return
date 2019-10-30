import React, { Component } from 'react'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class RightSideNav extends Component {

    onClickAccount = (e) => {
        e.preventDefault()
        this.setState({ toggleAccount: !this.state.toggle })
    }


    render() {

        return (

            <ul className="dropdown account nav">
                <a href=""
                    onClick={this.onClickAccount}>
                    <FontAwesomeIcon
                        icon={faUserCircle}
                        className="fa-2x" />
                </a>

                <li className={this.state.toggleAccount ? "show" : ""}>
                    1
                </li>
                <li className={this.state.toggleAccount ? "show" : ""}>
                    2
                </li>
            </ul>
        )
}
}
