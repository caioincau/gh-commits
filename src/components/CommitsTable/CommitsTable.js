import React, { Component } from 'react';
import CommitItem from '../CommitItem'

class CommitsTableContainer extends Component {

  render() {
    return <CommitsTable commits={this.props.commits} />
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
