import React, { useState, useEffect } from 'react';


export default ({ ...props }) => {

    const [state, setstate] = useState()

    console.log("h3 rendered" + props.text)
    

        document.getElementsByClassName("content-fadable A")[0].addEventListener("scroll", function(){
            console.log(state)
            setstate(document.getElementsByClassName("content-fadable A")[0].scrollTop)
        });


return (
        <h3>{props.text}</h3>
    )
}