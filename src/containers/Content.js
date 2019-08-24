import React from 'react';
import ContentHero from './ContentHero';
import * as images from '../media/images/technology/index.js'

export default ({ ...props }) => {

    console.log(images.image_Atlassian)
    const cookArray = (content) => {
        let result = [];
        if (content) {
            Object.values(content.entries).map((i) =>
                result.push(
                    <div className={i.style}>
                        <div className="background-opaque"><img src={images[i.imgsrc]} /></div>
                        <h3>{i.name}</h3>
                        <p>{i.text}</p>
                    </div>))
            return result
        }
    }

    return (
        <div className="contentParent">
            <div className="of-h">
                <ContentHero
                    heroAnimate={props.heroAnimate}
                    heroAnimated={props.heroAnimated}
                />
            </div>
            <div
                className={"content-centre " + props.contentCentreOpacityA}>
                {cookArray(props.contentA)}
            </div>
            <div
                className={"content-centre " + props.contentCentreOpacityB}>
                {cookArray(props.contentB)}
            </div>
        </div>
    );
}
