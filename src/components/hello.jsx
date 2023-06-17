import React, { Component } from 'react';

class Hello extends Component {
    state = { 
        count:0,
        address: {
            street: 'john'
        }
     } 
    render() { 
        return (
            <React.Fragment><h1>hello world</h1><h2>{this.state.count}</h2><button>inc</button></React.Fragment>
        );
    }
}

// formatCount() {

// }
 
export default Hello;