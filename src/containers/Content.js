import React, { Fragment, Component } from 'react';
import ContentHero from './ContentHero'

export default class Content extends Component {

    style = {
        position: "absolute"
    }

    render() {
        console.log("Content RENDERED")
        return (
            <div className="contentParent">
                <ContentHero
                    heroAnimate={this.props.heroAnimate}
                    heroAnimated={this.props.heroAnimated} />
                <div
                    className={"content-centre " + this.props.contentCentreAOpacity}>
                    {this.props.contentA}
                </div>
                <div
                    className={"content-centre " + this.props.contentCentreBOpacity}>
                    {this.props.contentB}
                </div>
            </div>
        );
    }
}