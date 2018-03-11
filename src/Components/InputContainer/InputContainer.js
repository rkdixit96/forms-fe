import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './InputContainer.css';


class InputContainer extends Component {
  constructor(props) {
    super(props);
    InputContainer.propTypes = {
      placeholder: PropTypes.string,
      value: PropTypes.string.isRequired,
      onChange: PropTypes.func.isRequired,
    };
    InputContainer.defaultProps = {
      placeholder: 'Type text here',
    };
    this.state = {
    };
  }

  render() {
    return (
      <div className="InputContainer" >
        <input value={this.props.value} type="text" placeholder={this.props.placeholder} onChange={this.props.onChange} />
      </div>
    );
  }
}

export default InputContainer;
