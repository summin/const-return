import React, { Fragment, useEffect, useState } from 'react'
import * as images from '../media/images/index.js'
import Gallery from './Gallery'

export default ({ ...props }) => {

    return (
        <Fragment>
            {props.content && (
                <div key={props.theme} className={props.theme}>
                        {Object.keys(props.content).map((i) => {
                            return [
                                props.theme !== 'gallery' &&
                                i == 'src' && <img src={images[props.content.src]}/>,
                                props.theme == 'gallery' &&
                                i == 'src' && <Gallery src={images[props.content.src]}/>,
                                i == 'name' && <h3>{props.content.name}</h3>,
                                i == 'text' && <p><span className="heroP">{props.content.text}</span></p>
                            ]
                        })}
                </div>
            )}
            {(props.type == "zone") && (
                <div key={props.theme} className={"zone " + props.layout + " " + props.style.type + " " + props.main}>
                    {props.children}
                </div>)}
        </Fragment>
    );

}