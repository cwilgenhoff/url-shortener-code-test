import React, { Component, PropTypes } from 'react';

import Generator from './Generator';
import List from './List';

class UrlShortener extends Component {
  render(){
    return (
      <div className="app">
        <h1>URL Shortener</h1>
        <Generator />
        <List urls={this.props.urls} />
      </div>
    );
  }
}

UrlShortener.propTypes = {
  urls: PropTypes.arrayOf(PropTypes.object)
};

export default UrlShortener;
