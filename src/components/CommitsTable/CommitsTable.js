import React, { Component } from 'react';
import CommitItem from '../CommitItem'

class CommitsTableContainer extends Component {

  render() {
    const commits = this.props.filter ? this.filterCommits(this.props.commits, this.props.filter) : this.props.commits
    return <CommitsTable commits={commits} />
  }

  filterCommits(commits, filter) {
    return (commits && filter) ? commits.filter(commit => commit.commit.message.toLowerCase().includes(filter.toLowerCase())) : commits
  }

}

const CommitsTable = ({commits}) => (
  <table className="commits-table">
    <tbody>
      { commits && commits.map(commit => <CommitItem key={commit.sha} commit={commit}></CommitItem>) }
    </tbody>
  </table>
)


export default CommitsTableContainer
