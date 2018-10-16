export const genresTypeDef = `
type Genre {
    id: Int!
    name: String!
    description: String
}
input GenreInput {
    name: String!
    description: String
}`;

export const genresQueries = `
    allGenres: [Genre]!
    genreById(genre_id: Int!): Genre!
    genreByName(name: String!): [Genre]!
    booksOfGenre(genre_id: Int!): [Book]!
`;

export const genresMutations = `
    createGenre(genre: GenreInput!): Boolean
    updateGenre(genre_id: Int!, genre: GenreInput!): Boolean
    deleteGenre(genre_id: Int!): Boolean
`;
