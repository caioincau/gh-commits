import React, { Component } from 'react'

class Filter extends Component {

  render() {
    return (
      <label htmlFor="search">
        Find
        <input type="text"  placeholder="Commit message" name={this.props.name} onInput={this.props.change}></input>
      </label>
    )
  }
}

export default Filter
