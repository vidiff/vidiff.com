import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'

import 'flexpad/dist/flexpad.css'
import 'bootstrap-spacing-utils'
import './index.css'

import theme from './theme'

import Layout from './components/Layout'
import Home from './scenes/Home'
import Pricing from './scenes/Pricing'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pricing" component={Pricing} />
        </Switch>
      </Layout>
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// import * as serviceWorker from './serviceWorker';
// serviceWorker.unregister();
