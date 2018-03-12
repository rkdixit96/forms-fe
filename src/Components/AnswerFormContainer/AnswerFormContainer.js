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
      onSubmit: PropTypes.func.isRequired,
    };
    AnswerFormContainer.defaultProps = {
    };
    this.state = {
      questions: [],
      answers: {},
      isRequired: {},
      disabled: true,
    };

    this.populateAnswerForms = this.populateAnswerForms.bind(this);
    this.onAnswerChange = this.onAnswerChange.bind(this);
    this.onAnswersSubmit = this.onAnswersSubmit.bind(this);
    this.canSubmit = this.canSubmit.bind(this);
  }

  componentDidMount() {
    axios.get(`/questions/${this.props.formId}`).then((questions) => {
      this.setState({
        questions: questions.data.questions,
      }, () => {
        this.state.questions.forEach((question) => {
          if (question.isRequired) {
            this.state.isRequired[question.id] = true;
          }
        });
      });
    });
  }

  onAnswerChange(questionId, answer) {
    const answers = Object.assign({}, this.state.answers);
    answers[questionId] = answer;
    if (questionId in this.state.isRequired) {
      if (answers[questionId] !== '') {
        this.state.isRequired[questionId] = false;
      } else {
        this.state.isRequired[questionId] = true;
      }
    }

    this.canSubmit();
    this.setState({
      answers,
    });
  }

  onAnswersSubmit() {
    const questionIds = Object.keys(this.state.answers);
    const answers = [];
    questionIds.forEach((id) => {
      const ansObj = { questionId: id, answer: this.state.answers[id] };
      answers.push(ansObj);
    });
    axios.post('/answers', answers).then(() => {
      this.props.onSubmit();
    });
  }

  populateAnswerForms() {
    return this.state.questions.map(question =>
      // if (question.isRequired) {
      //   if (!this.state.isRequired[question.id]) {
      //     this.state.isRequired[question.id] = true;
      //   }
      // }
      (<AnswerForm questionText={question.questionText} answerType={question.answerType} isRequired={question.isRequired} questionId={question.id} onChange={this.onAnswerChange} />
      ));
  }

  canSubmit() {
    const qIds = Object.keys(this.state.isRequired);
    for (let qInd = 0; qInd < qIds.length; qInd += 1) {
      if (this.state.isRequired[qIds[qInd]] === true) {
        this.setState({
          disabled: true,
        });
        return true;
      }
    }
    this.setState({
      disabled: false,
    });
    return false;
  }


  render() {
    return (
      <div className="answer-form-container-enclose">
        {this.props.title}
        <div className="AnswerFormContainer">
          {this.populateAnswerForms()}
          <input type="button" value="Submit" disabled={this.state.disabled} onClick={this.onAnswersSubmit} />
        </div>
      </div>
    );
  }
}

export default AnswerFormContainer;
