import Promise from 'bluebird';
import urlRegex from 'url-regex';
import shortId from 'shortId';

const urls = [
  {
    id: "test",
    url: "http://google.com"
  }
];

export function getAll() {
  return new Promise((resolve) => {
    resolve(urls);
  });
}

export function find(id) {
  return new Promise((resolve, reject) => {
    let target = urls.find(url => url.id === id);

    if (!target) {
      reject(`Unable to find shorten URL with ID='${id}'.`);
    }

    resolve(target.url);
  });
}

export function add(url) {
  return new Promise((resolve) => {
    let urlToShorten = {
      id: shortId.generate(),
      url: url
    };

    urls.push(urlToShorten);

    resolve(urlToShorten);
  });
}
