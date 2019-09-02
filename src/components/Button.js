import React, { useEffect } from 'react';

export default ({ ...props }) => {
    return (
        <button
            onClick={props.onClick}
            className="button p iframe"
            value="desktop">
            desktop
    </button>
    )
}