
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './AddButton.css';

class AddButton extends Component {
  constructor(props) {
    super(props);
    AddButton.propTypes = {
      label: PropTypes.string,
      onClick: PropTypes.func.isRequired,
    };
    AddButton.defaultProps = {
      label: 'default',
    };
    this.state = {
    };
  }
  render() {
    return (
      <div className="AddButton" onClick={this.props.onClick} >
        <i className={`material-icons ${this.props.className}`}>add_circle</i>
      </div>
    );
  }
}

export default AddButton;
