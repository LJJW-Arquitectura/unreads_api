import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allBooklist: (_) =>
			generalRequest(`${URL}/booklist`, 'GET'),
		readbooks: (_, { user_id }) =>
			generalRequest(`${URL}/readbook/${user_id}`, 'GET'),			
		booklistsByUser: (_, { user_id }) =>
			generalRequest(`${URL}/booklist/${user_id}`, 'GET'),
		booklistByNameUser: (_, { user_id,name }) =>
			generalRequest(`${URL}/booklist/${user_id}/${name}`, 'GET'),
	},
	Mutation: {
		createBooklist: (_, { booklist }) =>
			generalRequest(`${URL}/booklist`, 'POST', booklist),
		updateBooklist: (_, { user_id,name,booklist }) =>
			generalRequest(`${URL}/booklist/${user_id}/${name}`, 'PUT', booklist),
		addBookToBooklist: (_, { user_id,name,book }) =>
			generalRequest(`${URL}/booklist/${user_id}/${name}/${book}`, 'PUT'),
		addBookToReadlist: (_, { user_id,book }) =>
			generalRequest(`${URL}/readbook/${user_id}/${book}`, 'PUT'),
		deleteBooklist: (_, { user_id,name }) =>
			generalRequest(`${URL}/booklist/${user_id}/${name}`, 'DELETE')
	}
};

export default resolvers;
