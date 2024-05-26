import gql from 'graphql-tag';

export const githubInfo = gql`
query {
    viewer {
        avatarUrl
        pinnedItems(first: 4, types: REPOSITORY) {
            nodes {
                ...on Repository {
                    id
                    name
                    description
                    url
                    stargazerCount
                }
            }
        }
    }
}
`;
