import React, { Component } from 'react';

class DummyTwo extends Component {
    componentDidMount () {
        console.log('\n');
        console.log('Two -%c componentDidMount ', 'color: #55a6e0');
    }

    componentWillUnmount () {
        console.log('\n');
        console.log('Two -%c componentWillUnmount ', 'color: #d25959');
    }

    render () {
        console.log('Two -%c RENDER CALLED', 'color: #aaaaaa');

        return (
            <div>
                <h4>DummyTwo</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, veritatis.</p>
            </div>
        )
    }
}

export default DummyTwo;