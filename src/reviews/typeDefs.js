export const reviewsTypeDef = `
type Review {
    review_id: Int!
    book_id: Int!
    user_id: Int!
    creationdate: String!
    review: String!
    grade: Int!
}
input ReviewInput {
    book_id: Int!
    user_id: Int!
    review: String!
    grade: Int!
}

type Answer{
    message: String!
    results: [Review]
}`;

export const reviewsQueries = `
    allReviews: Answer!
    reviewByCode(code: Int!): Answer!
`;

export const reviewsMutations = `
    createReview(review: ReviewInput!): Answer!
    deleteReview(code: Int!): Answer!
    updateReview(code: Int!, review: ReviewInput!): Answer!
`;
