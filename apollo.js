const { ApolloClient, InMemoryCache } = require("@apollo/client");

const client = new ApolloClient({
  uri: "https://tall-moth-43.loca.lt/graphql",
  cache: new InMemoryCache()
})


export default client
