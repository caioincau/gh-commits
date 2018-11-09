import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CommitItem.css';

class CommitItem extends Component {
  render() {
    return (
      <tr className="commit-item">
        <td>{this.props.commit.sha}</td>
        <td>{this.props.commit.author.login}</td>
        <td>{this.props.commit.author.message}</td>
      </tr>
    )
  }
}

CommitItem.propTypes = {
  commit: PropTypes.object.isRequired
}

export default CommitItem
