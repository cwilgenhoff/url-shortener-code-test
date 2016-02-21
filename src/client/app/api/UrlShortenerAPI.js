import 'whatwg-fetch';
import 'babel-polyfill';

const API_URL = 'http://localhost:9090/api';
const API_HEADERS = {
  'Content-Type': 'application/json'
};

let handleErrors = (response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

let UrlShortenerAPI = {
  fetchUrls() {
    return fetch(`${API_URL}/urls`, { headers: API_HEADERS }).then((response) => response.json());
  },

  shortenUrl(url) {
    return fetch(`${API_URL}/shorten`, {
      method: 'post',
      headers: API_HEADERS,
      body: JSON.stringify({ url: url })
    })
    .then(handleErrors)
    .then((response) => response.json());
  }
};

export default UrlShortenerAPI;
