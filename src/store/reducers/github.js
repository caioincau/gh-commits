const reducer = (state = { commits: [], repos: []}, action) => {
  switch (action.type) {
    case 'SET_REPOS':
      return {
        ...state,
        repos: state.repos.concat(action.repos)
      }
    case 'ADD_COMMITS':
      return {
        ...state,
        commits: state.commits.concat(action.commits)
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
