export const booklistTypeDef = `
type Booklist {    
    name: String!
    user: String!
    user_id: Int!
    books: [Int]!
    date_creation: String!
    date_update: String!
}
type Readlist {       
    user_id: Int!
    books: [Int]!
}
input BooklistInput {
    name: String!
    user: String!
    user_id: Int!
    books: [Int]!
}
input BooklistInput2 {
    name: String
    books: [Int]
}`;

export const booklistQueries = `
    allBooklist: [Booklist]!    
    readbooks(user_id: Int!): Readlist
    booklistsByUser(user_id: Int!): [Booklist]!
    booklistByNameUser(user_id: Int! ,name: String!): Booklist!
`;

export const booklistMutation = `
    createBooklist(booklist: BooklistInput!): Booklist!
    deleteBooklist(user_id: Int!,name: String!): Int
    updateBooklist(user_id: Int!,name: String!, booklist: BooklistInput2!): Int
    addBookToBooklist(user_id: Int!,name: String!, book: Int!): Int
    addBookToReadlist(user_id: Int!, book: Int!): Int
`;

