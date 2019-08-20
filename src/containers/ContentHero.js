import React, { Fragment, Component } from 'react';
import ContentHeroLetter from '../components/ContentHeroLetter'


export default class ContentHero extends Component {

    render() {
        const wordA = "Const"
        const wordB = "return"
        const length = wordA.length + wordB.length
        let counter = 0;
        const wordSlice = (word) => {
            let chars = word.split("")
            return chars
        }

        return (

            <div className="text-centre hero">
                <br></br>
                <div className="hero-a">
                    {wordSlice(wordA).map((i) => {
                        counter++;
                        return (
                            <ContentHeroLetter
                                letter={i}
                                counter={counter}
                                word="a"
                                animate={this.props.heroAnimate}
                                animated={this.props.heroAnimated}
/>)
                    })}
                </div>
                <div className="hero-b">
                    {wordSlice(wordB).map((i) => {
                        counter++;
                        return (
                            <ContentHeroLetter
                                letter={i}
                                word="b"
                                counter={counter}
                                animate={this.props.heroAnimate}
                                animated={this.props.heroAnimated}
                            />)
                    })}
                </div>
            </div>
        );
    }
}