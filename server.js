const express = require('express');
const request = require('request');
const cors = require('cors');

const app = express();
const PORT = 3010;

app.use(cors());

app.get('/proxy', (req, res) => {
  const { url } = req.query;

  if (!url) {
    console.error('[Proxy] Error: URL is required');
    return res.status(400).send('URL is required');
  }

  console.log(`[Proxy] Attempting to proxy URL: ${url}`);

  request({ url: url, followRedirect: true, encoding: null })
    .on('error', function(err) {
      console.error('[Proxy] Request error for', url, ':', err);
      res.status(500).send('Error fetching the stream');
    })
    .on('response', function(response) {
      console.log(`[Proxy] Response status for ${url}: ${response.statusCode}`);
      // Optionally, log headers if needed for debugging
      // console.log('[Proxy] Response headers:', response.headers);
    })
    .pipe(res);
});

app.listen(PORT, () => {
  console.log(`Proxy server is running and listening on port ${PORT}`);
});
