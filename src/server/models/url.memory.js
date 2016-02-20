import Promise from 'bluebird';

const url = [
  {
    id: "test",
    url: "http://google.com"
  }
];

let errorHelper = (errorMessage, reason) => {
  return {
    error: errorMessage,
    reason: reason
  };
};

export function getAll() {
  return new Promise((resolve, reject) => {
    resolve(url);
  });
}

export function find(id) {
  return new Promise((resolve, reject) => {
    reject(errorHelper(id));
  });
}

export function add(url) {
  return new Promise((resolve, reject) => {
    reject(errorHelper(`Unable to add ${url}.`, 'Invalid URL.'));
  });
}
