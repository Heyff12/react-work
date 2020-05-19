/** @format */

import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  // uri: 'http://localhost:3001/graphql',
  uri: 'http://182.92.75.69:3001/graphql',
  // uri: 'https://48p1r2roz4.sse.codesandbox.io',
})

export default client
