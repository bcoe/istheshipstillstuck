#!/usr/bin/env node

// TODO(bcoe): find way to use more bleeding edge Node.js features:
import { get } from 'https';
get('https://istheshipstillstuck.com/api/cut-to-the-chase', (resp) => {
  if (resp.statusCode !== 200) {
    throw Error(`unexpected status ${resp.statusCode}`)
  }
  resp.on('data', (data) => {
    console.info(JSON.parse(data.toString()).stuck);
  });
}).on('error', (e) => {
  console.error(e);
});
