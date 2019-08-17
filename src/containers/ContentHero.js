import React, { Fragment, Component } from 'react';
import ContentHeroLetter from '../components/ContentHeroLetter'


export default class ContentHero extends Component {


    state = {
        animata: false,
    }

    onClick = () => {
        this.setState({
            animate: !this.state.animate
        });
    }

    onScroll = () => {
        console.log("a")
    }

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
                <div className="hero-a" onClick={this.onClick} onScroll={this.onScroll}>
                    {wordSlice(wordA).map((i) => {
                        counter++;
                        return (
                        <ContentHeroLetter
                            letter={i}
                            counter={counter}
                            animate={this.state.animate}
                            length={length} />)
                    })}
                </div>
                <div className="hero-b">
                    {wordSlice(wordB).map((i) => {
                        counter++;
                        return (
                        <ContentHeroLetter
                            letter={i}
                            counter={counter}
                            animate={this.state.animate}
                            length={length} />)
                    })}
                </div>
            </div>
        );
    }
}