import AppDispatcher from '../AppDispatcher';
import constants from '../constants';
import UrlShortenerAPI from '../api/UrlShortenerAPI';

let UrlActionShortener = {
  fetchUrls() {
    AppDispatcher.dispatchAsync(UrlShortenerAPI.fetchUrls(), {
      request: constants.FETCH_URLS,
      success: constants.FETCH_URLS_SUCCESS,
      failure: constants.FETCH_URLS_ERROR
    });
  },

  shortenUrl(url) {
    AppDispatcher.dispatchAsync(UrlShortenerAPI.shortenUrl(url), {
      request: constants.SHORTEN_URL,
      success: constants.SHORTEN_URL_SUCCESS,
      failure: constants.SHORTEN_URL_ERROR
    }, {url});
  }
};

export default UrlActionShortener;
