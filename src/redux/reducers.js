import { combineReducers } from 'redux'
import { createRouterReducer, history } from '../router'
import { drawerReducer as drawer } from '../App/Drawer/module'

export default combineReducers({
  routing: createRouterReducer(history),
  drawer: drawer
})
