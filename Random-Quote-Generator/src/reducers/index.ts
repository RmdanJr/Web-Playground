import { stateType, quoteType } from '../types'

const initialQuotes: stateType = {
  randomQuote: [],
  authorQuotes: [],
}
export const quotesReducer = (
  quotes = initialQuotes,
  action: { type: string; payload: quoteType[] }
) => {
  switch (action.type) {
    case 'GET_RANDOM_QUOTE':
      return { ...quotes, randomQuote: action.payload }
    case 'GET_AUTHOR_QUOTES':
      return { ...quotes, authorQuotes: action.payload }
    default:
      return quotes
  }
}
