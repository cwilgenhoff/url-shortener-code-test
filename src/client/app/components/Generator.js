import React, { Component } from 'react';

import UrlActionShortener from '../actions/UrlActionShortener';

class Generator extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      url: ''
    }
  }

  shortenUrl(e) {
    e.preventDefault();
    UrlActionShortener.shortenUrl(this.state.url);
  }

  updateUrl(e) {
    e.preventDefault();
    this.setState({ url: e.target.value });
  }

  render(){
    return (
      <div className="generator">
        <form onSubmit={ this.shortenUrl.bind(this)}>
          <input type="text"
                 placeholder="URL to shorten"
                 className="generator__url"
                 value={ this.state.url }
                 onChange={ this.updateUrl.bind(this) }
                 autoFocus={ true }
                 required={ true } />
          <button type="submit" className="generator__submit" >Shorten Now!</button>
        </form>
      </div>
    );
  }
}

export default Generator;
