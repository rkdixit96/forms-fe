import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './DropDown.css';


class DropDown extends Component {
  constructor(props) {
    super(props);
    DropDown.propTypes = {
      onChange: PropTypes.func.isRequired,
      value: PropTypes.string.isRequired,
    };
    DropDown.defaultProps = {

    };
    this.state = {
    };
  }


  render() {
    return (
      <div className="DropDown" >
        <select value={this.props.value} onChange={this.props.onChange}>
          <option value="Short Answer">Short Answer</option>
          <option value="Paragraph">Paragraph</option>
          <option value="Date">Date</option>
        </select>
        {this.state.value}
      </div>
    );
  }
}

export default DropDown;
