const path = require('path')
const express = require('express')
const app = express(),
  DIST_DIR = path.join(path.resolve(), 'dist'),
  HTML_FILE = path.join(DIST_DIR, 'index.html')
app.use(express.static(DIST_DIR))
app.get('*', (req, res) => {
  res.sendFile(HTML_FILE)
})
const PRODUCTION_PORT = process.env.PRODUCTION_PORT || 8080
app.listen(PRODUCTION_PORT, () => {
  console.log(`Production app listening to ${PRODUCTION_PORT}....`)
})