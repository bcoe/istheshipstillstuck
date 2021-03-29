#!/usr/bin/env node

// TODO(bcoe): find way to use more bleeding edge Node.js features:
import fetch from  'node-fetch';
import cheerio from 'cheerio';
const resp = await fetch('https://istheshipstillstuck.com/', {
  method: 'get'
})
if (resp.status !== 200) {
  throw Error(`unexpected status ${resp.status}`)
} else {
  // Scrape https://istheshipstillstuck.com/
  const content = await resp.text()
  const $ = cheerio.load(content);
  const answer = $('h1').siblings('p').first().text()
  console.info(answer)
}
