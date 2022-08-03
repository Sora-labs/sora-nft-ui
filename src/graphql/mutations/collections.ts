import { gql } from "@apollo/client";

const ADD_COLLECTION = gql`
    mutation(
        $name: String!,
        $description: String!,
        $avatar: String!,
        $background: String!,
        $ownerId: String!,
    ) {
        addCollection(
            name: $name,
            description: $description,
            avatar: $avatar,
            background: $background,
            ownerId: $ownerId,
        ) {
            name
            ownerId
            avatar
        }
    }
`

export { ADD_COLLECTION }