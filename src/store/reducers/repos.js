const reducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_REPOS':
      return [...state, ...action.repos]
    default:
      return state
  }
}

export default reducer
