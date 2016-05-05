import React, { Component, PropTypes } from 'react';

export default class CardsList extends Component {
  onButtonClick (elem) {
    if(this.props.onButtonClick) this.props.onButtonClick(elem);
  }

  renderList() {
    if (!this.props.list || this.props.list.length === 0) {
      return (
        <span>There are no classes available</span>
      );
    } else {
      return this.props.list.map((elem, index) => {
        return (
          <div className="col-md-3" key={index}>
            <div className="thumbnail">
              <div className="caption">
                <h3 className="m-t-0">{elem.title}</h3>
                <p>{elem.description}</p>
                <p>
                  <a href="#" className="btn btn-primary" role="button" onClick={(e)=>{this.onButtonClick(elem)}}>{this.props.buttonLabel || 'Button'}</a>
                </p>
              </div>
            </div>
          </div>
        );
      });
    }
  }

  render() {
    return (
      <div className="row">
        {this.renderList()}
      </div>
    );
  }
}

CardsList.propTypes = {
  list: PropTypes.array,
  onButtonClick: PropTypes.func,
  buttonLabel: PropTypes.string
};
