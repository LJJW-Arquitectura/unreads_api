import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allUsers: (_) =>
				getRequest(`${URL}`, ''),
		userById: (_, { user_id }) =>
				generalRequest(`${URL}/${user_id}`, 'GET'),
		userByUsernameAndPassword: (_, { username, password }) =>
				generalRequest(`${URL}/${username}/${password}`, 'GET'),
	},
	Mutation: {
		createUser: (_, { user }) =>
				generalRequest(`${URL}`, 'POST', user),
		updateUser: (_, { user_id, user }) =>
				generalRequest(`${URL}/${user_id}`, 'PUT', user),
	    deleteUser: (_, { user_id }) =>
				generalRequest(`${URL}/${user_id}`, 'DELETE'), 
	}
};

export default resolvers;
