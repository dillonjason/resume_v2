import ApolloClient from 'apollo-boost'

export const apolloClient = new ApolloClient({
  uri: 'https://api-useast.graphcms.com/v1/cjpppfzbh4ghm01g03ys7sjn4/master',
  headers: {
    authorization:
      'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2ZXJzaW9uIjoxLCJ0b2tlbklkIjoiM2FkZWE0NWQtZmM2NC00M2EwLWFhNzAtNzRmNTBhM2E4NDZiIn0.NjUtyQTGTa9uKb70rJnIthdsOuMm3UkREFDCzU13cuk'
  }
})
