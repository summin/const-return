import React, { Fragment, useEffect } from 'react'
import * as images from '../media/images/technology/index.js'
import PropTypes from 'prop-types'

export default ({ ...props }) => {

    return (
        <Fragment>
            {props.content && (
                <div className={props.theme}>
                    {Object.keys(props.content).map((i) => {
                        return [
                            props.theme == 'wrapped-image' && 
                            i == 'src' && <img src={images[props.content.src]}></img>,
                            i == 'name' && <h3>{props.content.name}</h3>,
                            i == 'text' && <p>{props.content.text}</p>
                        ]
                    })}
                </div>
            )}
            {(props.type == "zone") && (
                <div className={"zone " + props.layout}>
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