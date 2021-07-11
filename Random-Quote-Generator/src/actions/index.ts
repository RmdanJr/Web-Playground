import api from '../api'

export const getRandomQuote = () => {
  return async () => {
    const response = await api({}).get('/random')
    return {
      type: 'GET_RANDOM_QUOTE',
      payload: response.data,
    }
  }
}

export const getAuthorQuote = (author: string) => {
  return async () => {
    const response = await api({ author: author }).get('/')
    return {
      type: 'GET_AUTHOR_QUOTES',
      payload: response.data,
    }
  }
}
