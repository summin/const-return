import React, {Component, useEffect } from 'react'
import ContentZoneParser from '../components/ContentZoneParser'
import ContentHero from '../components/ContentHero'

export default class Content extends Component {

    state = {
        scrollIndex: 0
    }
//
//
    //componentDidMount() {
    //    this.scrollable = document.getElementsByClassName("hero")[0]
    //}
    //
//
    //onScroll = (e) => {
    //   this.setState({scrollIndex: this.state.scrollIndex + 1})
    //   console.log(this.state.scrollIndex)
    //}

    componentDidMount() {
        setTimeout(() => {
            this.scrollable = document.getElementsByClassName("hero")[0] 
        }, 1000);
        console.log(document.getElementsByClassName("hero")[0])
        this.scrollcounter = 0
    }
    

    onScroll = (e) => {
        this.scrollable.style.transform = "scale(" + this.scrollcounter/10 + ")"
    }

    render() {
        return (
            <div onScroll={this.onScroll} className="contentParent">
                <div className="of-h">
                    <ContentHero
                        heroAnimate={this.props.heroAnimate}
                        heroAnimated={this.props.heroAnimated}
                    />
                </div>
                <div
                    className={this.props.contentCentreOpacityA  + " " + "content-fadable"}>
                    <ContentZoneParser {...this.props.contentA} />
                </div>
                <div
                    className={this.props.contentCentreOpacityB  + " " + "content-fadable"}>
                    <ContentZoneParser {...this.props.contentB} />
                </div>
            </div>
        );
    }
}
