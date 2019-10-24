import React, { Component, Fragment, useEffect } from 'react'
import ContentZoneParser from '../components/ContentZoneParser'


export default class Content extends Component {


    render() {
        console.log("content rendered")
        return (
            <Fragment>
                <div className="contentParent">
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
