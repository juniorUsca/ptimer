import '../styles/tailwind.css'

import { ApolloProvider } from '@apollo/client'
// import client from 'providers/apollo'

import { useApollo } from 'utils/graphql'

/* eslint-disable */
function MyApp ({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
/* eslint-enable */

export default MyApp
