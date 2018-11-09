import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import RepoItem from '../RepoItem'
import './RepoTable.css';

class RepoTableContainer extends Component {
  render() {
    return <RepoTable repos={this.props.repos} />
  }
}

const RepoTable = ({repos}) => {
  if(repos.length < 1) {
    return (<div className="repos-table__loading"><ReactLoading type="spokes" color="#ff5a49" /></div>)
  }
  return (
  <div>
    <table className="striped responsive-table">
      <thead>
        <tr className="repo-item">
          <th>Name</th>
          <th>Description</th>
          <th>Stars</th>
        </tr>
      </thead>
      <tbody>
        { repos && repos.map(repo => <RepoItem key={repo.id} repo={repo}></RepoItem>) }
      </tbody>
    </table>
  </div>
)}

export default RepoTableContainer
