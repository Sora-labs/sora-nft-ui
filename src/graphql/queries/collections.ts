import { gql } from "@apollo/client";

const getCollectionsByArtist = gql`
  query ($address: String!) {
    collections(ownerId: $address) {
      _id
      name
      avatar
      ownerId
      background
      owner {
        avatar
        address
      }
    }
  }
`;

export { getCollectionsByArtist };
