import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: process.env.REACT_APP_API_BASE_URL,
    cache: new InMemoryCache(),
});
