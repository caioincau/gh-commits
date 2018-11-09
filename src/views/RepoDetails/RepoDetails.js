
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import axios from 'axios'
import { Link } from 'react-router-dom'
import * as repoAction from '../../store/actions/github'

import CommitsTableContainer from '../../components/CommitsTable'


window.onscroll = () => {
  if (
    window.innerHeight + document.documentElement.scrollTop
    === document.documentElement.offsetHeight
  ) {
    console.log('hi')
  }
};

class RepoDetails extends Component {
  componentDidMount() {
    axios.get(`https://api.github.com/repos/caioincau/${this.props.match.params.id}/commits`)
    .then(response => {
      this.props.addCommits(response.data)
      console.log(this.props.commits)
    })
  }

  render = () => {
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
