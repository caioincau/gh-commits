export function setRepos(repos) {
  return {
    type: 'SET_REPOS',
    repos
  }
}

export function clearCommits(commits) {
  return {
    type: 'CLEAR_COMMITS',
    commits
  }
}

export function addCommits(commits) {
  return {
    type: 'ADD_COMMITS',
    commits
  }
}
