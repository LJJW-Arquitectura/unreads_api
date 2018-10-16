import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}/genres`;

const resolvers = {
  Query: {
    allGenres: (_) =>
      getRequest(`${URL}`, ''),
    genreById: (_, { genre_id }) =>
      generalRequest(`${URL}/${genre_id}`, 'GET'),
    genreByName: (_, { name }) =>
      generalRequest(`${URL}/name/${name}`, 'GET'), 
    booksOfGenre: (_, { genre_id }) =>
      generalRequest(`${URL}/${genre_id}/books`, 'GET'),
  },
  Mutation: {
    createGenre: (_, { genre }) =>
      generalRequest(`${URL}`, 'POST', genre),
    updateGenre: (_, { genre_id, genre }) =>
      generalRequest(`${URL}/${genre_id}`, 'PUT', genre),
    deleteGenre: (_, { genre_id }) =>
      generalRequest(`${URL}/${genre_id}`, 'DELETE'),
  }
};

export default resolvers;
