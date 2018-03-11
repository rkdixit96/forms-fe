import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './FloatingContainer.css';


class FloatingContainer extends Component {
  constructor(props) {
    super(props);
    FloatingContainer.propTypes = {
      children: PropTypes.node.isRequired,
    };
    FloatingContainer.defaultProps = {
    };
    this.state = {
    };
  }
  render() {
    return (
      <div className="FloatingContainer" >
        {this.props.children}
      </div>
    );
  }
}

export default FloatingContainer;

