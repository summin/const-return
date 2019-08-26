import React, { useEffect } from 'react';
import ContentHero from './ContentHero';
import * as images from '../media/images/technology/index.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTv } from '@fortawesome/free-solid-svg-icons'
import { faMobile } from '@fortawesome/free-solid-svg-icons'



export default ({ ...props }) => {

    const cookArray = (content) => {
        let result = [];
        content.type === "iframe" &&
            result.push(<div>
                <div
                    onClick={props.onClick}
                    className="button p iframe"
                    value="desktop">
                    desktop </div>
                <div
                    onClick={props.onClick}
                    className="button p fl-r iframe"
                    value="mobile">
                    mobile </div><br></br></div>);
        if (content) {
            Object.values(content.entries).map((i) =>
                result.push(
                    <div className={i.type + " " + i.style + " " + props.contentDeviceView}>
                        {i.type === "wrapped-image" && <div className="background-opaque"><img src={images[i.imgsrc]} /></div>}
                        <h3>{i.name}</h3>
                        <p>{i.text}</p>
                        {i.type === "iframe" ? <iframe src={i.src} /> : null}
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
