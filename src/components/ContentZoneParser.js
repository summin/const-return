import React from 'react';
import ContentElement from './ContentElement'

export default ({ ...props }) => {


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
        <div className="content">
            {zoneParser()}
        </div>
    );
}