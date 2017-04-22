import express from 'express';
import path from 'path';
import config from './config';
const app = express();

app.get('/static/*.css', (req, res, next) => {
    req.url = req.url + '.gz';
    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', 'text/css')
    next();
});

app.get('/static/*.js', (req, res, next) => {
    req.url = req.url + '.gz';
    res.set('Content-Encoding', 'gzip');
    next();
});

// Serve all static assets directly
app.use('*/static', express.static('static'));

// All other URLs get redirected to index.html
// TODO either handle 404s here, or handle them in React. Either way.
app.get('*', (req, res) => {
    res.sendFile(path.resolve('static/index.html'));
});

app.get('/api/*', (req, res) => {
    // let ajaxResult = ajax('localhost:8080', payload)
    res.sendFile('yo');
});

let server = app.listen(config.port, () => {
    console.log('Server running at http://localhost:' + server.address().port);
});
