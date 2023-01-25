// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

import { API_KEY } from '../keys/api';

const tmdbAPI = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: API_KEY,
  },
});

export { tmdbAPI };
