import * as Url from '../models/url.memory';

export function getUrls(req, res) {
  Url
    .getAll()
    .then(urls => res.json({ shortedUrls: urls }));
}

export function resolve(req, res) {
  Url
    .find(req.params.id)
    .then(target => res.redirect(301, target))
    .catch(error => res.redirect("/"));
}

export function shorten(req, res) {
  Url
    .add(req.body.url)
    .then(shortened => res.json(shortened))
    .catch(error => res.status(500).send(error))
}
