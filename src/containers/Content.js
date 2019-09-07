import React, { Component, useEffect } from 'react'
import ContentZoneParser from '../components/ContentZoneParser'
import ContentHero from '../components/ContentHero'

export default class Content extends Component {

    state = {
        scrollIndex: 0
    }

    scrollIndexScale = 1;
    scrollIndexHeight;
    scrollIndexPaddingTop = 0;

    componentDidUpdate() {
        console.log("content updated")
        setTimeout(() => {
            this.scrollable = null;
            this.scrollable = document.getElementsByClassName("hero")
        }, 50);
    }

    onScroll = (e) => {
        if (e.target.scrollTop < 411) {
            console.log(e.target.scrollTop)
            this.scrollIndexScale = 1 - 1 / (160 / e.target.scrollTop)
            this.scrollIndexPaddingTop = (e.target.scrollTop / 2) + "px"
            for (let i = 0; i < this.scrollable.length; ++i) {
                this.scrollable[i].getElementsByClassName("scrollTransform").style.transform = "scale(" + this.scrollIndexScale + ")"
                this.scrollable[i].getElementsByClassName("scrollTransform").style.top = this.scrollIndexPaddingTop;
                console.log(this.scrollable[i].getElementsByClassName("scrollTransform"))
            }
        }
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
                    className={this.props.contentCentreOpacityA + " " + "content-fadable"}>
                    <ContentZoneParser {...this.props.contentA} />
                </div>
                <div
                    className={this.props.contentCentreOpacityB + " " + "content-fadable"}>
                    <ContentZoneParser {...this.props.contentB} />
                </div>
            </div>
        );
    }
}
