import { fetchMovieByName } from '../index';
import { movieData } from '../../resources/mockData/movieData';

jest.mock('../__mocks__/fetch');

describe('Fetch Movie Name Service', () => {
  it('fetch movie from the service by name', async() => {
    const data = await fetchMovieByName('batman');
    const json = await data.json();
    return expect(json).toEqual(movieData);
  });
})

// describe('Fetch movie name service using mock api call', () => {
//   it('fetch movie data using a mock network call', () => {
//     expect.assertions(1);
//     return expect(fetchMovieByName('batman')).resolves.toEqual(movieData);
//   })
// })