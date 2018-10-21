import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPointReviews, entryPointSuggestions, entryPointAVG, entryPointBookReviews } from './server';

const ReviewsURL = `http://${url}:${port}/${entryPointReviews}`;
const SuggestionsURL = `http://${url}:${port}/${entryPointSuggestions}`;
const AVGURL = `http://${url}:${port}/${entryPointAVG}`;
const BookReviewsURL = `http://${url}:${port}/${entryPointBookReviews}`;

const resolvers = {
	Query: {
		allReviews: (_) =>
			getRequest(ReviewsURL, ''),
		reviewByCode: (_, { code }) =>
			getRequest(`${ReviewsURL}/${code}`, ''),
		allSuggestions: (_) =>
			getRequest(SuggestionsURL, ''),
		suggestionByCode: (_, { code }) =>
			getRequest(`${SuggestionsURL}/${code}`, ''),
		averageGradeByCode: (_, { code }) =>
			getRequest(`${AVGURL}/${code}`, ''),
		bookReviewsByCode: (_, { code }) =>
			getRequest(`${BookReviewsURL}/${code}`, ''),
	},
	Mutation: {
		createReview: (_, { review }) =>
			generalRequest(`${ReviewsURL}`, 'POST', review),
		updateReview: (_, { code, review }) =>
			generalRequest(`${ReviewsURL}/${code}`, 'PUT', review),
		deleteReview: (_, { code }) =>
			generalRequest(`${ReviewsURL}/${code}`, 'DELETE'),

		createSuggestion: (_, { suggestion }) =>
			generalRequest(`${SuggestionsURL}`, 'POST', suggestion),
		updateSuggestion: (_, { code, suggestion }) =>
			generalRequest(`${SuggestionsURL}/${code}`, 'PUT', suggestion),
		deleteSuggestion: (_, { code }) =>
			generalRequest(`${SuggestionsURL}/${code}`, 'DELETE')
	}
};

export default resolvers;
