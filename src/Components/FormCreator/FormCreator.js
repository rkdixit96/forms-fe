import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './FormCreator.css';

import QuestionCreator from '../QuestionCreator/QuestionCreator';
import InputContainer from '../InputContainer/InputContainer';

class FormCreator extends Component {
  constructor(props) {
    super(props);
    FormCreator.propTypes = {
      onSubmit: PropTypes.func.isRequired,

    };
    FormCreator.defaultProps = {

    };
    this.state = {
      formTitle: '',
      questions: [{
        questionText: '',
        answerType: 'Short answer',
        isRequired: false,
      }],
    };

    this.onQuestionChange = this.onQuestionChange.bind(this);
    this.addQuestion = this.addQuestion.bind(this);
    this.populateQuestions = this.populateQuestions.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit() {
    axios.post('/newForm', this.state).then(() => {
      this.setState({
        formTitle: '',
        questions: [{
          questionText: '',
          answerType: 'Short answer',
          isRequired: false,
        }],
      });
      this.props.onSubmit();
    });
  }

  onTitleChange(event) {
    this.setState({
      formTitle: event.target.value,
    });
  }


  onQuestionChange(index, changeField, changeValue) {
    const qArray = this.state.questions.slice();
    qArray[index][changeField] = changeValue;
    this.setState({
      questions: qArray,
    });
  }

  addQuestion() {
    const newQuestionsArray = this.state.questions.concat({
      questionText: '',
      answerType: 'Short answer',
      isRequired: false,
    });
    this.setState({
      questions: newQuestionsArray,
    });
  }

  populateQuestions() {
    return this.state.questions.map((question, index) => <QuestionCreator questionNumber={index} questionText={question.questionText} answerType={question.answerType} isRequired={question.isRequired} onChange={this.onQuestionChange} />);
  }


  render() {
    return (
      <div className="FormCreator" >
        <InputContainer value={this.state.formTitle} placeholder="Enter form title" onChange={this.onTitleChange} />
        <input type="button" value="Submit" onClick={this.onFormSubmit} />
        <input type="button" value="Add Question" onClick={this.addQuestion} />
        {this.populateQuestions()}
      </div>
    );
  }
}

export default FormCreator;
