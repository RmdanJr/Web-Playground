import { useState } from 'react'
import { useSelector } from 'react-redux'
import { stateType } from '../types'

import Header from './Header'
import Quote from './Quote'
import Author from './Author'

import '../styles/App.css'

const App: React.FC = () => {
  const [showRandomQuote, setShowRandomQuote] = useState(true)
  const randomQuote = useSelector((state: stateType) => state.randomQuote)
  const authorQuotes = useSelector((state: stateType) => state.authorQuotes)
  return (
    <div className='app'>
      <Header setShowRandomQuote={setShowRandomQuote} />
      {showRandomQuote && randomQuote[0] ? (
        <>
          <Quote quoteContent={randomQuote[0].quoteText} />
          <Author
            quoteAuthor={randomQuote[0].quoteAuthor}
            quoteGenre={randomQuote[0].quoteGenre}
            setShowRandomQuote={setShowRandomQuote}
          />
        </>
      ) : !showRandomQuote && authorQuotes[0] ? (
        authorQuotes.map((quote) => (
          <Quote key={quote._id} quoteContent={quote.quoteText} />
        ))
      ) : null}
    </div>
  )
}

export default App
