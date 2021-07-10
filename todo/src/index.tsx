import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import { todosReducer } from './reducers'

type ts = {
  id: number
  title: string
  isActive: true
}

const store = createStore(
  combineReducers<
    (tasks: ts[], action: { type: string; payload?: ts }) => ts[]
  >({ todos: todosReducer })
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
