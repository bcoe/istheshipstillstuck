#!/usr/bin/env node

// TODO(bcoe): find way to use more bleeding edge Node.js features:
import fetch from  'node-fetch';
const resp = await fetch('https://istheshipstillstuck.com/', {
  method: 'get'
})
if (resp.status !== 200) {
  throw Error(`unexpected status ${resp.status}`)
} else {
  // Scrape https://istheshipstillstuck.com/
  const content = await resp.text()
  // TODO(@bcoe): this regex is an abomination, make it better:
  const match = content.match(/1376379027393482761[^>]+\>(?<answer>[^<]+)/)
  console.info(match.groups.answer)
}
