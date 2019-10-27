var React = require('react');


class Comp extends React.Component {

    render()  {
        return (
            <div id="app">
                <h1>Hello World!</h1>
                <p>Isn't server-side rendering remarkable?</p>
                <button onClick={"a"}>Click Me</button>
            </div>
        );
    }
};

module.exports = Comp;