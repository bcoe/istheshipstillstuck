#!/usr/bin/env node

// TODO(bcoe): find way to use more bleeding edge Node.js features:
import fetch from  'node-fetch';
const resp = await fetch('https://istheshipstillstuck.com/api/cut-to-the-chase', {
  method: 'get'
})
if (resp.status !== 200) {
  throw Error(`unexpected status ${resp.status}`)
} else {
  // Call https://istheshipstillstuck.com/ V1 API:
  const body = await resp.json()
  console.info(body.stuck)
}
