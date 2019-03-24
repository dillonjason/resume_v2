import * as React from 'react'
import * as ReactDOM from 'react-dom'
import createHistory from 'history/createBrowserHistory'
import { AppContainer } from 'react-hot-loader'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter } from 'react-router-dom'
import { Root } from './root'
import { apolloClient } from './apollo_client'

const history = createHistory()

const render = Root =>
  ReactDOM.hydrate(
    <AppContainer>
      <BrowserRouter>
        <ApolloProvider client={apolloClient}>
          <Root history={history} />
        </ApolloProvider>
      </BrowserRouter>
    </AppContainer>,
    document.getElementById('root')
  )

// Hot Module Replacement API
declare let module: { hot: any }

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./root', () => {
    const { Root } = require('./root')
    render(Root)
  })
}

render(Root)
