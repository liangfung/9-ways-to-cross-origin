const express = require('express')
const app = express()

const whiteList = [
  'http://localhost:3000'
]

app.use((req, res, next) => {
  let { origin } = req.headers
  console.log(req.headers)
  if (whiteList.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin)
  }
  next()
})

app.get('/api/a', (req, res) => {
  res.end('ok')
})

app.listen(8000)
console.log('listen on port 8000')