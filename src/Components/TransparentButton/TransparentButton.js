import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TransparentButton.css';

class TransparentButton extends Component {
  constructor(props) {
    super(props);
    TransparentButton.propTypes = {
      label: PropTypes.string,
      onClick: PropTypes.func.isRequired,
    };
    TransparentButton.defaultProps = {
      label: 'default',
    };
    this.state = {
    };
  }
  render() {
    return (
      <div className="TransparentButton" >
        <input className={`TransparentButton ${this.props.className}`}type="button" value={this.props.label} onClick={this.props.onClick} disabled={this.props.disabled} />
      </div>
    );
  }
}

export default TransparentButton;
