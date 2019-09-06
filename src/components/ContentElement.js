import React, { Fragment, useEffect, useState } from 'react'
import * as images from '../media/images/index.js'
import PropTypes from 'prop-types'

export default ({ ...props }) => {

    const [iframe_element, set_iframe_element] = useState(<img src = {images.gif_taiji_spinner} />);
    const [iframe_opened, set_iframe_opened] = useState(false);

    console.log("ConteneElement Called")

    props.theme == 'iframe' ? (
    useEffect(() => {
        !iframe_opened &&
        props.theme == 'iframe' &&
            setTimeout(() => {
                set_iframe_opened(true);
                set_iframe_element(<iframe src={props.content.src}></iframe>);
            }, 2000)
    }) 
    ) : ""

    return (
        <Fragment>
            {props.content && (
                <div className={props.theme}>
                    {Object.keys(props.content).map((i) => {
                        return [
                            props.theme !== 'iframe' &&
                            i == 'src' && <img src={images[props.content.src]}></img>,
                            props.theme == 'iframe' &&
                            i == 'src' && iframe_element,
                            i == 'name' && <h3>{props.content.name}</h3>,
                            i == 'text' && <p>{props.content.text}</p>                            
                        ]
                    })}
                </div>
            )}
            {(props.type == "zone") && (
                <div className={"zone " + props.layout + " " + props.style.type}>
                    {props.children}
                </div>)}
        </Fragment>
    );

}

const proptypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    text: PropTypes.string,
    src: PropTypes.string,
    style: PropTypes.object,
    layout: PropTypes.string,
}