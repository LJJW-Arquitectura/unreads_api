import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import {
	booklistMutation,
	booklistQueries,
	booklistTypeDef
} from './booklist/typeDefs';

import booklistResolvers from './booklist/resolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		booklistTypeDef
	],
	[
		booklistQueries
	],
	[
		booklistMutation
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		booklistResolvers
	)
});
