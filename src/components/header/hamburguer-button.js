import React, { Component, PropTypes } from 'react';

export default class HamburguerButton extends Component {
  onClickHandler() {
    if (this.props.onClick) this.props.onClick();
  }

  render() {
    return (
      <button className="navbar-toggle" type="button" onClick={this.onClickHandler.bind(this)}>
        <span className="icon-bar"/>
        <span className="icon-bar"/>
        <span className="icon-bar"/>
      </button>
    );
  }
}

HamburguerButton.propTypes = {
  onClick: PropTypes.func
};
