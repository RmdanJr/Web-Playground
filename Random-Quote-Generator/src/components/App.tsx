import Header from './Header'
import Quote from './Quote'
import Author from './Author'

import '../styles/App.css'

const App: React.FC = () => {
  return (
    <div className='app'>
      <Header />
      <Quote />
      <Author />
    </div>
  )
}

export default App
