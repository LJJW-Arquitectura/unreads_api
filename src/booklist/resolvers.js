import { generalRequest, getRequest,generalRequestWA } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allBooklist: (_) =>
			generalRequest(`${URL}/booklist/`, 'GET'),
		readbooks: (_, { user_id },context) =>
			generalRequestWA(`${URL}/readbook/${user_id}`, 'GET',{user_id: user_id},context.token),			
		booklistsByUser: (_, { user_id },context) =>
			generalRequestWA(`${URL}/booklist/${user_id}`, 'GET',{user_id: user_id},context.token),
		booklistByNameUser: (_, { user_id,name }) =>
			generalRequest(`${URL}/booklist/${user_id}/${name}`, 'GET'),
	},
	Mutation: {
		createBooklist: (_, { booklist },context) =>
			generalRequestWA(`${URL}/booklist`, 'POST', booklist,context.token),
		updateBooklist: (_, { user_id,name,booklist },context) =>
			generalRequestWA(`${URL}/booklist/${user_id}/${name}`, 'PUT', booklist,context.token),
		addBookToBooklist: (_, { user_id,name,book },context) =>
			generalRequestWA(`${URL}/booklist/${user_id}/${name}/${book}`, 'PUT',{user_id: user_id}, context.token),
		addBookToReadlist: (_, { user_id,book },context) =>
			generalRequestWA(`${URL}/readbook/${user_id}/${book}`, 'PUT',{user_id: user_id}, context.token),
		deleteBooklist: (_, { user_id,name },context) =>
			generalRequestWA(`${URL}/booklist/${user_id}/${name}`, 'DELETE', {user_id: user_id}, context.token)
	}
};

export default resolvers;
