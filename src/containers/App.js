import React, { useEffect, Component, Fragment } from 'react';
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

export default class App extends Component {

    state = {
        header: "",
        result: "",
        contentA: "",
        contentB: "",
        contentCentreOpacityA: "",
        contentCentreOpacityB: "",
        contentCentreFXLast: "B",
        contentDeviceView: "view-desktop",
        onClickValue: "",
        footer: "",
        heroAnimate: 0,
        heroAnimated: false,
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

    onClickContent = (e) => {
        (e.target.attributes.value.value == "desktop") ?
            this.setState({
                contentDeviceView: "view-desktop",
                heroAnimate: this.state.heroAnimate + 1,
                heroAnimated: true
            }) :
            this.setState({
                contentDeviceView: "view-mobile",
                heroAnimate: this.state.heroAnimate + 1,
                heroAnimated: true
            });
    }

    onClick = (e) => {
        e.preventDefault()
        const html = e.target.innerHTML
        this.parser(html.toLowerCase()).then((i) => {
            if (html !== this.state.onClickValue) {
                this.setState({
                    heroAnimate: this.state.heroAnimate + 1,
                    heroAnimated: true,
                    navToggle: false,
                    contentDeviceView: "view-desktop",
                    onClickValue: html,
                    ["content" + (this.state.contentCentreFXLast == "A" ? "B" : "A")]: i,
                    ["contentCentreOpacity" + (this.state.contentCentreFXLast === "A" ? "B" : "A")]: "opacity-1",
                    ["contentCentreOpacity" + (this.state.contentCentreFXLast === "A" ? "A" : "B")]: "opacity-0 max-height-100-vh of-h",
                    contentCentreFXLast: this.state.contentCentreFXLast == "A" ? "B" : "A"
                })
            }
        })
    }

    render() {
        return (
            <Fragment>
                <Header
                    header={this.state.header}
                    toggle={this.state.navToggle}
                    onClick={this.onClick} />
                <div className='main'>
                    <Content
                        contentA={this.state.contentA}
                        contentB={this.state.contentB}
                        contentCentreOpacityA={this.state.contentCentreOpacityA}
                        contentCentreOpacityB={this.state.contentCentreOpacityB}
                        heroAnimate={this.state.heroAnimate}
                        heroAnimated={this.state.heroAnimated}
                        onClick={this.onClickContent}
                        contentDeviceView={this.state.contentDeviceView} />
                </div>
                <Footer
                    footer={this.state.footer} />
            </Fragment >
        );
    }
}