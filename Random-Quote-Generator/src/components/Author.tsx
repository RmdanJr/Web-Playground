import { useDispatch } from 'react-redux'
import { getAuthorQuote } from '../actions'

import '../styles/Author.css'

const Author: React.FC<{
  quoteAuthor: string
  quoteGenre: string
  setShowRandomQuote: (a: boolean) => void
}> = ({ quoteAuthor, quoteGenre, setShowRandomQuote }) => {
  const dispatch = useDispatch()
  const getAuthorQuotesHandler = () => {
    dispatch(getAuthorQuote(quoteAuthor))
    setShowRandomQuote(false)
  }
  return (
    <div className='author-container'>
      <div className='author' onClick={getAuthorQuotesHandler}>
        <div className='author-name-container'>
          <p className='author-name'>{quoteAuthor}</p>
          <p className='author-genre'>{quoteGenre}</p>
        </div>
        <span className='material-icons-outlined author-icon'>
          arrow_right_alt
        </span>
      </div>
    </div>
  )
}

export default Author
