import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}/authors`;

const resolvers = {
	Query: {
		allAuthors: (_) =>
			getRequest(`${URL}`, ''),
    authorById: (_, { author_id }) =>
      generalRequest(`${URL}/${author_id}`, 'GET'),
    authorByName: (_, { name }) =>
      generalRequest(`${URL}/name/${name}`, 'GET'), 
    booksOfAuthor: (_, { author_id }) =>
      generalRequest(`${URL}/${author_id}/books`, 'GET'),
	},
	Mutation: {
		createAuthor: (_, { author }) =>
			generalRequest(`${URL}`, 'POST', author),
    updateAuthor: (_, { author_id, author }) =>
      generalRequest(`${URL}/${author_id}`, 'PUT', author),
    deleteAuthor: (_, { author_id }) =>
      generalRequest(`${URL}/${author_id}`, 'DELETE'),
	}
};

export default resolvers;
