import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import './RepoItem.css';

class RepoItem extends Component {
  render() {
    return (
      <tr className="repo-item">
        <td className="repo-item__link"><Link to={`/repository/${this.props.repo.name}`}>{this.props.repo.name}</Link> </td>
        <td className="repo-item__description">{this.props.repo.description}</td>
      </tr>
    )
  }
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
}

export default RepoItem
