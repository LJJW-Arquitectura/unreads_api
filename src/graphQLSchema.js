import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

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

import {
  authorsMutations,
  authorsQueries,
  authorsTypeDef
} from './authors/typeDefs';

import {
  genresMutations,
  genresQueries,
  genresTypeDef
} from './genres/typeDefs';

import {
  filesMutations,
  filesQueries,
  filesTypeDef
} from './files/typeDefs';

import booklistResolvers from './booklist/resolvers';
import booksResolvers from './books/resolvers';
import authorsResolvers from './authors/resolvers';
import genresResolvers from './genres/resolvers';
import filesResolvers from './files/resolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		booklistTypeDef,
		booksTypeDef,
		authorsTypeDef,
		genresTypeDef,
		filesTypeDef
	],
	[
		booklistQueries,
		booksQueries,
		authorsQueries,
		genresQueries,
		filesQueries
	],
	[
		booklistMutation,
		booksMutations,
		authorsMutations,
		genresMutations,
		filesMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		booklistResolvers,
		booksResolvers,
		authorsResolvers,
		genresResolvers,
		filesResolvers
	)
});
