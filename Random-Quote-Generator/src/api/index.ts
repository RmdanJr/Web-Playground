import axios from 'axios'

import { paramsType } from '../types'

const api = (params: paramsType) => {
  return axios.create({
    baseURL: 'https://quote-garden.herokuapp.com/api/v3/quotes',
    params: params,
  })
}

export default api
