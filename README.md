# Url Shortener Code Test

## Requirements

We'd like you to create a URL shortening service.

- It should have a route where you can send a POST request with a URL in the body, which
returns a short URL.
- When you send a GET request to a previously returned URL, it should redirect to the
POSTed URL.
- We'd also like a simple frontend that can create and display shortened URLs without
reloading the page.
- For simplicity, don't worry about persisting the URLs between restarts (ie, we don't
need it to talk to an external database).

Use whatever languages and frameworks you are comfortable with. Don't worry about getting
the whole thing working flawlessly, this is more to see how you structure a program. Please
don't spend more than a few hours on it.

## Installation

Install all dependencies.

```
$ npm install
```

## Run

Starts the application.

```
$ npm start
```

## Development

Builds the application and starts its express web-server.

```
$ node run develop
```

* **Important**:  To run in build mode, make sure you have `nodemon` installed globally.

```
$ npm install -g nodemon
```

## Build

Generates a bundle version of the application in the public folder.

```
$ npm run build
```

## Server Configuration

Configurations for the server can be set in `src/server/config.js`.

```javascript
    const config = {
        port: process.env.PORT || 9090      // Set PORT for Express to use (defaults to 9090).
    };
```

## Submission

Please fork this repository, write some code and update this README with a guide of how to
run it.
