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
        const target = e.target.innerHTML
        this.parser(target.toLowerCase()).then((i) => {
            if (target !== this.state.onClickValue) {
                console.log("CalledinnerOnclick")
                this.setState({
                    heroAnimate: this.state.heroAnimate + 1,
                    heroAnimated: true,
                    navToggle: false,
                    onClickValue: target,
                    ["content" + (this.state.contentCentreFXLast == "A" ? "B" : "A")]: i,
                    ["contentCentreOpacity" + (this.state.contentCentreFXLast == "A" ? "B" : "A")]: "opacity-1",
                    ["contentCentreOpacity" + (this.state.contentCentreFXLast == "A" ? "A" : "B")]: "opacity-0",
                    contentCentreFXLast: this.state.contentCentreFXLast == "A" ? "B" : "A"
                })
            }
        })
    }

    //componentDidMount() {
    //    var c = document.createElement('canvas'),
    //        ctx = c.getContext('2d'),
    //        cw = c.width = 200,
    //        ch = c.height = 200;
//
    //    for (var x = 0; x < cw; x++) {
    //        for (var y = 0; y < ch; y++) {
    //            ctx.fillStyle = 'hsl(0, 0%, ' + (100 - (Math.random() * 15)) + '%)';
    //            ctx.fillRect(x, y, 1, 1);
    //        }
    //    }
//
    //    document.body.style.background = 'url(' + c.toDataURL() + ')';
    //}

    render() {

        console.log("Toggle in App is " + this.state.navToggle)
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
                        heroAnimated={this.state.heroAnimated} />
                </div>
                <Footer
                    footer={this.state.footer} />

            </Fragment>
        );
    }
}