
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as repoAction from '../../store/actions/repos'

import RepoTableContainer from '../../components/RepoTable'
import axios from 'axios'
import './RepoList.css';

class RepoList extends Component {
  constructor(props) {
    super(props);
    this.onChangeInput = this.onChangeInput.bind(this);
  }


  onChangeInput(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/caioincau/repos')
    .then(response => {
      this.props.setRepos(response.data)
    })
  }

  render = () => {
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
  repoList: state.repos
})

const mapDispatchToProps = dispatch => bindActionCreators(repoAction, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(RepoList)
