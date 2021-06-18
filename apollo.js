import AsyncStorage from "@react-native-async-storage/async-storage";

const { ApolloClient, InMemoryCache, makeVar, createHttpLink } = require("@apollo/client");
import { setContext } from "@apollo/client/link/context"

export const isLoggedInVar = makeVar(false)
export const tokenVar = makeVar("")
export const logUserIn = async (token) => {
  await AsyncStorage.multiSet([["token", token], ["loggedIn", JSON.stringify("yes")]])
  isLoggedInVar(true)
  tokenVar(token)
}
export const logUserOut = async () => {
  await AsyncStorage.removeItem("token")
  isLoggedInVar(false)
  tokenVar(null)
}

const httpLink = createHttpLink({
  uri: "https://bitter-skunk-57.loca.lt/graphql"
})

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      token: tokenVar()
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})


export default client
