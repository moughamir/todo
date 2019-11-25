import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { TodoReducers } from './reducers'

const store = createStore(
  TodoReducers,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
