import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import {
	usersMutations,
	usersQueries,
	usersTypeDef
} from './users/typeDefs';

import {
	booklistMutations,
	booklistQueries,
	booklistTypeDef
} from './booklist/typeDefs';

import {
	booksMutations,
	booksQueries,
	booksTypeDef
} from './books/typeDefs';

import {
	reviewsMutations,
	reviewsQueries,
	reviewsTypeDef,
	suggestionsMutations,
	suggestionsQueries,
	suggestionsTypeDef,
	avgQuery,
	avgTypeDef,
	bookReviewsQuery,
} from './reviews_suggestions/typeDefs';


import booklistResolvers from './booklist/resolvers';
import booksResolvers from './books/resolvers';
import usersResolvers from './users/resolvers';
import reviews_suggestionsResolvers from './reviews_suggestions/resolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		booklistTypeDef,
		booksTypeDef,
		usersTypeDef,
		reviewsTypeDef,
		suggestionsTypeDef,
		avgTypeDef,
	],
	[
		booklistQueries,
		booksQueries,
		usersQueries,
		reviewsQueries,
		suggestionsQueries,
		avgQuery,
		bookReviewsQuery,
	],
	[
		booklistMutations,
		booksMutations,
		usersMutations,
		reviewsMutations,
		suggestionsMutations,
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
		reviews_suggestionsResolvers,
	)
});
