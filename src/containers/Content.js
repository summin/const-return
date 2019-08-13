import React, { Fragment, Component } from 'react';
import ContentHero from './content/ContentHero'

export default class Content extends Component {

    render() {

        return (
            <div>
            <ContentHero />
              CONTENT
              <div className="content"> Div 1</div>
            </div>
        );
    }
}