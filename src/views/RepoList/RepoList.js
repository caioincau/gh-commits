
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as repoAction from '../../store/actions/repos'

// import Filter from '../../components/Filter'
// import CoinTableContainer from '../../components/CoinTable'
import axios from 'axios'
import './RepoList.css';

class RepoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: ''
    };
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
          { this.props.repoList.length }
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
