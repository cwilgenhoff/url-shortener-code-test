import React, { Component } from 'react';

class Generator extends Component {
  render(){
    return (
      <div className="generator">
        <input type="text" placeholder="URL to shorten" />
        <input type="button" value="Shorten Now!" />
      </div>
    );
  }
}

export default Generator;
