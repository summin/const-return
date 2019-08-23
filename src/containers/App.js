import React, { useEffect, Component } from 'react';
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import *  as images from '../media/images/technology/index.js'

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
        let result = [];
        if (content) {
            import('../contentData/' + content + '.json')
                .then((i) => {
                    Object.values(i.entries).map((i) =>
                        result.push(
                            <div className={i.style}>
                                <img src={images[i.imgsrc]} />
                                <h3>{i.name}</h3>
                                <p>{i.text}</p>
                            </div>)
                    )
                })
            return new Promise((resolve, reject) =>
                resolve(result))
        }
        else
            return new Promise((resolve, reject) =>
                resolve(<p> something went wrong! </p>))


    }

    onClick = (e) => {
        e.preventDefault()
        const target = e.target
        console.log(images)
        this.parser(target.innerHTML.toLowerCase()).then((i) => {
            if (target.innerHTML !== this.state.onClickValue) {
                console.log("CalledinnerOnclick")
                this.setState({
                    heroAnimate: this.state.heroAnimate + 1,
                    heroAnimated: true,
                    onClickValue: target.innerHTML,
                    ["content" + (this.state.contentCentreFXLast == "A" ? "B" : "A")]: i,
                    ["contentCentreOpacity" + (this.state.contentCentreFXLast == "A" ? "B" : "A")]: "opacity-1",
                    ["contentCentreOpacity" + (this.state.contentCentreFXLast == "A" ? "A" : "B")]: "opacity-1",
                    contentCentreFXLast: this.state.contentCentreFXLast == "A" ? "B" : "A",
                })
                console.log(this.state)
                console.log("CalledinnerOnclick EXIT")
            }
        })
    }

    render() {
        console.log("CalledRender")
        return (
            <div className='main'>
                <Header
                    header={this.state.header}
                    onClick={this.onClick} />
                <Content
                    contentA={this.state.contentA}
                    contentB={this.state.contentB}
                    contentCentreOpacityA={this.state.contentCentreOpacityA}
                    contentCentreOpacityB={this.state.contentCentreOpacityB}
                    heroAnimate={this.state.heroAnimate}
                    heroAnimated={this.state.heroAnimated} />
                <Footer
                    footer={this.state.footer} />
            </div>
        );
    }
}