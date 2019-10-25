import React, { Fragment, Component } from 'react';
import ContentHero from './ContentHero'



export default class Content extends Component {

    style = {
        position: "absolute"
    }

    render() {
        return (
            <div className="contentParent">
                <ContentHero
                    heroAnimate={this.props.heroAnimate}
                    heroAnimated={this.props.heroAnimated} />
                <div
                    className={"content-centre " + this.props.contentCentreOpacityA}>
                    {this.props.contentA}
                </div>
                <div
                    className={"content-centre " + this.props.contentCentreOpacityB}>
                    {this.props.contentB}
                </div>
            </div>
        );
    }
}