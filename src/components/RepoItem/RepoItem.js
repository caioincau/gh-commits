import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './RepoItem.css';

class RepoItem extends Component {
  constructor(props) {
    super(props);
    this.goTo = this.goTo.bind(this);
  }

  goTo(e) {
    console.log('click')
  }

  render(props) {
    return (
      <tr className="repo-item">
        <td className="repo-item__link" onClick={this.goTo}>{this.props.repo.name}</td>
        <td className="repo-item__description" onClick={this.goTo}>{this.props.repo.description}</td>
      </tr>
    )
  }
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
}

export default RepoItem
