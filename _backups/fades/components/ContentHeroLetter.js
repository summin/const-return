import React, { useEffect } from 'react';

export default ({ ...props }) => {

    const style = {
        position: "relative"
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    let sideRand = getRandomInt(4)
    let dRand = getRandomInt(7)
    let side1, side2, zoom;

    switch (sideRand) {
        case 0:
            side1 = "top"
            side2 = "left"
            zoom = "out"
            break
        case 1:
            side1 = "bottom"
            side2 = "left"
            zoom = "in"
            break
        case 2:
            side1 = "top"
            side2 = "right"
            zoom = "out"
            break
        case 3:
            side1 = "bottom"
            side2 = "right"
            zoom = "in"
            break
        default:
            console.log("side decision error")
            break;
    }

    useEffect(() => {
        const animate = (animated) => {
            const elem = document.getElementsByClassName('h ' + props.counter)[0]
            let a = 1, b = 1, counter = 2;
            let run = setInterval(() => {
                ++b
                a = b / 10
                counter = (counter * 2) / 1.9
                if (counter > 10000000) {
                    clearInterval(run)
                }
                if (dRand == 3) {
                    zoom = "in"
                    elem.style[side1] = counter / 300 * Math.cos(a) + 'px'
                    elem.style[side2] = counter / 300 * Math.sin(a) + 'px'
                }
                else {
                    elem.style[side1] = counter * Math.cos(a) + 'px'
                    elem.style[side2] = counter * Math.sin(a) + 'px'
                }

                let x;
                dRand == 3 ? x = 0.2 : x = 3
                if (zoom == "in")
                    elem.style.fontSize = b / x + 100 + '%'
                if (zoom == "out")
                    elem.style.fontSize = -b / x + 100 + '%'
            }, (Math.random() + 1) * 10)
        }

        props.animate <= 1 && props.animated ? animate() : "";
        return () => {
            console.log("Letter cleanup Called")
        };
    })

    return (
        <span
            className={'h ' + props.counter}
            style={style}
            key={"heroLetter" + props.word + props.counter}>
            {props.letter}
        </span>
    )
}