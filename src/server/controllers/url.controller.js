import * as Url from '../models/url.memory';

import urlRegex from 'url-regex';

let isValidUrl = (url) => {
  return urlRegex({exact: true}).test(url);
};

let errorHelper = (errorMessage) => {
  return {
    error: errorMessage
  };
};

export function getUrls(req, res) {
  Url
    .getAll()
    .then(urls => res.json({ shortedUrls: urls }));
}

export function resolve(req, res) {
  Url
    .find(req.params.id)
    .then(url => res.redirect(301, url))
    .catch(error => res.status(500).send(errorHelper(error)));
}

export function shorten(req, res) {
  let url = req.body.url;

  if (!isValidUrl(url)) {
    return res.status(500).send(errorHelper(`Invalid URL: '${url}'.`));
  }

  Url
    .add(url)
    .then(shortened => res.json(shortened))
    .catch(error => res.status(500).send(errorHelper(error)))
}
