const reducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_REPOS':
      return {
        ...state,
        repos: action.repos
      }
    case 'ADD_COMMITS':
      return {
        ...state,
        commits: action.commits
      }
    case 'CLEAR_COMMITS':
      return {
        ...state,
        commits: []
      }
    default:
      return state
  }
}

export default reducer
