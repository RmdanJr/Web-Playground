import axios from 'axios'

const KEY = 'AIzaSyA42_Sjc8lHp6JfEzh2Ta1HMfGkq2TcExw'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
})
