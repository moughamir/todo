import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Tasks from './components/Tasks.jsx'
import store from './store'

// https://picturepan2.github.io/spectre/getting-started.html
import 'spectre.css/dist/spectre.min.css'
import 'spectre.css/dist/spectre-icons.min.css'
import 'spectre.css/dist/spectre-exp.min.css'

const Root = ({ store }) => (
  <Router>
    <Provider store={store}>
      <Route path='/' component={Tasks} />
    </Provider>
  </Router>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

const rootElement = document.getElementById('root')

ReactDOM.render(
  <Root store={store} />,
  rootElement
)
