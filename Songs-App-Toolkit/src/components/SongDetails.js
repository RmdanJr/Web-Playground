import React from 'react'
import { useSelector } from 'react-redux'

const SongDetail = () => {
  const song = useSelector(selectSelectedSong)
  if (!song) {
    return <div>Select a song</div>
  }
  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {song.title}
        <br />
        Duration: {song.duration}
      </p>
    </div>
  )
}

const selectSelectedSong = (state) => {
  return state.selectedSong
}

export default SongDetail
