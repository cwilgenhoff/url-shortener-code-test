import 'whatwg-fetch';
import 'babel-polyfill';

const API_URL = 'http://localhost:9090/api';
const API_HEADERS = {
  'Content-Type': 'application/json'
};

let UrlShortenerAPI = {
  fetchUrls() {
    return fetch(`${API_URL}/urls`, { headers: API_HEADERS }).then((response) => response.json());
  }
};

export default UrlShortenerAPI;
