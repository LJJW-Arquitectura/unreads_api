import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import {
	usersMutation,
	usersQueries,
	usersTypeDef
} from './users/typeDefs';

import {
	booklistMutation,
	booklistQueries,
	booklistTypeDef
} from './booklist/typeDefs';

import {
	booksMutations,
	booksQueries,
	booksTypeDef
} from './books/typeDefs';

import booklistResolvers from './booklist/resolvers';
import booksResolvers from './books/resolvers';
import usersResolvers from './users/resolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		booklistTypeDef,
		booksTypeDef,
		usersTypeDef,
	],
	[
		booklistQueries,
		booksQueries,
		usersQueries,
	],
	[
		booklistMutation,
		booksMutations,
		usersMutations,
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		booklistResolvers,
		booksResolvers,
		usersResolvers,
	)
});
