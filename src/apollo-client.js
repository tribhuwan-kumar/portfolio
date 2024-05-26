import  { ApolloClient, InMemoryCache} from '@apollo/client'

const githubClient = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
    },
    cache: new InMemoryCache(),
});

export { githubClient };
