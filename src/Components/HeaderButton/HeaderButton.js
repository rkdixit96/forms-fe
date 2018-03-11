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
        {this.props.label}
      </div>
    );
  }
}

export default HeaderButton;
