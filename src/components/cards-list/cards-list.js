import _ from 'lodash';
import React, { Component, PropTypes } from 'react';

export default class CardsList extends Component {
  onButtonClick (elem, id) {
    if(this.props.onButtonClick) this.props.onButtonClick(elem, id);
  }

  renderList() {
    if (!this.props.list || this.props.list.length === 0) {
      return (
        <div className="col-md-12">
          <span>There are no lectures available</span>
        </div>
      );
    } else {
      return _.map(this.props.list, (elem, id) => {
        return (
          <div className="col-md-3" key={id}>
            <div className="thumbnail">
              <div className="caption">
                <h3 className="m-t-0">{elem.title}</h3>
                <p>{elem.description}</p>
                <p>
                  <a href="#" className="btn btn-primary" role="button" onClick={(e)=>{this.onButtonClick(elem, id)}}>{this.props.buttonLabel || 'Button'}</a>
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
  list: PropTypes.object,
  onButtonClick: PropTypes.func,
  buttonLabel: PropTypes.string
};
