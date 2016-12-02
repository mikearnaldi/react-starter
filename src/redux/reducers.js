import { combineReducers } from 'redux'
import { createRouterReducer, history } from '../router'
import { drawerReducer, drawerPath } from '../App/Drawer/module'

export default combineReducers({
  routing: createRouterReducer(history),
  [drawerPath]: drawerReducer
})
