#!/usr/bin/env node
// Populates title/thumbnail for news entries in src/data/media.ts by
// scraping each article's og:title / og:image at author time. Run this
// after adding a new { id, url, type: 'news' } entry — the site itself
// makes no runtime network calls for this, so page loads never hit an
// external unfurl API's daily limit.
//
// Usage: node scripts/fetch-media-metadata.mjs

import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '..', 'src', 'data', 'media.ts')
let source = readFileSync(dataPath, 'utf8')

// Matches one news object literal, e.g.:
// { id: 'news-002', url: '...', type: 'news', title: '...', thumbnail: '...' },
const entryRe = /\{\s*id:\s*'([^']+)',\s*url:\s*'((?:[^'\\]|\\.)*)',\s*type:\s*'news',(?:\s*title:\s*'((?:[^'\\]|\\.)*)',)?(?:\s*thumbnail:\s*'((?:[^'\\]|\\.)*)',)?\s*\}/g

function extractMeta(html, property) {
  const re = new RegExp(`<meta[^>]+(?:property|name)=["']${property}["'][^>]+content=["']([^"']+)["']`, 'i')
  const re2 = new RegExp(`<meta[^>]+content=["']([^"']+)["'][^>]+(?:property|name)=["']${property}["']`, 'i')
  return html.match(re)?.[1] ?? html.match(re2)?.[1] ?? null
}

function decodeEntities(str) {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
}

async function fetchMeta(url) {
  const res = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0 (compatible; IFNBot/1.0)' },
  })
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  const html = await res.text()
  const title = extractMeta(html, 'og:title') ?? html.match(/<title>([^<]+)<\/title>/i)?.[1]
  const image = extractMeta(html, 'og:image') ?? extractMeta(html, 'twitter:image')
  return {
    title: title ? decodeEntities(title.trim()) : undefined,
    thumbnail: image ? decodeEntities(image.trim()) : undefined,
  }
}

function escape(str) {
  return str.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\r?\n/g, ' ').trim()
}

// Skip commented-out entries (block lines starting with //).
const lines = source.split('\n')
const activeSource = lines.filter((line) => !line.trim().startsWith('//')).join('\n')

const entries = [...activeSource.matchAll(entryRe)].map((m) => ({
  raw: m[0],
  id: m[1],
  url: m[2],
  title: m[3],
  thumbnail: m[4],
}))

let changed = false
for (const entry of entries) {
  if (entry.title && entry.thumbnail) continue
  try {
    const meta = await fetchMeta(entry.url)
    const title = meta.title ?? entry.title
    const thumbnail = meta.thumbnail ?? entry.thumbnail
    let replacement = `{\n    id: '${entry.id}',\n    url: '${entry.url}',\n    type: 'news',`
    if (title) replacement += `\n    title: '${escape(title)}',`
    if (thumbnail) replacement += `\n    thumbnail: '${escape(thumbnail)}',`
    replacement += '\n  }'
    source = source.replace(entry.raw, replacement)
    changed = true
    console.log(`✓ ${entry.id} — ${title ?? '(no title)'}`)
  } catch (err) {
    console.warn(`✗ ${entry.id} — ${err.message}`)
  }
}

if (!changed) {
  console.log('Nothing to fetch — all news entries already have title + thumbnail.')
} else {
  writeFileSync(dataPath, source)
  console.log(`\nUpdated ${dataPath}`)
}

// A single article fetch failing (dead link, bot-blocked site) must never
// block the dev/build script chain.
process.exitCode = 0
