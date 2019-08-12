import React, { Component } from 'react';


export default class App extends Component {

    render() {

        return (
            <div className="div1">Div 1
                <h1>We are in space, Houston!!</h1>
                <span className="div2">Div 2
                    <div className="div3">Div 3
                        <div className="div4">Div 4
                            <div className="div5">Div 4 Children</div>
                            <div className="div5">Div 4 Children</div>
                            <div className="div5">Div 4 Children</div>
                            <div className="div5">Div 4 Children</div>
                        </div>
                        <div className="div4">Div 3 Children</div>
                        <div className="div4">Div 3 Children</div>
                    </div>
                </span>
                <div className="div2">Div 2
                    <div className="div3">Div 3
                        <div className="div4">Div 4
                            <div className="div5">Div 4 Children</div>
                            <div className="div5">Div 4 Children</div>
                            <div className="div5">Div 4 Children</div>
                            <div className="div5">Div 4 Children</div>
                        </div>
                        <div className="div4">Div 3 Children</div>
                        <div className="div4">Div 3 Children</div>
                    </div>
                </div>
                <div className="div2a">Div 2
                    <div className="div3">Div 3
                        <div className="div4">Div 4
                            <div className="div5">Div 4 Children</div>
                            <div className="div5">Div 4 Children</div>
                            <div className="div5">Div 4 Children</div>
                            <div className="div5">Div 4 Children</div>
                        </div>
                        <div className="div4">Div 3 Children</div>
                        <div className="div4">Div 3 Children</div>
                    </div>
                </div>
                <ul className="ul1"> ul1
                    <li className="li1">ul1 children</li>
                    <li className="li1">ul1 children</li>
                    <li className="li1">ul1 children</li>
                    <li className="li1">ul1 children</li>
                    <ul className="ul2"> ul2
                        <li className="li2">ul2 children</li>
                        <li className="li2">ul2 children</li>
                        <li className="li2">ul2 children</li>
                    </ul>
                </ul>

                <dl>
                    <dt>Hummus</dt>
                    <dd>A thick dip/sauce generally made from chick peas blended with tahini, lemon juice, salt, garlic, and other ingredients.</dd>
                    <dt>Pita</dt>
                    <dd>A soft, slightly leavened flatbread.</dd>
                    <dt>Halloumi</dt>
                    <dd>A semi-hard, unripened, brined cheese with a higher-than-usual melting point, usually made from goat/sheep milk.</dd>
                    <dt>Green salad</dt>
                    <dd>That green healthy stuff that many of us just use to garnish kebabs.</dd>
                </dl>
            </div>
        );
    }
}