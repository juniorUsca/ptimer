import { useMemo } from 'react'
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
} from '@apollo/client'

let apolloClient

function createIsomorphLink () {
  return new HttpLink({
    uri: 'https://mi-time-tracker.hasura.app/v1/graphql', // Server URL (must be absolute)
    credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
  })
}

function createApolloClient () {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: createIsomorphLink(),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            // Reusable helper function to generate a field
            // policy for the Query.products field.
            products: {
              keyArgs: ['type', 'category', 'text'],
              merge (existing, incoming) {
                const { items: newItems } = incoming
                return existing
                  ? {
                    ...incoming,
                    items: [...existing.items, ...newItems],
                  }
                  : incoming
              },
            },
          },
        },
      },
    }),
  })
}

export function initializeApollo (initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient()

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract()
    // Restore the cache using the data passed from getStaticProps/getServerSideProps
    // combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...initialState })
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export function useApollo (initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
