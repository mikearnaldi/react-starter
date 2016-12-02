import { combineEpics } from 'redux-observable'
import { linkEpics } from '../App/Link/module'

export default combineEpics(linkEpics)
