import React, { Fragment, useEffect } from 'react';
import ContentElement from './ContentElement'
import PropTypes from 'prop-types'
import cuid from 'cuid'

export default ({ ...props }) => {

    useEffect(() => {
        const run = (root) => {
            let h = root[0]
                .getElementsByClassName("sticky-hero")[0]
                .getElementsByClassName("hero")[0]
                .getElementsByTagName("h3")[0];
            let c = root[0].scrollTop
            h.style.bottom = "-" + c / 3 + "px"
            h.style.opacity = (1 - (c / 160))
        }
        document.getElementsByClassName("content-fadable A")[0].getElementsByClassName("sticky-hero")[0]
            && run(document.getElementsByClassName("content-fadable A"));
        document.getElementsByClassName("content-fadable B")[0].getElementsByClassName("sticky-hero")[0]
            && run(document.getElementsByClassName("content-fadable B"));
    })

    const entriesParser = (entries) => {
        let content = [];
        if (entries) {
            Object.keys(entries).map((i) => {
                content.push(
                    <ContentElement
                        key={i}
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
                        key={i}
                        type={zone.type}
                        style={zone.style}
                        layout={zone.layout}
                        theme={zone.theme}
                        main={zone.entries.main && zone.entries.main.content.name}>
                        {entriesParser(zone.entries)}
                    </ContentElement>);
            }
            else console.warn("API Error - Zones")
        return content
    }

    return (
        <Fragment key={cuid()}>
            {zoneParser()}
        </Fragment>
    );
}