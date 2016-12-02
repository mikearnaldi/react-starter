import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import store from './redux/store'
import injectTapEventPlugin from 'react-tap-event-plugin'
import App from './App'
import Wrapper from './router/wrapper'

injectTapEventPlugin()

const MOUNT_NODE = document.getElementById('root')

ReactDOM.render(
  <AppContainer>
    <Provider store={store}><Wrapper><App /></Wrapper></Provider>
  </AppContainer>, MOUNT_NODE)

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept('./App', () => {
      const NextApp = require('./App').default;

      ReactDOM.render(
        <AppContainer>
          <Provider store={store}><Wrapper><NextApp /></Wrapper></Provider>
        </AppContainer>, MOUNT_NODE)
    })
  }

  if (window.devToolsExtension) {
    window.devToolsExtension.open()
  }
}
