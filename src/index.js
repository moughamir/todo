import React from 'react'
import ReactDOM from 'react-dom'
import Tasks from './components/Tasks.jsx'
import { Provider } from 'react-redux'
import store from './store'
// https://picturepan2.github.io/spectre/getting-started.html
import 'spectre.css/dist/spectre.min.css'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <Tasks />
  </Provider>,
  rootElement
)
