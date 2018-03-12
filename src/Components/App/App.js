import React, { Component } from 'react';
import './App.css';

import Header from '../Header/Header';
import Body from '../Body/Body';
import FloatingContainer from '../FloatingContainer/FloatingContainer';
import FormCreator from '../FormCreator/FormCreator';
import AnswerFormContainer from '../AnswerFormContainer/AnswerFormContainer';
import FormResponse from '../FormResponse/FormResponse';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'Forms',
      answerFormId: 999,
      answerFormName: '',
      responseFormName: '',
      responseQuestions: '',
    };
    this.submitFormOnClick = this.submitFormOnClick.bind(this);
    this.createFormOnClick = this.createFormOnClick.bind(this);
    this.selectFormOnClick = this.selectFormOnClick.bind(this);
    this.onAnswerSubmit = this.onAnswerSubmit.bind(this);
    this.onResponseClick = this.onResponseClick.bind(this);
  }

  onResponseClick(formTitle, questions) {
    this.setState({
      responseFormName: formTitle,
      responseQuestions: questions,
      page: 'Response',
    });
  }

  onAnswerSubmit() {
    this.setState({
      page: 'Forms',
      answerFormId: '',
      answerFormName: '',
    });
  }
  selectFormOnClick(formId, title) {
    this.setState({
      page: 'Answer',
      answerFormId: formId,
      answerFormName: title,
    });
  }

  submitFormOnClick() {
    this.setState({
      page: 'Forms',
    });
  }


  createFormOnClick() {
    this.setState({
      page: 'CreateForm',
    });
  }

  render() {
    if (this.state.page === 'Forms') {
      return (
        <div className="App">
          <Header showButton onClick={this.createFormOnClick} />
          <Body showBody onClick={this.selectFormOnClick} onResponseClick={this.onResponseClick} />
        </div>
      );
    }
    if (this.state.page === 'CreateForm') {
      return (
        <div className="App">
          <Header />
          <FloatingContainer >
            <FormCreator onSubmit={this.submitFormOnClick} />
          </FloatingContainer>
          <Body />
        </div>
      );
    }
    if (this.state.page === 'Answer') {
      return (
        <div className="App">
          <Header />
          <FloatingContainer >
            <AnswerFormContainer formId={this.state.answerFormId} title={this.state.answerFormName} onSubmit={this.onAnswerSubmit} />
          </FloatingContainer>
          <Body />
        </div>
      );
    }
    if (this.state.page === 'Response') {
      return (
        <div className="App">
          <Header />
          <FloatingContainer >
            <FormResponse formTitle={this.state.responseFormName} questions={this.state.responseQuestions} />
          </FloatingContainer>
          <Body />
        </div>

      );
    }
    return (
      <div>
        You cannot break my app!
      </div>
    );
  }
}

export default App;
