import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getRandomQuote } from '../actions'

import '../styles/Header.css'

const Header: React.FC<{ setShowRandomQuote: (a: boolean) => void }> = ({
  setShowRandomQuote,
}) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getRandomQuote())
  }, [dispatch])
  const getRandomHandler = () => {
    dispatch(getRandomQuote())
    setShowRandomQuote(true)
  }
  return (
    <div className='header'>
      <div className='icon-container' onClick={getRandomHandler}>
        <p className='icon-text'>random</p>
        <span className='material-icons-outlined auto-icon'>autorenew</span>
      </div>
    </div>
  )
}

export default Header
