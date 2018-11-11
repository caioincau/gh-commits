
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as repoAction from '../../store/actions/github'

import RepoTableContainer from '../../components/RepoTable'
import axios from 'axios'
import styles from './RepoList.module.css'
import FailurePage from '../../components/FailurePage'

class RepoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: false,
      page: 1,
      order_by: 'name'
    }
  }

  componentDidMount() {
    this.fetchRepos(1)
    window.onscroll = () => {
      const reachedEndOfPage = window.innerHeight + document.documentElement.scrollTop
        === document.documentElement.offsetHeight
      if (reachedEndOfPage) {
        this.fetchRepos(this.state.page)
      }
    }

  }

  fetchRepos(page) {
    console.log(process.env.REACT_APP_CLIENT_ID)
    axios.get(`https://api.github.com/users/caioincau/repos?page=${page}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`)
      .then(response => {
        this.props.setRepos(response.data)
        this.setState({
          ...this.state,
          page: page+1
        })
      }).catch((error) => {
        this.setState({
          error: true
        })
      })
  }

  changeSort(name) {
    this.setState({
      ...this.state,
      order_by: name
    })
  }

  sort(repoList, attr) {
    const POSSIBLES = ['name', 'description', 'stargazers_count']
    if(!POSSIBLES.includes(attr)) {
      return repoList
    }
    let newOrder = repoList.sort((a, b) => + String(a[attr]).localeCompare(b[attr]))
    if(attr === 'stargazers_count') newOrder = newOrder.reverse()
    return newOrder
  }

  render = () => {
    if(this.state.error) {
      return (<FailurePage></FailurePage>)
    }
    return (
      <div className={styles.list}>
        <h2 className={styles.header}>@caioincau repositories</h2>
        <div>
          <p>Sort by:</p>
          <button className={`${styles.button} btn`} onClick={() => this.changeSort('name')}>Name</button>
          <button className={`${styles.button} btn`} onClick={() => this.changeSort('description')}>Description</button>
          <button className={`${styles.button} btn`} onClick={() => this.changeSort('stargazers_count')}>Stars</button>
        </div>
        <div>
          <RepoTableContainer repos={this.sort(this.props.repoList, this.state.order_by)}></RepoTableContainer>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  repoList: state.github.repos
})

const mapDispatchToProps = dispatch => bindActionCreators(repoAction, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(RepoList)
