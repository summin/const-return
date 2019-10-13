import React, { Component, Fragment, useEffect } from 'react'
import ContentZoneParser from '../components/ContentZoneParser'


export default class Content extends Component {

    state = {
        scrollIndex: 0
    }

    scrollIndexScale = 1;
    scrollIndexHeight;
    scrollIndexPaddingTop = 0;
    scrollIndexGrad1 = 0;
    scrollIndexGrad2 = 50;


    onScroll1 = (e) => {
        if (e.target.scrollTop < 411) {
            console.log(e.target.scrollTop)
            this.scrollIndexScale = 1 - 1 / (410 / e.target.scrollTop)
            this.scrollIndexPaddingTop = (e.target.scrollTop / 2.15) + "px"
            this.scrollIndexGrad2 = 50 + e.target.scrollTop / 8
            this.scrollIndexGrad1 = e.target.scrollTop / 4
            for (let i = 0; i < this.scrollable.length; ++i) {
                this.scrollable[i].getElementsByClassName("scrollTransform")[0].style.transform = "scale(" + this.scrollIndexScale + ")"
                this.scrollable[i].getElementsByClassName("scrollTransform")[0].style.top = this.scrollIndexPaddingTop;
                this.scrollable[i].style.backgroundImage
                    = "linear-gradient(rgba(105, 105, 105, 0) "
                    + this.scrollIndexGrad1 + "%, rgb(17, 58, 54) "
                    + this.scrollIndexGrad2 + "%, rgba(105, 105, 105, 0) 100%)"
            }
        }
    }

    onScroll = () => {
        console.log('onScroll Called')
        this.setState({ onScrollExec: document.getElementsByClassName("content-fadable")[0].scrollTop })
    }

    componentDidUpdate() {
        let p = document.getElementsByClassName("hero")[0].children[2];
        let h = document.getElementsByClassName("hero")[0].children[0];
        let c = this.state.scrollIndex;
        // if (p.getBoundingClientRect().y <= 63) {
        //     p.style.position = 'fixed'
        //     p.style.left = "calc(50% - " + document.getElementsByClassName("hero")[0].children[2].offsetWidth/2 + "px - 6px)"
        //     p.style.margin = "0"
        //     console.log("calc(50% - " + document.getElementsByClassName("hero")[0].children[2].clientWidth + "px)")
        // }

        c = document.getElementsByClassName("content-fadable")[0].scrollTop
        h.style.bottom = "-" + c / 3 + "px"
        h.style.opacity = (1 - (c / 160))

        console.log(document.getElementsByClassName("content-fadable")[0].scrollTop)
    }


    render() {
        console.log("content rendered")
        return (
            <Fragment>
            <div onScroll={this.onScroll} className="contentParent">
                <div
                    className={this.props.contentCentreOpacityA + " " + "content-fadable"}>
                    <ContentZoneParser {...this.props.contentA} />
                </div>
                <div
                    className={this.props.contentCentreOpacityB + " " + "content-fadable"}>
                    <ContentZoneParser {...this.props.contentB} />
                </div>
                </div>
            </Fragment>
        );
    }
}
