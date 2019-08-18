import React, { Fragment, Component } from 'react';
import ContentHero from './ContentHero'

export default class Content extends Component {

    style = {
        position: "absolute"
    }

    render() {
        console.log("Content RENDERED")
        return (
            <div>
                <ContentHero />
            </div>
        );
    }
}