import React, { Component } from 'react';

class DummyTree extends Component {
    componentDidMount () {
        console.log('\n');
        console.log('Tree -%c componentDidMount ', 'color: #55a6e0');
    }

    componentWillUnmount () {
        console.log('\n');
        console.log('Tree -%c componentWillUnmount ', 'color: #d25959');
    }

    render () {
        console.log('Tree -%c RENDER CALLED', 'color: #aaaaaa');

        return (
            <div>
                <h4>DummyTree</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, veritatis.</p>
            </div>
        )
    }
}

export default DummyTree;