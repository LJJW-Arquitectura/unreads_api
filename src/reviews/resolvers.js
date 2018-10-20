import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allReviews: (_) =>
			getRequest(URL, ''),
		reviewByCode: (_, { code }) =>
			getRequest(`${URL}/${code}`, ''),
	},
	Mutation: {
		createReview: (_, { review }) =>
			generalRequest(`${URL}`, 'POST', review),
		updateReview: (_, { code, review }) =>
			generalRequest(`${URL}/${code}`, 'PUT', review),
		deleteReview: (_, { code }) =>
			generalRequest(`${URL}/${code}`, 'DELETE')
	}
};

export default resolvers;
