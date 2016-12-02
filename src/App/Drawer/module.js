export const OPEN = '@@drawer/OPEN'
export const CLOSE = '@@drawer/CLOSE'
export const TOGGLE = '@@drawer/TOGGLE'

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
    case TOGGLE:
      return {...state, open: !state.open}
    default:
      return state
  }
}
