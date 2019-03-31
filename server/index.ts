import { sendMessage } from './send_message'
const express = require('express')
const webpack = require('webpack')
const bodyParser = require('body-parser')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackHotServerMiddleware = require('webpack-hot-server-middleware')
const clientConfig = require('../webpack/client.local')
const serverConfig = require('../webpack/server.local')
const clientConfigProd = require('../webpack/client.prod')
const serverConfigProd = require('../webpack/server.prod')

const { publicPath } = clientConfig.output
const outputPath = clientConfig.output.path
const DEV = process.env.NODE_ENV === 'development'
const app = express()

app.use(bodyParser.json())

app.post('/send_message', sendMessage)

let isBuilt = false
const done = () =>
  !isBuilt &&
  app.listen(3000, () => {
    isBuilt = true
    console.log('BUILD COMPLETE -- Listening @ http://localhost:3000')
  })

if (DEV) {
  const compiler = webpack([clientConfig, serverConfig])
  const clientCompiler = compiler.compilers[0]
  const options = {
    publicPath,
    stats: { colors: true },
    serverSideRender: true
  }
  const devMiddleware = webpackDevMiddleware(compiler, options)

  app.use(devMiddleware)
  app.use(webpackHotMiddleware(clientCompiler))
  app.use(webpackHotServerMiddleware(compiler))

  devMiddleware.waitUntilValid(done)
} else {
  webpack([clientConfigProd, serverConfigProd]).run((err, stats) => {
    const clientStats = stats.toJson().children[0]
    const serverRender = require('../build/server/main.js').default

    app.use(publicPath, express.static(outputPath))
    // app.get("*", render);
    app.use(serverRender({ clientStats }))

    done()
  })
}
