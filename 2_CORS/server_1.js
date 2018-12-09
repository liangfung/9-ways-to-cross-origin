const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
const html = fs.readFileSync(path.resolve(__dirname, './index.html'))
app.get('/', (req, res) => {
  res.end(html)
})

app.listen(3000)