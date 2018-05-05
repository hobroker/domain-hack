const express = require('express')
const router = express.Router({})
const domains = require('../util/domains')

const DEFAULT_PREFIX = 'xxx'

const make = (phrase, source) => {
  // split phrase by top-level domain
  const [prefix, suffix] = phrase.split(source.tld)
  const name = prefix || DEFAULT_PREFIX
  const domain = `${name}.${source.tld}`
  const url = `${domain}/${suffix}`

  return { ...source, suffix, name, domain, url }
}

router.get('/', (req, res) => {
  const phrase = req.query.phrase.toLowerCase()
  const results = []
  domains.forEach(domain => {
    if (phrase.includes(domain.tld)) {
      const result = make(phrase, domain)
      results.push(result)
    }
  })
  res.status(200).json({
    success: true,
    value: results
  })
})

module.exports = router
