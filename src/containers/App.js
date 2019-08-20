import React, { useEffect, Component } from 'react';
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

export default class App extends Component {

    state = {
        header: "",
        contentA: "",
        contentB: "",
        contentACentreOpacity: "",
        contentBCentreOpacity: "",
        onClickValue: "",
        footer: "",
        heroAnimate: 0,
        heroAnimated: false,
        technologyContent: "technologyContent Test technologyContent Test technologyContent Test technologyContent Test technologyContent Test technologyContent Test technologyContent Test technologyContent Test technologyContent Test technologyContent Test technologyContent Test technologyContent Test technologyContent Test technologyContent Test technologyContent Test technologyContent Test technologyContent Test technologyContent Test technologyContent Test technologyContent Test technologyContent Test technologyContent Test technologyContent Test technologyContent Test technologyContent Test technologyContent Test technologyContent Test technologyContent Test technologyContent Test technologyContent Test ",
        projectsContent: "Test projectsConten Test projectsContenTest projectsContenTest projectsContenTest projectsContenTest projectsContenTest projectsContenTest projectsContenTest projectsContenTest projectsContenTest projectsContenTest projectsContenTest projectsContenTest projectsContenTest projectsContenTest projectsContenTest projectsContenTest projectsContenTest projectsContenTest projectsContenTest projectsContenTest projectsContenTest projectsContenTest projectsContenTest projectsContenTest projectsContenTest projectsContenTest projectsContenTest projectsContenTest projectsConten",
        motivationContent: "Test motivation Test motivation Test motivation Test motivation Test motivation Test motivation Test motivation Test motivation Test motivation Test motivation Test motivation Test motivation Test motivation Test motivation Test motivation Test motivation Test motivation Test motivation Test motivation Test motivation Test motivation Test motivation Test motivation Test motivation Test motivation Test motivation Test motivation Test motivation Test motivation Test motivation Test motivation Test motivation Test motivation Test motivation ",
        aboutContent: "About Test About Test About Test About Test About Test About Test About Test About Test About Test About Test About Test About Test About Test About Test About Test About Test About Test About Test About Test About Test About Test About Test About Test About Test About Test About Test About Test About Test About Test About Test About Test About Test About Test About Test About Test About Test About Test About Test About Test About Test About Test About Test About Test About Test About Test About Test About Test About Test About Test About Test About Test About Test About Test About Test About Test "
    }

    onClick = (e) => {
        e.preventDefault()
        if (e.target.innerHTML !== this.state.onClickValue){
        this.setState({
            heroAnimate: this.state.heroAnimate + 1,
            heroAnimated: true,
            onClickValue: e.target.innerHTML,
            content: this.state[e.target.innerHTML.toLowerCase() + "Content"],
            contentACentreOpacity: "opacity-1"
        })
    }
    }

    render() {
        console.log("App RENDERED")
        return (
            <div className='main'>
                <Header
                    header={this.state.header}
                    onClick={this.onClick} />
                <Content
                    contentA={this.state.contentA}
                    contentB={this.state.contentB}
                    contentACentreOpacity = {this.state.contentCentreOpacityA}
                    contentBCentreOpacity = {this.state.contentCentreOpacityB}
                    heroAnimate={this.state.heroAnimate}
                    heroAnimated={this.state.heroAnimated} />
                <Footer
                    footer={this.state.footer} />
            </div>
        );
    }
}