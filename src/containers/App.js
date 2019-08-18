import React, { Fragment, Component } from 'react';
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

export default class App extends Component {

    state = {
        header: "",
        content: "hero",
        cooter: "",
    }

    onClick = (e) => {
        this.setState({[e.target.innerHTML.toLowerCase()]: "2"})
    }

    render() {
        console.log("App RENDERED")
        return (
            <div className = 'main'>
                <Header header={this.state.header} onClick={this.onClick}/>
                <Content content={this.state.content} />
                <Footer footer={this.state.footer} />
            </div>
        );
    }
}