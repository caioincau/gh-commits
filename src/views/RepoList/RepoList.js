
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as repoAction from '../../store/actions/github'

import RepoTableContainer from '../../components/RepoTable'
import axios from 'axios'
import './RepoList.css';
import FailurePage from '../../components/FailurePage';

class RepoList extends Component {
  constructor(props) {
    super(props);
    this.state = { error: false }
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/caioincau/repos')
    .then(response => {
      this.props.setRepos(response.data)
      console.log(this.props.repoList)
    }).catch((error) => {
      console.log(error)
      this.setState({
        error: true
      });
    })
  }

  render = () => {
    if(this.state.error) {
      return (<FailurePage></FailurePage>)
    }
    return (
      <div className="repo-list">
        <h2 className="repo-list__header">Repositories</h2>
        <div>
          <RepoTableContainer repos={this.props.repoList}></RepoTableContainer>
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
