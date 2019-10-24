import React, { useEffect, Component, Fragment } from 'react';
import Header from './Nav'
import ContentZoneParser from '../components/ContentZoneParser'
import Footer from './Footer'

export default class App extends Component {

    state = {
        content: "",
        onClickValue: "",
        footer: "",
        navToggle: false,
    }

    parser = (content) => {
        return new Promise((resolve, reject) => {
            import('../contentData/' + content + '.json')
                .then((i) => {
                    resolve(i)
                })
        })
    }

    onClick = (e) => {
        e.preventDefault()
        const html = e.target.innerHTML
        this.parser(html.toLowerCase()).then((i) => {
            if (html !== this.state.onClickValue) {
                console.log(i)
                this.setState({
                    navToggle: false,
                    onClickValue: html,
                    content: i
                })
            }
        })
    }

    render() {
        return (
            <Fragment>
                <Header
                    toggle={this.state.navToggle}
                    selected={this.state.onClickValue}
                    onClick={this.onClick} />
                <ContentZoneParser 
                    {...this.state.content} />
                <Footer
                    footer={this.state.footer} />
            </Fragment>
        );
    }
}