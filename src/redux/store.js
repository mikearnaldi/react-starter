import { createStore, applyMiddleware, compose } from 'redux'
import { history, syncHistoryWithStore, createRouterMiddleware } from '../router'
import { createEpicMiddleware } from 'redux-observable'

import reducers from './reducers'
import epics from './epics'

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;
const routerMiddleware = createRouterMiddleware(history)
const epicsMiddleware = createEpicMiddleware(epics)
const enhancedCreateStore = composeEnhancers(applyMiddleware(routerMiddleware), applyMiddleware(epicsMiddleware))(createStore)

let store = enhancedCreateStore(reducers)

syncHistoryWithStore(history, store)

export default store
