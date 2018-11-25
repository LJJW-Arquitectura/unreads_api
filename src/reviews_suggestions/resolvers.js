import { generalRequest, getRequest,generalRequestWA } from '../utilities';
import { url, port, entryPointReviews, entryPointSuggestions, entryPointAVG, entryPointBookReviews, entryPointBookSuggestions, entryPointUserReviews, entryPointUserSuggestions } from './server';

const ReviewsURL = `http://${url}:${port}/${entryPointReviews}`;
const SuggestionsURL = `http://${url}:${port}/${entryPointSuggestions}`;
const AVGURL = `http://${url}:${port}/${entryPointAVG}`;
const BookReviewsURL = `http://${url}:${port}/${entryPointBookReviews}`;
const BookSuggestionsURL = `http://${url}:${port}/${entryPointBookSuggestions}`;
const UserReviewsURL = `http://${url}:${port}/${entryPointUserReviews}`;
const UserSuggestionsURL = `http://${url}:${port}/${entryPointUserSuggestions}`;

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
		bookSuggestionsByCode: (_, { code }) =>
			getRequest(`${BookSuggestionsURL}/${code}`, ''),
		userReviewsByCode: (_, { code },context) =>
			generalRequestWA(`${UserReviewsURL}/${code}` , 'GET',{user_id: code},context.token),
		userSuggestionsByCode: (_, { code },context) =>
			generalRequestWA(`${UserSuggestionsURL}/${code}`, 'GET',{user_id: code},context.token),
	},
	Mutation: {
		createReview: (_, { review },context) =>
			generalRequest(`${ReviewsURL}`, 'POST', review ,context.token),
		updateReview: (_, { code, review },context) =>
			generalRequest(`${ReviewsURL}/${code}`, 'PUT', review,context.token),
		deleteReview: (_, { code },context) =>
			generalRequest(`${ReviewsURL}/${code}`, 'DELETE',context.token),

		createSuggestion: (_, { suggestion },context) =>
			generalRequest(`${SuggestionsURL}`, 'POST', suggestion,context.token),
		updateSuggestion: (_, { code, suggestion },context) =>
			generalRequest(`${SuggestionsURL}/${code}`, 'PUT', suggestion,context.token),
		deleteSuggestion: (_, { code },context) =>
			generalRequest(`${SuggestionsURL}/${code}`, 'DELETE',context.token)
	}
};

export default resolvers;
