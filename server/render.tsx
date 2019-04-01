import * as React from 'react'
import * as ReactDOM from 'react-dom/server'
import { Request, Response } from 'express'
import { flushChunkNames } from 'react-universal-component/server'
import flushChunks from 'webpack-flush-chunks'
import { ApolloProvider, getDataFromTree } from 'react-apollo'
import { StaticRouter } from 'react-router'

import { apolloClient } from './apollo_client'

import { Root } from '../src/root'

export default ({ clientStats }) => async (req: Request, res: Response) => {
  const app = (
    <StaticRouter location={req.url} context={{}}>
      <ApolloProvider client={apolloClient}>
        <Root />
      </ApolloProvider>
    </StaticRouter>
  )

  await getDataFromTree(app)
  const root = ReactDOM.renderToString(app)
  const initState = apolloClient.extract()

  const chunkNames = flushChunkNames()

  const { js, styles, cssHash, scripts, stylesheets } = flushChunks(
    clientStats,
    { chunkNames }
  )

  console.log('PATH', req.path)
  console.log('DYNAMIC CHUNK NAMES RENDERED', chunkNames)
  console.log('SCRIPTS SERVED', scripts)
  console.log('STYLESHEETS SERVED', stylesheets)

  res.send(
    `<!doctype html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="theme-color" content="#2E3440" />
          <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, target-densityDpi=device-dpi" />
          <title>Dillon Jason</title>
          ${styles}
        </head>
        <body>
          <div id="root" style='height: 100%'>${root}</div>
          <script>window.__APOLLO_STATE__=${JSON.stringify(initState).replace(
            /</g,
            '\\u003c'
          )};</script>
          ${cssHash}
          ${js}
        </body>
      </html>`
  )
}
