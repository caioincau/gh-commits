
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import axios from 'axios'
import { Link } from 'react-router-dom'

import './RepoDetails.css'
import * as repoAction from '../../store/actions/github'

import CommitsTableContainer from '../../components/CommitsTable'
import Filter from '../../components/Filter'
import FailurePage from '../../components/FailurePage';



class RepoDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
      error: false,
      page: 1
    }
    this.onChangeInput = this.onChangeInput.bind(this);
  }

  //Lifecycle
  componentDidMount() {
    this.fetchCommits(1);
    window.onscroll = () => {
      const reachedEndOfPage = window.innerHeight + document.documentElement.scrollTop
        === document.documentElement.offsetHeight;
      if (reachedEndOfPage) {
        this.fetchCommits(this.state.page)
      }
    };
  }

  componentWillUnmount() {
    this.props.clearCommits()
  }

  onChangeInput(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  fetchCommits(page) {
    axios.get(`https://api.github.com/repos/caioincau/${this.props.match.params.id}/commits?page=${page}&client_id=e09786bd7b7fceeec05c&client_secret=8f399db566137bbd578b73adf341cc29bf8445e8`)
      .then(response => {
        this.props.addCommits(response.data);
        this.setState({
          ...this.state,
          page: page+1
        })
      }).catch(() => {
        this.setState({
          ...this.state,
          page: page+1,
          error: true
        });
      });
  }



  render = () => {
    if(this.state.error) {
      return (
        <FailurePage></FailurePage>
      )
    }
    return (
      <div className="card row">
        <div className="repo-details__header">
          <Link className="waves-effect waves-light btn" to="/">Back</Link>
          <div>
            <p>
              {this.props.match.params.id}
            </p>
            <Filter name="filter" change={this.onChangeInput} ></Filter>
          </div>
        </div>
        <CommitsTableContainer commits={this.props.commits} filter={this.state.filter}></CommitsTableContainer>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  commits: state.github.commits
})

const mapDispatchToProps = dispatch => bindActionCreators(repoAction, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(RepoDetails)
