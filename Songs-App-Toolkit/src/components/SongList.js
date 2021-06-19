import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectSong } from '../actions'

const SongList = () => {
  const songs = useSelector(selectSongs)
  const dispatch = useDispatch()
  return (
    <div className='ui divided list'>
      {songs.map((song) => (
        <div className='item' key={song.title}>
          <div className='right floated content'>
            <button
              onClick={() => {
                dispatch(selectSong(song))
              }}
              className='ui button primary'
            >
              Select
            </button>
          </div>
          <div className='content'>{song.title}</div>
        </div>
      ))}
    </div>
  )
}

const selectSongs = (state) => state.songs

export default SongList
