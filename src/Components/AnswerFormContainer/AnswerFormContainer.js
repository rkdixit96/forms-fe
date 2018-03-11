import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AnswerFormContainer.css';

import FormCard from '../FormCard/FormCard';

class AnswerFormContainer extends Component {
  constructor(props) {
    super(props);
    AnswerFormContainer.propTypes = {
      questions: PropTypes.array.isRequired,
    };
    AnswerFormContainer.defaultProps = {

    };
    this.state = {
    };

    this.populateForms = this.populateForms.bind(this);
  }

  populateForms() {
    return this.props.forms.map(form => <FormCard formId={form.id} formTitle={form.title} />);
  }


  render() {
    return (
      <div className="form-container-enclose">
          AVAILABLE FORMS
        <div className="AnswerFormContainer">
          {this.populateForms()}
        </div>
      </div>
    );
  }
}

export default AnswerFormContainer;
