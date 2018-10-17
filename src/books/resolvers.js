import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}/books`;

const resolvers = {
	Query: {
		allBooks: (_) =>
			getRequest(`${URL}`, ''),
    bookById: (_, { book_id }) =>
      generalRequest(`${URL}/${book_id}`, 'GET'),
    bookByTitle: (_, { title }) =>
      generalRequest(`${URL}/title/${title}`, 'GET'),
	},
	Mutation: {
		createBook: (_, { book }) =>
			generalRequest(`${URL}`, 'POST', book),
    updateBook: (_, { book_id, book }) =>
      generalRequest(`${URL}/${book_id}`, 'PUT', book),
    deleteBook: (_, { book_id }) =>
      generalRequest(`${URL}/${book_id}`, 'DELETE'), 
	}
};

export default resolvers;
