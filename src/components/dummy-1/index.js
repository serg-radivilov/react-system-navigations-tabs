import React, { Component } from 'react';

class DummyOne extends Component {
    componentDidMount () {
        console.log('\n');
        console.log('One -%c componentDidMount ', 'color: #55a6e0');
        console.log('One -%c this.props: ', 'color: #aaaaaa', this.props);
    }

    componentWillUnmount () {
        console.log('\n');
        console.log('One -%c componentWillUnmount ', 'color: #d25959');
        console.log('One -%c this.props: ', 'color: #aaaaaa', this.props);
    }

    render () {
        console.log('One -%c RENDER CALLED', 'color: #aaaaaa');

        return (
            <div>
                <h4>{ `DummyOne ${ this.props.testName }` }</h4>
                <p>{ this.props.testText }</p>
            </div>
        )
    }
}

export default DummyOne;