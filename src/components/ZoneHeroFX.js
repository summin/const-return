import React, { useState, useEffect } from 'react';


export default ({ ...props }) => {

    const [state, setstate] = useState()    

        document.getElementsByClassName("content-fadable A")[0].addEventListener("scroll", function(){
            setstate(document.getElementsByClassName("content-fadable A")[0].scrollTop)
        });


return (
        <h3>{props.text}</h3>
    )
}