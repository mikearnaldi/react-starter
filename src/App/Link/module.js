import {push} from '../../router'
import {Observable} from 'rxjs'

export const CLICKED = '@@link/CLICKED'

export const linkActions = {
  clicked: (to) => ({type: CLICKED, payload: {
    to: to
  }}),
}

export const linkEpics = (action$, store) => {
  return action$
  .ofType(CLICKED)
  .debounce(action => Observable.interval(100))
  .map(action => action.payload.to)
  .map(to => push(to))
}
