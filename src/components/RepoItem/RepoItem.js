import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class RepoItem extends Component {
  render() {
    return (
      <tr className="repo-item">
        <td className="repo-item__link"><Link to={`/repository/${this.props.repo.name}`}>{this.props.repo.name}</Link> </td>
        <td className="repo-item__description">{this.props.repo.description}</td>
        <td className="repo-item__start">{this.props.repo.stargazers_count}</td>
      </tr>
    )
  }
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
}

export default RepoItem
