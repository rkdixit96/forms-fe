import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './FormCreator.css';

import QuestionCreator from '../QuestionCreator/QuestionCreator';
import InputContainer from '../InputContainer/InputContainer';
import TransparentButton from '../TransparentButton/TransparentButton';
import AddButton from '../AddButton/AddButton';

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
        answerType: 'Short Answer',
        isRequired: false,
      }],
    };

    this.onQuestionChange = this.onQuestionChange.bind(this);
    this.addQuestion = this.addQuestion.bind(this);
    this.populateQuestions = this.populateQuestions.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.deleteQuestion = this.deleteQuestion.bind(this);
  }

  onFormSubmit() {
    axios.post('/newForm', this.state).then(() => {
      this.setState({
        formTitle: '',
        questions: [{
          questionText: '',
          answerType: 'Short Answer',
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
      answerType: 'Short Answer',
      isRequired: false,
    });
    this.setState({
      questions: newQuestionsArray,
    });
  }

  deleteQuestion(index) {
    const q = [...this.state.questions];
    q.splice(index, 1);
    this.setState({
      questions: q,
    });
    // const qArrayp1 = this.state.questions.slice(0, index);
    // const qArrayp2 = this.state.questions.slice(index + 1, this.state.questions.length);
    // const qArray = qArrayp1.concat(qArrayp2);
    // this.setState({
    //   questions: qArray,
    // });
    // this.setState(this.state);
  }

  populateQuestions(questions) {
    return questions.map((question, index) => <QuestionCreator key={index} questionNumber={index} questionText={question.questionText} answerType={question.answerType} isRequired={question.isRequired} onChange={this.onQuestionChange} onDelete={this.deleteQuestion} />);
  }


  render() {
    // console.log('Paridghi');
    return (
      <div className="FormCreator" >
        <div className="form-header">
          <InputContainer className="title-input" value={this.state.formTitle} placeholder="Form title" onChange={this.onTitleChange} />
          <div className="form-buttons">
            <TransparentButton label="SUBMIT" onClick={this.onFormSubmit} />
            <AddButton className="add-button" onClick={this.addQuestion} />
          </div>
        </div>
        {/* {this.populateQuestions(this.state.questions)} */}
        {
          this.state.questions.map((question, index) => <QuestionCreator key={index} questionNumber={index} questionText={question.questionText} answerType={question.answerType} isRequired={question.isRequired} onChange={this.onQuestionChange} onDelete={this.deleteQuestion} />)
        }
      </div>
    );
  }
}

export default FormCreator;
