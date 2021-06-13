import { configureStore } from '@reduxjs/toolkit'

const songsReducer = () => {
  return [
    { title: 'Hello!', duration: '4:55' },
    { title: 'It is you!', duration: '5:32' },
    { title: 'How about you!', duration: '3:09' },
    { title: 'Dear believer, believe in me:)', duration: '5:43' },
  ]
}

const selectedSongReducer = (state = null, action) => {
  if (action.type === 'SELECTED_SONG') {
    return action.payload
  }
  return state
}

export default configureStore({
  reducer: {
    songs: songsReducer,
    selectedSong: selectedSongReducer,
  },
})
