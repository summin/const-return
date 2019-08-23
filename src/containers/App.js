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
        onClickValue: "",
        footer: "",
        heroAnimate: 0,
        heroAnimated: false,
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
        const target = e.target.innerHTML
        this.parser(target.toLowerCase()).then((i) => {
            if (target !== this.state.onClickValue) {
                console.log("CalledinnerOnclick")
                this.setState({
                    heroAnimate: this.state.heroAnimate + 1,
                    heroAnimated: true,
                    onClickValue: target,
                    ["content" + (this.state.contentCentreFXLast == "A" ? "B" : "A")]: i,
                    ["contentCentreOpacity" + (this.state.contentCentreFXLast == "A" ? "B" : "A")]: "opacity-1",
                    ["contentCentreOpacity" + (this.state.contentCentreFXLast == "A" ? "A" : "B")]: "opacity-0",
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
                    onClick={this.onClick} />
                <div className='main'>
                    <Content
                        contentA={this.state.contentA}
                        contentB={this.state.contentB}
                        contentCentreOpacityA={this.state.contentCentreOpacityA}
                        contentCentreOpacityB={this.state.contentCentreOpacityB}
                        heroAnimate={this.state.heroAnimate}
                        heroAnimated={this.state.heroAnimated} />
                        </div>
                    <Footer
                        footer={this.state.footer} />
                
            </Fragment>
        );
    }
}