import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CommitItem extends Component {
  render() {
    return (
      <tr className="commit-item">
        <td className="commit-item__sha">{this.props.commit.sha}</td>
        <td className="commit-item__message">{this.props.commit.commit.message}</td>
        <td className="commit-item__author">{this.props.commit.author ? this.props.commit.author.login : ''}</td>
      </tr>
    )
  }
}

CommitItem.propTypes = {
  commit: PropTypes.object.isRequired
}

export default CommitItem
