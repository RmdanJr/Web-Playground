export type quoteType = {
  _id: string
  quoteText: string
  quoteAuthor: string
  quoteGenre: string
  __v: number
}

export type paramsType = {
  author?: string
  genre?: string
  query?: string
  page?: number
  limit?: number
}

export type stateType = {
  randomQuote: quoteType[]
  authorQuotes: quoteType[]
}
