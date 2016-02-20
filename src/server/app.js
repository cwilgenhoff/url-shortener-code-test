'use strict';

import Express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

// Initialize the Express App
const app = new Express();

import serverConfig from './config';
import urlRoutes from './routes/url.routes';

app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: true }));
app.use(Express.static(path.resolve(__dirname, '../client/public')));

app.use('/api', urlRoutes);

// start app
app.listen(serverConfig.port, (error) => {
    if (!error) {
        console.log(`URL Shortener is running on port: ${serverConfig.port}!`);
    }
});

export default app;