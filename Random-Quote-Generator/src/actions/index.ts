import { Dispatch } from 'redux'
import api from '../api'

export const getRandomQuote = () => {
  return async (dispatch: Dispatch) => {
    const response = await api({}).get('/random')
    dispatch({
      type: 'GET_RANDOM_QUOTE',
      payload: response.data.data,
    })
  }
}

export const getAuthorQuote = (author: string) => {
  return async (dispatch: Dispatch) => {
    const response = await api({ author: author }).get('/')
    dispatch({
      type: 'GET_AUTHOR_QUOTES',
      payload: response.data.data,
    })
  }
}
