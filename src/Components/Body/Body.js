import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Body.css';

import FormContainer from '../FormContainer/FormContainer';

class Body extends Component {
  constructor(props) {
    super(props);
    Body.propTypes = {
      showBody: PropTypes.bool,
      onClick: PropTypes.func.isRequired,
      onResponseClick: PropTypes.func.isRequired,
    };
    Body.defaultProps = {
      showBody: false,
    };
    this.state = {
      forms: [],
    };
  }

  componentDidMount() {
    axios.get('/forms').then((formValues) => {
      this.setState({
        forms: formValues.data.formValues,
      });
    });
  }


  render() {
    return (
      <div className="Body" >
        {this.props.showBody && <FormContainer forms={this.state.forms} onClick={this.props.onClick} onResponseClick={this.props.onResponseClick} />}
      </div>

    );
  }
}

export default Body;
