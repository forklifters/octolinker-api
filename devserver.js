const http = require('http');
const handler = require('./src/handler.js');

http.createServer((req, res) => handler(req, res))
  .listen(3000);

console.log('Dev server is running');
console.log('Example request: http://localhost:3000/?npm=react');
