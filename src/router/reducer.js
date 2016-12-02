export const LOCATION_CHANGE = '@@router/LOCATION_CHANGE'

export const createRouterReducer = history => {
  const initState = {
    location: history.location,
    action: history.action,
  }
  return function reducer(state = initState, action) {
    if (action.type === LOCATION_CHANGE) {
      return { ...state, location: action.payload }
    }

    return state
  }
}
