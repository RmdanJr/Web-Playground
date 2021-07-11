import '../styles/Author.css'

const Author: React.FC = () => {
  return (
    <div className='author-container'>
      <div className='author'>
        <div className='author-name-container'>
          <p className='author-name'>Bill Gates</p>
          <p className='author-genre'>business</p>
        </div>
        <span className='material-icons-outlined author-icon'>
          arrow_right_alt
        </span>
      </div>
    </div>
  )
}

export default Author
