/*
 * Copyright (c) 2025 Jaehong Park <jaehong1972@gmail.com>
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

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

  if (url.includes('cfpwwwapi.kbs.co.kr')) {
    request({ url: url, followRedirect: true }, (error, response, body) => {
      if (error) {
        console.error('[Proxy] KBS API request error for', url, ':', error);
        return res.status(500).send('Error fetching from KBS API');
      }

      try {
        const data = JSON.parse(body);
        const streamUrl = data.channel_item[0].service_url;
        console.log(`[Proxy] KBS stream URL: ${streamUrl}`);
        request({ url: streamUrl, followRedirect: true, encoding: null })
          .on('error', function(err) {
            console.error('[Proxy] Request error for', streamUrl, ':', err);
            res.status(500).send('Error fetching the stream');
          })
          .pipe(res);
      } catch (e) {
        console.error('[Proxy] Error parsing KBS API response or getting stream URL:', e);
        res.status(500).send('Error processing KBS API response');
      }
    });
  } else {
    request({ url: url, followRedirect: true, encoding: null })
      .on('error', function(err) {
        console.error('[Proxy] Request error for', url, ':', err);
        res.status(500).send('Error fetching the stream');
      })
      .on('response', function(response) {
        console.log(`[Proxy] Response status for ${url}: ${response.statusCode}`);
      })
      .pipe(res);
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server is running and listening on port ${PORT}`);
});