import React, { Fragment, Component } from 'react';

export default ({ ...props }) => {

    const style = {
        position: "relative"
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    let sideRand = getRandomInt(4)
    let side;

    switch (sideRand) {
        case 0:
            side = "top"
            break
        case 1:
            side = "bottom"
            break
        case 2:
            side = "left"
            break
        case 3:
            side = "right"
            break
        default:
            console.log("side decision error")
            break;
    }

    console.log('h' + props.counter + " " + side)


    const animate = (animate) => {
        const elem = document.getElementsByClassName('h' + props.counter)[0]
        let counter = 2;
        let run = setInterval(() => {
            counter = (counter * 2) /1.9
            if (counter > 1000) {
                clearInterval(run)
            }
            elem.style[side] = counter + 'px'
        }, 20)

    }

    if (props.animate) animate(props.animate);
    console.log('h' + props.counter)
    return (
        <span
            className={'h' + props.counter}
            style={style}
            key={"heroLetter" + props.word + props.counter}>
            {props.letter}
        </span>
    )

}