import { Quotes } from '../types'

const initialQuotes: Quotes = []
export const quotesReducer = (
  quotes = initialQuotes,
  action: { type: string; payload: Quotes[] }
) => {
  switch (action.type) {
    case 'GET_RANDOM_QUOTE':
      return action.payload
    case 'GET_AUTHOR_QUOTES':
      return action.payload
    default:
      return quotes
  }
}
