const { ApolloClient, InMemoryCache, makeVar } = require("@apollo/client");

export const isLoggedInVar = makeVar(false)

const client = new ApolloClient({
  uri: "https://bitter-skunk-57.loca.lt/graphql",
  cache: new InMemoryCache()
})


export default client
