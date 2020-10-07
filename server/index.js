const express = require('express');
const path = require('path');
let app = express();

let port = 3000;

const {createProxyMiddleware} = require('http-proxy-middleware');

app.use('/rooms/:roomId', express.static(__dirname + '/../client/'));

//app.use('/rooms/:roomId', express.static(path.join(__dirname, 'public')));
//app.use('/rooms/:roomId/', express.static(path.join(__dirname, 'client/src')));

app.use('/api/photogallery/:roomId', createProxyMiddleware({target: 'http://localhost:3001', changeOrigin: true}));
app.use('/api/calendar', createProxyMiddleware({target: 'http://localhost:3002', changeOrigin: true}));
app.use('/api/rooms/:roomId', createProxyMiddleware({target: 'http://localhost:3003', changeOrigin: true}));
app.use('/api/more_places', createProxyMiddleware({target: 'http://localhost:3004', changeOrigin: true}));


app.listen(port, function () {
  console.log(`listening on port ${port}`);
});