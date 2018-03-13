
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './HeaderButton.css';

class HeaderButton extends Component {
  constructor(props) {
    super(props);
    HeaderButton.propTypes = {
      label: PropTypes.string,
      onClick: PropTypes.func.isRequired,
    };
    HeaderButton.defaultProps = {
      label: 'default',
    };
    this.state = {
    };
  }
  render() {
    return (
      <div className="HeaderButton" onClick={this.props.onClick} >
        <i className="material-icons">add_circle</i>
        <div className="label">
          {this.props.label}
        </div>
      </div>
    );
  }
}

export default HeaderButton;
