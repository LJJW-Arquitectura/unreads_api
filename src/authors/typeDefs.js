export const authorsTypeDef = `
type Author {
    id: Int!
    name: String!
    description: String
    photo: File
}
input AuthorInput {
    name: String!
    description: String
}`;

export const authorsQueries = `
    allAuthors: [Author]!
    authorById(author_id: Int!): Author!
    authorByName(name: String!): [Author]!
    booksOfAuthor(author_id: Int!): [Book]!
`;

export const authorsMutations = `
    createAuthor(author: AuthorInput!): Boolean
    updateAuthor(author_id: Int!, author: AuthorInput!): Boolean
    deleteAuthor(author_id: Int!): Boolean
`;
