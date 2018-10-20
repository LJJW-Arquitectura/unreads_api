export const usersTypeDef = `
type User {
    id: Int!
    username: String
    email: String
    password: String
}
input UserInput {
    username: String
    email: String
    password: String
}`;

export const usersQueries = `
    allUsers: [User]!
    userById(user_id: Int!): User!
    userByUsernameAndPassword(username: String!, password: String!): [User]!
`;

export const usersMutations = `
    createUser(user: UserInput!): User
    updateUser(user_id: Int!, user: UserInput!): User
    deleteUser(user_id: Int!): Boolean
`;
