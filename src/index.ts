import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World from TypeScript and HTTP/2!');
});

app.get('env', () => process.env.NODE_ENV || 'development');

if (app.get('env') === 'production') {
  const http2 = require('http2');
  const https = require('https');

  const server = https.createServer({
    allowHTTP2: true,
  });

  app.set('https', server);
}

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
