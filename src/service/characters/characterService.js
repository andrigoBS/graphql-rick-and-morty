import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
  query getCharacters($page: Int!){
  characters(page: $page) {
    info {
      count
      pages
    }
    results {
      id
      name
      image
      origin{
        name
      }
      location{
        name
      }
      episode{
        id
        name
      }
    }
  }
}
`;

export const GET_CHARACTERS_BY_NAME = gql`
  query getCharacters($page: Int!, $search: String!){
  characters(page: $page, filter: { name: $search }) {
    info {
      count
      pages
    }
    results {
      id
      name
      image
      origin{
        name
      }
      location{
        name
      }
      episode{
        id
        name
      }
    }
  }
}
`;
