export const booksTypeDef = `
type Book {
    id: Int!
    title: String!
    publisher: String
    numPages: Int
    isbn: Int
    plot: String
    cover: File
}
input BookInput {
    title: String!
    publisher: String
    numPages: Int
    isbn: Int
    plot: String
}`;

export const booksQueries = `
    allBooks: [Book]!
    bookById(book_id: Int!): Book!
    bookByTitle(title: String!): [Book]!
    authorsOfBook(book_id: Int!): [Author]!
    genresOfBook(book_id: Int!): [Genre]!
`;

export const booksMutations = `
    createBook(book: BookInput!): Boolean
    addAuthorToBook(book_id: Int!, author_id: Int!): Boolean
    addGenreToBook(book_id: Int!, genre_id: Int!): Boolean
    updateBook(book_id: Int!, book: BookInput!): Boolean
    deleteBook(book_id: Int!): Boolean
    removeAuthorOfBook(book_id: Int!, author_id: Int!): Boolean
    removeGenreOfBook(book_id: Int!, genre_id: Int!): Boolean
`;
