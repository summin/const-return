import React, { Fragment, Component } from 'react';
import ContentHero from './ContentHero';

export default ({ ...props }) => {
    
    return (
        <div className="contentParent">
            <ContentHero
                heroAnimate={props.heroAnimate}
                heroAnimated={props.heroAnimated} />
            <div
                className={"content-centre " + props.contentCentreOpacityA}>
                {props.contentA}
            </div>
            <div
                className={"content-centre " + props.contentCentreOpacityB}>
                {props.contentB}
            </div>
        </div>
    );
}
