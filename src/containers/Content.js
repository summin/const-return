import React, {Component, useEffect } from 'react'
import ContentZoneParser from '../components/ContentZoneParser'
import ContentHero from '../components/ContentHero'

export default class Content extends Component {

    state = {

    }

    render() {
        return (
            <div className="contentParent">
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
