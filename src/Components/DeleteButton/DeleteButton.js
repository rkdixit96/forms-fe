import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './DeleteButton.css';

class DeleteButton extends Component {
  constructor(props) {
    super(props);
    DeleteButton.propTypes = {
      onClick: PropTypes.func.isRequired,
    };
    DeleteButton.defaultProps = {
    };
    this.state = {
    };
  }
  render() {
    return (
      <div className="DeleteButton" onClick={this.props.onClick} >
        <i className="material-icons">delete</i>
      </div>
    );
  }
}

export default DeleteButton;
