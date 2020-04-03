const defaultState = {
  name: 'default name'
}

export default function counter(state = defaultState, action) {
  switch (action.type) {
    case 'INITACTION':
      return action.data
    case 'CHANGE_NAME':
      return {...action.data, name: 'Stefan'}
    default:
      return state
  }
}