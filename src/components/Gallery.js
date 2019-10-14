import React, { Fragment, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'


export default ({ ...props }) => {

    const [imgF, setimgF] = useState(0)

    const onClick = (e) => {
        const order = e.currentTarget.attributes[0].value
        order == "right" && setimgF(!(imgF === props.src.length-1) ? imgF + 1 : 0)
        order == "left" && setimgF(!(imgF == 0) ? imgF - 1 : props.src.length-1)
    }

    console.log(props.src)
    return (
        <Fragment>
            <div className="gallery-slider">
                <div onClick={onClick} value="left" className="arrow left">
                    <FontAwesomeIcon className="fa-5x" icon={faCaretLeft}/>
                </div>
                <div onClick={onClick} value="right" className="arrow right">
                    <FontAwesomeIcon className="fa-5x" icon={faCaretRight}/>
                </div>
                <img src={props.src[imgF]} />
            </div>
        </Fragment>
    );
}