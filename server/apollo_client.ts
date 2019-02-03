import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import fetch from 'cross-fetch'

export const apolloClient = new ApolloClient({
  ssrMode: true,
  link: createHttpLink({
    uri: 'https://api-useast.graphcms.com/v1/cjpppfzbh4ghm01g03ys7sjn4/master',
    fetch,
    headers: {
      authorization:
        'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2ZXJzaW9uIjoxLCJ0b2tlbklkIjoiM2FkZWE0NWQtZmM2NC00M2EwLWFhNzAtNzRmNTBhM2E4NDZiIn0.NjUtyQTGTa9uKb70rJnIthdsOuMm3UkREFDCzU13cuk'
    }
  }),
  cache: new InMemoryCache()
})
