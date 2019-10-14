import React, { Component, Fragment, useEffect } from 'react'
import ContentZoneParser from '../components/ContentZoneParser'


export default class Content extends Component {

    onScroll = () => {
        const run = (root) => {
            let h = root[0]
                .getElementsByClassName("sticky-hero")[0]
                .getElementsByClassName("hero")[0]
                .getElementsByTagName("h3")[0];
            let c = root[0].scrollTop
            h.style.bottom = "-" + c / 3 + "px"
            h.style.opacity = (1 - (c / 160))
        }
        document.getElementsByClassName("content-fadable A")[0].getElementsByClassName("sticky-hero")[0]
            && run(document.getElementsByClassName("content-fadable A"));
        document.getElementsByClassName("content-fadable B")[0].getElementsByClassName("sticky-hero")[0]
            && run(document.getElementsByClassName("content-fadable B"));
    }

    render() {
        console.log("content rendered")
        return (
            <Fragment>
                <div onScroll={this.onScroll} className="contentParent">
                    <div key="A"
                        className={this.props.contentCentreOpacityA + " " + "content-fadable" + " " + "A"}>
                        <ContentZoneParser key="A" {...this.props.contentA} />
                    </div>
                    <div key="B"
                        className={this.props.contentCentreOpacityB + " " + "content-fadable" + " " + "B"}>
                        <ContentZoneParser key="B" {...this.props.contentB} />
                    </div>
                </div>
            </Fragment>
        );
    }
}
