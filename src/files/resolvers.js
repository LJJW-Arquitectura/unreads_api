import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}/file`;

const resolvers = {
	Query: {
	},
	Mutation: {
	}
};

export default resolvers;
