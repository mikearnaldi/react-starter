import {Observable} from 'rxjs'

export const OPEN = '@@drawer/OPEN'
export const CLOSE = '@@drawer/CLOSE'
export const TOGGLE = '@@drawer/TOGGLE'

export const drawerPath = 'drawer'

export const drawerActions = {
  open: () => ({type: OPEN}),
  close: () => ({type: CLOSE}),
  toggle: () => ({type: TOGGLE})
}

export const drawerReducer = (state = {open: false}, {type}) => {
  switch (type) {
    case OPEN:
      return {...state, open: true}
    case CLOSE:
      return {...state, open: false}
    default:
      return state
  }
}

export const drawerEpics = (action$, store) => {
  return action$
  .ofType(TOGGLE)
  .debounce(action => Observable.interval(100))
  .map(action => {
    if (store.getState().drawer.open) {
      return drawerActions.close()
    } else {
      return drawerActions.open()
    }
  })
}
