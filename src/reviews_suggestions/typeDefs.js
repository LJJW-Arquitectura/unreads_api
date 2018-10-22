export const reviewsTypeDef = `
type Review {
    review_id: Int
    book_id: Int
    booktitle: String
    user_id: Int
    username: String
    creationdate: String
    review: String
    grade: Int
}

input ReviewInput {
    book_id: Int!
    booktitle: String!
    user_id: Int!
    username: String!
    review: String!
    grade: Int!
}

type AnswerReview{
    message: String!
    results: [Review]
}`;

export const suggestionsTypeDef = `
type Suggestion {
    suggestion_id: Int
    user_id: Int
    username: String
    book_id1: Int
    booktitle1: String
    book_id2: Int
    booktitle2: String
    reason: String
}
input SuggestionInput {
    user_id: Int!
    username: String!
    book_id1: Int!
    booktitle1: String!
    book_id2: Int!
    booktitle2: String!
    reason: String!
}

type AnswerSuggestion{
    message: String!
    results: [Suggestion]
}`;

export const avgTypeDef = `
type AVG{
    Avg: Float!
}

type AnswerAVG{
    results:[AVG]
}`;

export const reviewsQueries = `
    allReviews: AnswerReview!
    reviewByCode(code: Int!): AnswerReview!
`;

export const reviewsMutations = `
    createReview(review: ReviewInput!): AnswerReview!
    deleteReview(code: Int!): AnswerReview!
    updateReview(code: Int!, review: ReviewInput!): AnswerReview!
`;

export const suggestionsQueries = `
    allSuggestions: AnswerSuggestion!
    suggestionByCode(code: Int!): AnswerSuggestion!
`;

export const suggestionsMutations = `
    createSuggestion(suggestion: SuggestionInput!): AnswerSuggestion!
    deleteSuggestion(code: Int!): AnswerSuggestion!
    updateSuggestion(code: Int!, suggestion: SuggestionInput!): AnswerSuggestion!
`;

export const otherQueries = `
    averageGradeByCode(code: Int!): AnswerAVG!
    bookReviewsByCode(code: Int!): AnswerReview!
    bookSuggestionsByCode(code: Int!): AnswerSuggestion!
    userReviewsByCode(code: Int!): AnswerReview!
    userSuggestionsByCode(code: Int!): AnswerSuggestion!
`;
