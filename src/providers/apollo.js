import { ApolloCLient, InMemoryCache } from '@apollo/client'

const client = new ApolloCLient({
  uri: '',
  cache: new InMemoryCache(),
})

export default client
