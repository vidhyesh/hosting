const express = require('express')
const path = require('path')
const history = require('connect-history-api-fallback')
// ^ middleware to redirect all URLs to index.html

const app = express()
const staticFileMiddleware = express.static(path.join(__dirname, '/dist'))

app.use(staticFileMiddleware)
app.use(history())
app.use(staticFileMiddleware)
// ^ `app.use(staticFileMiddleware)` is included twice as per https://github.com/bripkens/connect-history-api-fallback/blob/master/examples/static-files-and-index-rewrite/README.md#configuring-the-middleware

app.get('/', function (req, res) {
  res.render(path.join(__dirname ,'/dist'))
})

app.listen(80, function () {
  console.log( 'Express serving on 80' )
})
