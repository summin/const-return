import React, { Fragment, Component } from 'react';

export default class ContentHero extends Component {

    render() {
        const wordA = "Const"
        const wordB = "return"

        const wordSlice = (word) => {
            let chars = word.split("")
            return chars
        }


        return (
            <div className="text-centre hero">
                <br></br>
                <div className="hero-a">
                {wordSlice(wordA).map((i) => <span className="heroWordA" key={"heroWordA" + i}>{i}</span>)}
                </div>
                <div className="hero-b">
                {wordSlice(wordB).map((i) => <span className="heroWordB" key={"heroWordB" + i}>{i}</span>)}
                </div>
            </div>
        );
    }
}