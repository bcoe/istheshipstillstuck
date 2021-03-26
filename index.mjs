#!/usr/bin/env node

import fetch from  'node-fetch';
const resp = await fetch('https://istheshipstillstuck.com/', {
  method: 'get'
})
if (resp.status !== 200) {
  throw Error(`unexpected status ${resp.status}`)
} else {
  // Scrape https://istheshipstillstuck.com/
  const content = await resp.text()
  const match = content.match(/6913909783548431618[^>]+\>(?<answer>[^<]+)/)
  console.info(match.groups.answer)
}
