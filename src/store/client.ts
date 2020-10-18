import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

export const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:8080/v1/graphql' }),
  cache: new InMemoryCache(),
})
