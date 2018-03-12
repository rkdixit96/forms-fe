import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './FormResponse.css';

import QuestionResponse from '../QuestionResponse/QuestionResponse';

class FormResponse extends Component {
  constructor(props) {
    super(props);
    FormResponse.propTypes = {
      questions: PropTypes.array.isRequired,
      formTitle: PropTypes.string,

    };
    FormResponse.defaultProps = {
      formTitle: 'default',

    };
    this.state = {
    };

    this.populateQuestions = this.populateQuestions.bind(this);
  }

  populateQuestions() {
    return this.props.questions.map(question => <QuestionResponse questionText={question.questionText} answers={question.answers} />);
  }


  render() {
    return (
      <div className="form-container-enclose">
        {this.props.formTitle}
        <div className="FormResponse">
          {this.populateQuestions()}
        </div>
      </div>
    );
  }
}

export default FormResponse;
