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
    authorsOfBook: (_, { book_id }) =>
      generalRequest(`${URL}/${book_id}/authors`, 'GET'),
    genresOfBook: (_, { book_id }) =>
      generalRequest(`${URL}/${book_id}/genres`, 'GET'),
	},
	Mutation: {
		createBook: (_, { book }) =>
			generalRequest(`${URL}`, 'POST', book),
    addAuthorToBook: (_, { book_id, author_id }) =>
      generalRequest(`${URL}/${book_id}/author/${author_id}`, 'POST'),
    addGenreToBook: (_, { book_id, genre_id }) =>
      generalRequest(`${URL}/${book_id}/genre/${genre_id}`, 'POST'),
    updateBook: (_, { book_id, book }) =>
      generalRequest(`${URL}/${book_id}`, 'PUT', book),
    deleteBook: (_, { book_id }) =>
      generalRequest(`${URL}/${book_id}`, 'DELETE'),
    removeAuthorOfBook: (_, { book_id, author_id }) =>
      generalRequest(`${URL}/${book_id}/author/${author_id}`, 'DELETE'),
    removeGenreOfBook: (_, { book_id, genre_id }) =>
      generalRequest(`${URL}/${book_id}/genre/${genre_id}`, 'DELETE'),  
	}
};

export default resolvers;
