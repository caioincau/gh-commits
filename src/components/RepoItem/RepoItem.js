import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import './RepoItem.css';

class RepoItem extends Component {
  constructor(props) {
    super(props);
    this.goTo = this.goTo.bind(this);
  }

  goTo(e) {
    console.log('click')
  }

  render() {
    return (
      <tr className="repo-item">
        <td className="repo-item__link"><Link to={`/repository/${this.props.repo.name}`}>{this.props.repo.name}</Link> </td>
        <td className="repo-item__description" onClick={this.goTo}>{this.props.repo.description}</td>
      </tr>
    )
  }
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
}

export default RepoItem
