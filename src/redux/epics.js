import { combineEpics } from 'redux-observable'
import { linkEpics } from '../App/Link/module'
import { drawerEpics } from '../App/Drawer/module'

export default combineEpics(linkEpics, drawerEpics)
