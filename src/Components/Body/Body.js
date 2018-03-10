import React, { Component } from 'react';
import axios from 'axios';
import './Body.css';

import FormContainer from '../FormContainer/FormContainer';

class Body extends Component {
  constructor(props) {
    super(props);
    Body.propTypes = {
    };
    Body.defaultProps = {
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
        <FormContainer forms={this.state.forms} />
      </div>

    );
  }
}

export default Body;
