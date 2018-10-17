export const booksTypeDef = `
type File {
    fileName: String
    fileType: String
    fileDownloadUri: String
    size: Int
}
type Book {
    id: Int!
    title: String!
    publisher: String
    numPages: Int
    isbn: String
    plot: String
    authors: [String]
    genres: [String]
    cover: File
}
input BookInput {
    title: String!
    publisher: String
    numPages: Int
    isbn: String
    plot: String
    authors: [String]
    genres: [String]
}`;

export const booksQueries = `
    allBooks: [Book]!
    bookById(book_id: Int!): Book!
    bookByTitle(title: String!): [Book]!
`;

export const booksMutations = `
    createBook(book: BookInput!): Book
    updateBook(book_id: Int!, book: BookInput!): Book
    deleteBook(book_id: Int!): Boolean
`;
