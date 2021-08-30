const path = require('path')
const express = require('express')
const app = express(),
  DIST_DIR = path.join(path.resolve(), 'dist'),
  HTML_FILE = path.join(DIST_DIR, 'index.html')
app.use(express.static(DIST_DIR))
app.get('*', (req, res) => {
  res.sendFile(HTML_FILE)
})
const PORT = process.env.PORT || 80
app.listen(PORT, () => {
  console.log(`Production app listening to ${PORT}....`)
})