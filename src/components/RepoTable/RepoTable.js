import React, { Component } from 'react';
import RepoItem from '../RepoItem'

class RepoTableContainer extends Component {

  render() {
    return <RepoTable repos={this.props.repos} />
  }

}

const RepoTable = ({repos}) => (
  <table className="striped">
    <tbody>
      { repos && repos.map(repo => <RepoItem key={repo.id} repo={repo}></RepoItem>) }
    </tbody>
  </table>
)

export default RepoTableContainer
