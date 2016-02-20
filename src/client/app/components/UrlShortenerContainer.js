import React, { Component } from 'react';
import {Container} from 'flux/utils';

import UrlShortener from './UrlShortener';
import UrlActionShortener from '../actions/UrlActionShortener';
import UrlStore from '../stores/UrlStore';

class UrlShortenerContainer extends Component {

  componentDidMount(){
    UrlActionShortener.fetchUrls();
  }

  render() {
    return (
      <UrlShortener urls={ this.state.urls } />
    );
  }
}

UrlShortenerContainer.getStores = () => ([UrlStore]);
UrlShortenerContainer.calculateState = (prevState) => ({
  urls: UrlStore.getState()
});

export default Container.create(UrlShortenerContainer);
