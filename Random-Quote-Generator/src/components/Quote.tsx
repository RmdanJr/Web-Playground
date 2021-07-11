import '../styles/Quote.css'

const Quote: React.FC<{ quoteContent: string }> = ({quoteContent}) => {
  return (
    <div className='quote-continaer'>
      <div className='flag'></div>
      <div className='quote-content'>“{quoteContent}”</div>
    </div>
  )
}

export default Quote
