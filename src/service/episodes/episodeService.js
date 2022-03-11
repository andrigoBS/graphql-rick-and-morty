import { gql } from '@apollo/client';

export const GET_EPISODES = gql`
  query getEpisodes($page: Int!){
  episodes(page: $page) {
    info {
      count
      pages
    }
    results {
      id
      name
      air_date
      characters{
        id
        name
        image
      }
    }
  }
}
`;

export const GET_EPISODES_BY_NAME = gql`
  query getEpisodes($page: Int!, $search: String!){
  episodes(page: $page, filter: { name: $search }) {
    info {
      count
      pages
    }
    results {
      id
      name
      air_date
      characters{
        id
        name
        image
      }
    }
  }
}
`;
