import '../styles/Quote.css'

const Quote: React.FC = () => {
  return (
    <div className='quote-continaer'>
      <div className='flag'></div>
      <div className='quote-content'>
        “The first rule of any technology used in a business is that automation
        applied to an efficient operation will magnify the efficiency. The
        second is that automation applied to an inefficient operation will
        magnify the inefficiency.”
      </div>
    </div>
  )
}

export default Quote
