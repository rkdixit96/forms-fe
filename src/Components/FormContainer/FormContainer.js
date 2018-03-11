import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './FormContainer.css';

import FormCard from '../FormCard/FormCard';

class FormContainer extends Component {
  constructor(props) {
    super(props);
    FormContainer.propTypes = {
      forms: PropTypes.array.isRequired,
      onClick: PropTypes.func.isRequired,
    };
    FormContainer.defaultProps = {

    };
    this.state = {
    };

    this.populateForms = this.populateForms.bind(this);
  }

  populateForms() {
    return this.props.forms.map(form => <FormCard formId={form.id} formTitle={form.title} onClick={this.props.onClick} />);
  }


  render() {
    return (
      <div className="form-container-enclose">
          AVAILABLE FORMS
        <div className="FormContainer">
          {this.populateForms()}
        </div>
      </div>
    );
  }
}

export default FormContainer;
