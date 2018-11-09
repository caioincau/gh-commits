
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import axios from 'axios'
import { Link } from 'react-router-dom'
import * as repoAction from '../../store/actions/github'

import CommitsTableContainer from '../../components/CommitsTable'
import FailurePage from '../../components/FailurePage';



class RepoDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      page: 1
    }
  }

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

  fetchCommits(page) {
    axios.get(`https://api.github.com/repos/caioincau/${this.props.match.params.id}/commits?page=${page}`)
      .then(response => {
        this.props.addCommits(response.data);
      }).catch(() => {
        this.setState({
          ...this.state,
          page: page+1,
          error: true
        });
      });
  }

  componentWillUnmount() {
    this.props.clearCommits()
  }

  render = () => {
    if(this.state.error) {
      return (
        <FailurePage></FailurePage>
      )
    }
    return (
      <div>
        <Link to="/">Back</Link>
        {this.props.match.params.id}
          <CommitsTableContainer commits={this.props.commits}></CommitsTableContainer>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  commits: state.github.commits
})

const mapDispatchToProps = dispatch => bindActionCreators(repoAction, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(RepoDetails)
