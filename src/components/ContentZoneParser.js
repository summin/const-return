import React, { Fragment, useEffect } from 'react';
import ContentElement from './ContentElement'
import PropTypes from 'prop-types'
import cuid from 'cuid'

export default ({ ...props }) => {

    const entriesParser = (entries) => {
        let content = [];
        if (entries) {
            Object.keys(entries).map((i) => {
                content.push(
                    <ContentElement
                        key={cuid()}
                        {...entries[i]} />);
            })
        }
        else console.warn("API Error - Entries")
        return content;
    }

    const zoneParser = () => {
        let content = [];
        for (let i = 0; i <= Object.keys(props).length; ++i)
            if (props['zone-' + i]) {
                const zone = props['zone-' + i]
                content.push(
                    <ContentElement
                        key={cuid()}
                        type={zone.type}
                        style={zone.style}
                        layout={zone.layout}>
                        {zone.entries && entriesParser(zone.entries)}
                    </ContentElement>);
            }
            else console.warn("API Error - Zones")
        return content
    }

    return (
        <Fragment>
            {zoneParser()}
        </Fragment>
    );
}