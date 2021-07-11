import axios from 'axios'

interface parameters {
  author?: string
  genre?: string
  query?: string
  page?: number
  limit?: number
}

const api = (params: parameters) => {
  return axios.create({
    baseURL: 'https://quote-garden.herokuapp.com/api/v3/quotes',
    params: params,
  })
}

export default api
