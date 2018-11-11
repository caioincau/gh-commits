import React, { Component } from 'react'
import ReactLoading from 'react-loading'
import CommitItem from '../CommitItem'
import styles from './CommitTable.module.css'

class CommitsTableContainer extends Component {

  render() {
    const commits = this.props.filter ? this.filterCommits(this.props.commits, this.props.filter) : this.props.commits
    return <CommitsTable commits={commits} />
  }

  filterCommits(commits, filter) {
    return (commits && filter) ? commits.filter(commit => commit.commit.message.toLowerCase().includes(filter.toLowerCase())) : commits
  }

}

const CommitsTable = ({commits}) => {
  if(commits.length < 1) {
    return (<div className={styles.loading}><ReactLoading type="spokes" color="#ff5a49" /></div>)
  }
  return (
  <table className={`${styles.table} striped responsive-table`}>
    <thead>
      <tr>
        <th>Hash</th>
        <th>Message</th>
        <th>Author</th>
      </tr>
    </thead>
    <tbody>
      { commits && commits.map(commit => <CommitItem key={commit.sha} commit={commit}></CommitItem>) }
    </tbody>
  </table>
)}


export default CommitsTableContainer
