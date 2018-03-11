import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './AnswerFormContainer.css';

import AnswerForm from '../AnswerForm/AnswerForm';

class AnswerFormContainer extends Component {
  constructor(props) {
    super(props);
    AnswerFormContainer.propTypes = {
      formId: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    };
    AnswerFormContainer.defaultProps = {
    };
    this.state = {
      questions: [],
    };

    this.populateAnswerForms = this.populateAnswerForms.bind(this);
    // this.onAnswerChange = this.onAnswerChange.bind(this);
  }

  componentDidMount() {
    axios.get(`/questions/${this.props.formId}`).then((questions) => {
      this.setState({
        questions: questions.data.questions,
      });
    });
  }

  populateAnswerForms() {
    return this.state.questions.map(question => <AnswerForm questionText={question.questionText} answerType={question.answerType} isRequired={question.isRequired} questionId={question.id} />);
  }

  //   onAnswerChange(questionId,)


  render() {
    return (
      <div className="answer-form-container-enclose">
        {this.props.title}
        <div className="AnswerFormContainer">
          {this.populateAnswerForms()}
        </div>
      </div>
    );
  }
}

export default AnswerFormContainer;
